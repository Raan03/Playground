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
            CreateMap<Photo, PhotoForReturnDto>();
            CreateMap<PhotoForCreationDto, Photo>();
            CreateMap<UserForRegisterDto, User>();
            CreateMap<MessageForCreationDto, Message>()
            .ReverseMap();

            CreateMap<Message, MessageToReturnDto>()
            .ForMember(u => u.SenderPhotoUrl, opt => opt.MapFrom(u => u.Sender.Photos.FirstOrDefault(d => d.IsMain).Url))
            .ForMember(u => u.RecipientPhotoUrl, opt => opt.MapFrom(u => u.Recipient.Photos.FirstOrDefault(d => d.IsMain).Url));
        }
    }
}