
namespace DatingApp.API.Helpers
{
    using System;

    public class UserParams
    {
        private const int MaxPageSize = 25;
        public int PageNumber { get; set; } = 1;
        private int _pageSize = 10;
        public int PageSize
        {
            get { return _pageSize; }
            set { _pageSize = (value > MaxPageSize) ? MaxPageSize : Math.Max(value, 0); }
        }
        public int UserId { get; set; }
        public string Gender { get; set; }
    }
}