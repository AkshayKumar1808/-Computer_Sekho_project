using Computer_Sekho.Models;
using Computer_Sekho.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Computer_Sekho.Controllers
{
    [Route("api/")]
    [ApiController]
    public class AdminEnquiryController : ControllerBase
    {
        private readonly IAdminEnquiryService adminEnquiryService;
        public AdminEnquiryController(IAdminEnquiryService adminEnquiryService)
        {
            this.adminEnquiryService = adminEnquiryService;
        }
        // GET: api/<AdminEnquiryController>
        [HttpGet("pta/getEn")]
        public async Task<ActionResult<IEnumerable<AdminEnquiry>>> GetEnquiry()
        {
            var enquiry = await adminEnquiryService.GetAdminEnquiry();
            return Ok(enquiry);
        }

        // GET api/<AdminEnquiryController>/5
        [HttpGet("{id}")]
        public AdminEnquiry GetAdminEnquiry(int id)
        {
            return adminEnquiryService.GetAdminEnquiry(id);
        }

        [HttpPost("admin/Add")]
        public  IActionResult PostEnquiry([FromBody] AdminEnquiry enquiry)
        {
            if (enquiry == null)
            {
                return BadRequest("Enquiry data is null.");
            }

            try
            {
                adminEnquiryService.AddEnquiry(enquiry);
                return Ok("Enquiry added successfully.");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        // PUT api/<AdminEnquiryController>/5
        [HttpPut("admin/up/{id}")]
        public async Task<IActionResult> UpdateEnquiry(int id, [FromBody] AdminEnquiry adminEnquiry)
        {
            try
            {
                await adminEnquiryService.UpdateAdminEnquiry(id, adminEnquiry);
                return NoContent(); // HTTP 204 No Content
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        // DELETE api/<AdminEnquiryController>/5
        [HttpDelete("admin/del/{id}")]
        public void DeleteEnquiry(int id)
        {
            adminEnquiryService.DeleteAdminEnquiry(id);
        }

        [HttpGet("pta/getEn/Detail")]
        public async Task<IActionResult> GetEnquiryDetail()
        {
            var list= await adminEnquiryService.GetAllDetails();
            return Ok(list);
        }

        [HttpGet("byname/{name}")]
        public async Task<IEnumerable<AdminEnquiry>> GetByName(string name)
        {
            return await adminEnquiryService.GetEnquiryByName(name);
        }
    }
}
