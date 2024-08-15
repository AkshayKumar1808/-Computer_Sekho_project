using Computer_Seekho.Models;
using Computer_Seekho.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Computer_Seekho.Controllers
{
    [Route("api/staff/[controller]")]
    [ApiController]
    public class StaffController : ControllerBase
    {
        private readonly IStaffService staffService;
        public StaffController(IStaffService staffService)
        {
            this.staffService = staffService;
        }

        // GET: api/<StaffController>
        [HttpGet]
        public async Task<IEnumerable<StaffMaster>> Get()
        {
             return await staffService.GetAll();
        }

        // GET api/<StaffController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StaffMaster>> Get(int id)
        {
            return await staffService.GetStaff(id);
        }

        // POST api/<StaffController>
        [HttpPost]
        public void Post([FromBody] StaffMaster value)
        {
            staffService.AddStaff(value);
        }

        // PUT api/<StaffController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] StaffMaster value)
        {
            staffService.UodateStaff(id, value);
        }

        // DELETE api/<StaffController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            staffService.DeleteStaff(id);
        }
    }
}
