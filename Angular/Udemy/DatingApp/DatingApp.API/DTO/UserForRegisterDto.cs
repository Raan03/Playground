namespace DatingApp.API.DTO
{
    using System;
    using System.ComponentModel.DataAnnotations;
    public class UserForRegisterDto
    {
        public UserForRegisterDto()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }
        [Required]
        public string Gender { get; set; }
        [Required]
        public string KnownAs { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Country { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(maximumLength: 8, MinimumLength = 4, ErrorMessage = "You must specify a password between 4-8 characters.")]
        public string Password { get; set; }
    }
}