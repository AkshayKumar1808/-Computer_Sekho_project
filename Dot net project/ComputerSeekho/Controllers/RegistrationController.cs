using ComputerSeekho.Services;
using Microsoft.AspNetCore.Mvc;
using ComputerSeekho.Models;
using ComputerSeekho.DTO;
using Org.BouncyCastle.Ocsp;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ComputerSeekho.Controllers
{




      [Route("api/reg/")]
      [ApiController]
      public class RegistrationController : ControllerBase
      {
          private IRegistration reg;

          public RegistrationController(IRegistration reg)
          {
              this.reg = reg;
        }






        [HttpPost]
        public async Task<IActionResult> RegisterStudent([FromBody] StudentRegistrationDTO registrationDto)
        {
            try
            {
                var studentId = await reg.RegisterStudentAsync(registrationDto);
                return Ok(new { StudentId = studentId });
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }


























        /*   [HttpPost("register")]
           public async Task<IActionResult> RegisterStudent([FromBody] StudentRegistrationDTO studentRegistrationDTO)
           {
               if (studentRegistrationDTO == null)
               {
                   return BadRequest("Invalid data.");
               }

               bool isRegistered = await reg.RegisterStudentAsync(studentRegistrationDTO);

               if (isRegistered)
               {
                   return Ok("Student registered successfully.");
               }

               return StatusCode(500, "An error occurred while registering the student.");
           }*/









        /* [HttpPost("student")]
         public void Poststudent([FromBody] StudentMaster value)
         {
         }



         [HttpPost("Payment")]
         public void Postpayment([FromBody] Pay value)
         {
         }*/





    }
}
