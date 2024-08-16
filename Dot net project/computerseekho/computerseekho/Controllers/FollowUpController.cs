using Computer_Seekho.Models;
using Computer_Seekho.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Computer_Seekho.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FollowUpController : ControllerBase
    {
        private readonly IFollowUpService followUpService;
        public FollowUpController(IFollowUpService followUpService)
        {
            this.followUpService = followUpService;
        }
        // GET: api/<FollowUpController>
        [HttpGet]
        public async Task<IEnumerable<object>> GetFollowup()
        {
            return await followUpService.GetFollowUp();
        }

        // PUT api/<FollowUpController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Followup value)
        {
            followUpService.updateFollowup(id, value);
        }

        // DELETE api/<FollowUpController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            followUpService.deleteFollowup(id);
        }
    }
}
