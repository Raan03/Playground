using System;
using System.Linq;
using AutoMapper;
using DatingApp.API.DTO;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
            .ForMember(
                dest => dest.PhotoUrl,
                options => options.MapFrom(src => src.Photos.FirstOrDefault(d => d.IsMain).Url)
            ).ForMember(
                dest => dest.Age,
                options => options.MapFrom(src => src.DateOfBirth.CalculateAge())
            );

            CreateMap<User, UserForDetailsDto>()
            .ForMember(
                dest => dest.PhotoUrl,
                options => options.MapFrom(src => src.Photos.FirstOrDefault(d => d.IsMain).Url)
            ).ForMember(
                dest => dest.Age,
                options => options.MapFrom(src => src.DateOfBirth.CalculateAge())
            ); ;

            CreateMap<Photo, UserPhotoForDetailsDto>();
            CreateMap<UserForUpdateDto, User>();
        }
    }
}