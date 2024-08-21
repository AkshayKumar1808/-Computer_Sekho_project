using ComputerSeekho.Models;
using Microsoft.AspNetCore.Mvc;
using ComputerSeekho.Services ;
using static ComputerSeekho.Controllers.tempEnquiryController;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ComputerSeekho.Controllers
{
    [Route("api/")]
    [ApiController]
    public class tempEnquiryController : ControllerBase
    {
        private readonly ItempEnquiryServices _enquiryService;

        public tempEnquiryController(ItempEnquiryServices enquiryService)
        {
            _enquiryService = enquiryService;
        }

        [HttpPost("postTempEnq")]
        public async Task<IActionResult> PostEnquiry([FromBody] tempEnquiry enquiry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createdEnquiry = await _enquiryService.AddEnquiryAsync(enquiry);

            return CreatedAtAction(nameof(PostEnquiry), new { id = createdEnquiry.EnqId }, createdEnquiry);
        }



        [HttpGet("getTempEnq")]
        public async Task<ActionResult<IEnumerable<tempEnquiry>>> GetAllBatches()
        {
            var enq = await _enquiryService.getAllEnquiry();
            return Ok(enq);
        }


        [HttpDelete("DeleteEnqById/{id}")]
        public async Task<IActionResult> DeleteEnquiry(long id)
        {
            var success = await _enquiryService.DeleteEnq(id);
            if (!success)
            {
                return NotFound();
            }
            return NoContent();
        }





        /*        // GET: api/<tempEnquiryController>
                [HttpGet]
                public IEnumerable<string> Get()
                {
                    return new string[] { "value1", "value2" };
                }

                // GET api/<tempEnquiryController>/5
                [HttpGet("{id}")]
                public string Get(int id)
                {
                    return "value";
                }

                // POST api/<tempEnquiryController>
                [HttpPost]
                public void Post([FromBody] string value)
                {
                }

                // PUT api/<tempEnquiryController>/5
                [HttpPut("{id}")]
                public void Put(int id, [FromBody] string value)
                {
                }

                // DELETE api/<tempEnquiryController>/5
                [HttpDelete("{id}")]
                public void Delete(int id)
                {
                }

        */

    }
}
