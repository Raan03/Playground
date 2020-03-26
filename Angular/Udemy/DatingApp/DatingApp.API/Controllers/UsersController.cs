
namespace DatingApp.API.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Security.Claims;
    using System.Threading.Tasks;
    using AutoMapper;
    using DatingApp.API.Attributes;
    using DatingApp.API.Data;
    using DatingApp.API.DTO;
    using DatingApp.API.Helpers;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    [ServiceFilter(typeof(LogUserActivity))]
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IDatingRepository _datingRepository;
        private readonly IMapper _mapper;
        public UsersController(IDatingRepository datingRepository, IMapper mapper)
        {
            _mapper = mapper;
            _datingRepository = datingRepository;
        }

        [HttpGet]

        public async Task<IActionResult> GetUsers([FromQuery]UserParams userParams)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var userFromRepo = await _datingRepository.GetUser(currentUserId);

            userParams.UserId = currentUserId;

            if (string.IsNullOrWhiteSpace(userParams.Gender))
            {
                userParams.Gender = userFromRepo.Gender == "male" ? "female" : "male";
            }

            var users = await _datingRepository.GetUsers(userParams);
            var usersDto = _mapper.Map<IEnumerable<UserForListDto>>(users);

            Response.AddPagination(users);

            return Ok(usersDto);
        }
        [HttpGet("{id}", Name = nameof(GetUser))]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _datingRepository.GetUser(id);
            var userDto = _mapper.Map<UserForDetailsDto>(user);

            return Ok(userDto);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto updatedUser)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var user = await _datingRepository.GetUser(id);
            _mapper.Map(updatedUser, user);

            if (await _datingRepository.SaveAll())
            {
                return NoContent();
            }

            throw new Exception($"Updating ID {id} failed in save");
        }
    }
}