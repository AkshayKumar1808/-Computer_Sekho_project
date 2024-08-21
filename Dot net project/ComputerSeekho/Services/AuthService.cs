using ComputerSeekho.Models;
using ComputerSeekho.Repository;
using ComputerSeekho.Services;
using Microsoft.EntityFrameworkCore;


namespace ComputerSeekho.Services
{
    public class AuthService : IAuthServices
    {
        private readonly AppdbContext _context;

        public AuthService(AppdbContext context)
        {
            _context = context;
        }

        public async Task<bool> SignUpStaffAsync(AdminLogin admin)  
        {
            // Validate input
            if (admin == null || string.IsNullOrWhiteSpace(admin.Email))
            {
                throw new ArgumentException("Invalid admin details provided.");
            }

            // Check if the email exists in the AdminLogin table
            bool emailExistsInAdminLogin = await _context.AdminLogins
                .AnyAsync(a => a.Email == admin.Email);

            if (emailExistsInAdminLogin)
            {
                // Email already exists in AdminLogin table
                return false;
            }

            // Check if the email exists in the StaffMaster table
            var staff = await _context.StaffMasters
                .FirstOrDefaultAsync(s => s.Staffemail == admin.Email);

            if (staff != null)
            {
                // Add new record to AdminLogin table
                admin.Sid = staff.StaffId;

                _context.AdminLogins.Add(admin);

                try
                {
                    await _context.SaveChangesAsync();
                    return true; // Admin record created successfully.
                }
                catch (Exception ex)
                {
                    // Log the exception
                    // For example: _logger.LogError(ex, "An error occurred while saving the admin login.");
                    throw new InvalidOperationException("An error occurred while saving the admin login.", ex);
                }
            }

            // Email does not exist in StaffMaster
            return false;
        }

        // public async Task<bool> SignUpStaffAsync(AdminLogin admin)
        // {
        //     // Check if the email exists in the AdminLogin table
        //     bool emailExistsInAdminLogin = _context.AdminLogins
        //         .Any(a => a.Email == admin.Email);

        //     if (emailExistsInAdminLogin)
        //     {
        //         return false;
        //     }

        //     // Check if the email exists in the StaffMaster table
        //     var staff = _context.StaffMasters
        //         .FirstOrDefault(s => s.Staffemail == admin.Email);

        //     if (staff != null)
        //     {
        //         // Add new record to AdminLogin table
        //         admin.Sid = staff.Staffid;
        //         _context.AdminLogins.Add(admin);
        //         await _context.SaveChangesAsync();
        //         return true; // ("Admin record created successfully.");
        //     }
        //     //NotFound("Email does not exist in StaffMaster.");
        //     return false;
        // }
        

        public async Task<bool> ValidateLoginAsync(string email, string password)
        {
            // Simple validation - no password hash
            return await Task.FromResult(_context.AdminLogins
                .Any(a => a.Email == email && a.Password == password));
        }
    }
}
