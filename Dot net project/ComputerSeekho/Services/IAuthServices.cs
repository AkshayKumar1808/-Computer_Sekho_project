using ComputerSeekho.Models;
using ComputerSeekho.Repository;
using ComputerSeekho.Services;

namespace ComputerSeekho.Services
{
    public interface IAuthServices
    {
        Task<bool> SignUpStaffAsync(AdminLogin admin);
        Task<bool> ValidateLoginAsync(string email, string password);
    }
}
