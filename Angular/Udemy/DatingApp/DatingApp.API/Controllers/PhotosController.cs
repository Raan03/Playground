
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

        [HttpGet("{id}", Name = nameof(GetPhoto))]
        public async Task<IActionResult> GetPhoto(int id)
        {
            var photoFromRepo = await _datingRepository.GetPhoto(id);

            var phoToDto = _mapper.Map<PhotoForReturnDto>(photoFromRepo);

            return Ok(phoToDto);
        }
        [HttpPost]
        public async Task<IActionResult> AddPhotoForUser(int userId, [FromForm] PhotoForCreationDto photoDto)
        {
            // should be in an attribute
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

                    result = await _cloudinary.UploadAsync(uploadParams);
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
                // return CreatedAtAction(nameof(GetPhoto), new { id = photo.Id }, photoToReturn);
                return CreatedAtRoute(nameof(GetPhoto), new { userId, id = photo.Id }, photoToReturn);
            }

            return BadRequest("Could not create photo");
        }
        [HttpPost("{id}/setMain")]
        public async Task<IActionResult> SetMainPhoto(int userId, int id)
        {
            // should be in an attribute
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var user = await _datingRepository.GetUser(userId);

            if (!user.Photos.Any(d => d.Id == id))
            {
                return Unauthorized();
            }

            var photoFromRepo = await _datingRepository.GetPhoto(id);

            if (photoFromRepo.IsMain)
            {
                return BadRequest("This is already main photo.");
            }

            var currentMainPhoto = await _datingRepository.GetUserMainPhoto(userId);

            currentMainPhoto.IsMain = false;
            photoFromRepo.IsMain = true;

            if (await _datingRepository.SaveAll())
            {
                return NoContent();
            }

            return BadRequest("Could not set photo to main");
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePhoto(int userId, int id)
        {
            // should be in an attribute
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var user = await _datingRepository.GetUser(userId);

            if (!user.Photos.Any(d => d.Id == id))
            {
                return Unauthorized();
            }

            var photoFromRepo = await _datingRepository.GetPhoto(id);

            if (photoFromRepo.IsMain)
            {
                return BadRequest("You can't delete the active main photo.");
            }

            if (!string.IsNullOrWhiteSpace(photoFromRepo.PublicId))
            {
                var deleteParams = new DeletionParams(photoFromRepo.PublicId);
                var result = await _cloudinary.DestroyAsync(deleteParams);

                if (result.Result == "ok")
                {
                    _datingRepository.Delete(photoFromRepo);
                }

            }
            else
            {
                _datingRepository.Delete(photoFromRepo);
            }

            if (await _datingRepository.SaveAll())
            {
                return Ok();
            }

            return BadRequest("Could not delete photo");
        }
    }
}