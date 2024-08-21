using ComputerSeekho.Models;
using ComputerSeekho.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ComputerSeekho.Controllers
{
   
    [Route("api/")]
    [ApiController]
    public class StaffController : ControllerBase
    {
        private readonly IStaffService staffService;
        public StaffController(IStaffService staffService)
        {
            this.staffService = staffService;
        }
        // GET: api/<StaffController>
        [HttpGet("pta/getstaff")]
        public async Task<IEnumerable<StaffMaster>> Get()
        {
            return await staffService.GetAll();
        }

        // GET api/<StaffController>/5
        [HttpGet("staff/{id}")]
        public async Task<ActionResult<StaffMaster>> Get(int id)
        {
            return await staffService.GetStaff(id);
        }

        // POST api/<StaffController>
        [HttpPost("pta/addstaff")]
        public void Post([FromBody] StaffMaster value)
        {
            staffService.AddStaff(value);
        }

        // PUT api/<StaffController>/5
        [HttpPut("admin/updatestaff/{id}")]
        public void Put(int id, [FromBody] StaffMaster value)
        {
            staffService.UpdateStaff(id, value);
        }

        // DELETE api/<StaffController>/5
        [HttpDelete("admin/deletestaff/{id}")]
        public void Delete(int id)
        {
            staffService.DeleteStaff(id);
        }
    }
}
