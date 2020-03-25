
namespace DatingApp.API.Controllers
{
    using System.Linq;
    using System.Security.Claims;
    using System.Threading.Tasks;
    using AutoMapper;
    using CloudinaryDotNet;
    using CloudinaryDotNet.Actions;
    using DatingApp.API.Data;
    using DatingApp.API.DTO;
    using DatingApp.API.Helpers;
    using DatingApp.API.Models;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Options;

    [ApiController]
    [Authorize]
    [Route("api/users/{userId}/photos")]
    public class PhotosController : ControllerBase
    {
        private readonly IDatingRepository _datingRepository;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private readonly IMapper _mapper;
        private readonly Cloudinary _cloudinary;

        public PhotosController(IDatingRepository datingRepository, IMapper mapper, IOptions<CloudinarySettings> cloudinaryConfig)
        {
            _mapper = mapper;
            _cloudinaryConfig = cloudinaryConfig;
            _datingRepository = datingRepository;

            Account acc = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret
            );

            _cloudinary = new Cloudinary(acc);
        }

        [HttpGet("{id}", Name = "GetPhoto")]
        public async Task<IActionResult> GetPhoto(int id)
        {
            var photoFromRepo = await _datingRepository.GetPhoto(id);

            var phoToDto = _mapper.Map<PhotoForReturnDto>(photoFromRepo);

            return Ok(phoToDto);
        }
        [HttpPost]
        public async Task<IActionResult> AddPhotoForUser(int userId, PhotoForCreationDto photoDto)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var user = await _datingRepository.GetUser(userId);

            var file = photoDto.File;

            var result = new ImageUploadResult();

            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams
                    {
                        File = new FileDescription(file.Name, stream),
                        Transformation = new Transformation().Width(500).Height(500).Crop("fill").Gravity("face")
                    };

                    result = _cloudinary.Upload(uploadParams);
                }
            }

            photoDto.Url = result.Uri.ToString();
            photoDto.PublicId = result.PublicId;

            var photo = _mapper.Map<Photo>(photoDto);

            if (!user.Photos.Any(d => d.IsMain))
            {
                photo.IsMain = true;
            }

            user.Photos.Add(photo);


            if (await _datingRepository.SaveAll())
            {
                // return Ok();
                var photoToReturn = _mapper.Map<PhotoForReturnDto>(photo);
                return CreatedAtRoute("GetPhoto", new { id = photo.Id }, photoToReturn);
            }

            return BadRequest("Could not create photo");
        }
    }
}