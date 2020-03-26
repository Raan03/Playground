using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Helpers;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DatingRepository : IDatingRepository
    {
        private readonly DataContext _dataContext;

        public DatingRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public void Add<T>(T entity) where T : class
        {
            _dataContext.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _dataContext.Remove(entity);
        }

        public async Task<Photo> GetPhoto(int id)
        {
            var photo = await _dataContext.Photos.FirstOrDefaultAsync(d => d.Id == id);

            return photo;
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _dataContext.Users.Include(d => d.Photos).FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }

        public async Task<Photo> GetUserMainPhoto(int userId)
        {
            return await _dataContext.Photos.Where(d => d.UserId == userId).FirstOrDefaultAsync(d => d.IsMain);
        }

        public async Task<PagedList<User>> GetUsers(UserParams userParams)
        {
            var users = _dataContext.Users.Include(d => d.Photos).AsQueryable();

            users = users.Where(d => d.Id != userParams.UserId);
            users = users.Where(d => d.Gender == userParams.Gender);

            return await PagedList<User>.CreateAsync(users, userParams.PageNumber, userParams.PageSize);
        }

        public async Task<bool> SaveAll()
        {
            return await _dataContext.SaveChangesAsync() > 0;
        }
    }
}