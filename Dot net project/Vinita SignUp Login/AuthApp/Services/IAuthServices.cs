using AuthApp.Models;

namespace AuthApp.Services
{
    public interface IAuthServices
    {
        Task<bool> SignUpStaffAsync(AdminLogin admin);
        Task<bool> ValidateLoginAsync(string email, string password);
    }
}
