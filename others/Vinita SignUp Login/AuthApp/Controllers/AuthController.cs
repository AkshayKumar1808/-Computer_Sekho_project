using AuthApp.Models;
using AuthApp.Repositories;
using AuthApp.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AuthApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthServices _authService;

        public AuthController(IAuthServices authService)
        {
            _authService = authService;
        }

        [HttpPost("signup")]
        public async Task<IActionResult> SignUp([FromBody] AdminLogin admin)
        {
            if (await _authService.SignUpStaffAsync(admin))
            {
                return Ok("Sign-up successful.");
            }
            return BadRequest("Invalid user details.");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            if (await _authService.ValidateLoginAsync(request.Email, request.Password))
            {
                return Ok("Login successful");
            }
            return Unauthorized("Invalid credentials");
        }
    }

    public class LoginRequest
    {
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
    }
}