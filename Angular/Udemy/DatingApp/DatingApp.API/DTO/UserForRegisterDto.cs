using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTO
{
    public class UserForRegisterDto
    {

        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(maximumLength: 8, MinimumLength = 4, ErrorMessage = "You must specify a password between 4-8 characters.")]
        public string Password { get; set; }
    }
}