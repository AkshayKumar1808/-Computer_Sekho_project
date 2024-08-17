using computerseekho.DTO;
using computerseekho.Models;
using computerseekho.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using static computerseekho.DTO.AdminEnquiryDTO;

namespace computerseekho.Controllers
{
    [Route("api/AdminEnquiry/[controller]")]
    [ApiController]
    public class AdminEnquiryControllercs : ControllerBase
    {
        private readonly IAdminEnquiryService adminEnquiryService;
        public AdminEnquiryControllercs(IAdminEnquiryService adminEnquiryService)
        {
            this.adminEnquiryService = adminEnquiryService;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AdminEnquiry>>> GetEnquiry()
        {
            var enquiry = await adminEnquiryService.GetAdminEnquiry();
            return Ok(enquiry);
        }
        [HttpPost]
        public void PostEnquiry([FromBody] AdminEnquiry enquiry)
        {
            adminEnquiryService.AddEnquiry(enquiry);
        }
        [HttpPut("{id}")]
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
        [HttpDelete("{id}")]
        public void DeleteEnquiry(int id)
        {
            adminEnquiryService.DeleteAdminEnquiry(id);
        }
        [HttpGet("{id}")]
         public AdminEnquiry GetAdminEnquiry(int id)
        {
            return adminEnquiryService.GetAdminEnquiry(id);
        }
        [HttpGet("byname/{name}")]
        public async Task<IEnumerable<AdminEnquiry>> GetByName(string name)
        {
            return await adminEnquiryService.GetEnquiryByName(name);
        }
        [HttpGet("Detail")]
        public async Task<IEnumerable<AdminEnquiryDetailDto>> GetEnquiryDetail() 
        {
            return await adminEnquiryService.GetAllDetails();
        }
    }
}
