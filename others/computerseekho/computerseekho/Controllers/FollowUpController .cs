using Computer_Sekho.Models;
using Computer_Sekho.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Computer_Sekho.Controllers
{
    [Route("api/")]
    [ApiController]
    public class FollowUpController : ControllerBase
    {
        private readonly IFollowUpService followUpService;
        public FollowUpController(IFollowUpService followUpService)
        {
            this.followUpService = followUpService;
        }

        // GET: api/<FollowUpController>
        [HttpGet("pta/followup")]
        public async Task<IEnumerable<object>> GetFollowup()
        {
            return await followUpService.GetFollowUp();
        }

        // GET api/<FollowUpController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<FollowUpController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<FollowUpController>/5
        [HttpPut("admin/updatefollowup/{id}")]
        public void Put(int id, [FromBody] Followup value)
        {
            followUpService.updateFollowup(id, value);
        }

        // DELETE api/<FollowUpController>/5
        [HttpDelete("admin/delfollowup/{id}")]
        public void Delete(int id)
        {
            followUpService.deleteFollowup(id);
        }
    }
}
