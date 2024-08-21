using ComputerSeekho.Services;
using Microsoft.AspNetCore.Mvc;
using ComputerSeekho.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ComputerSeekho.Controllers
{
    [Route("api/logos")]
    [ApiController]
    public class RecruiterController : ControllerBase
    {
        private readonly IRecruiters _repository;

        public RecruiterController(IRecruiters repo)
        {
            _repository = repo;
        }

        // GET: api/Recruiter
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Image>>> GetRecruiter()
        {
            var images = await _repository.GetAllRecImg();
            if (images == null || !images.Any())
            {
                return NotFound();
            }
            return Ok(images);
        }

        // GET api/Recruiter/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Image>> GetById(int id)
        {
            var image = await _repository.GetRecImg(id);
            if (image == null)
            {
                return NotFound();
            }
            return Ok(image);
        }

        // POST api/Recruiter
        [HttpPost]
        public async Task<ActionResult<Image>> PostRecruiter(Image img)
        {
            var createdImage = await _repository.Add(img);
            return CreatedAtAction(nameof(GetById), new { id = createdImage.PathId }, createdImage);
        }

        // PUT api/Recruiter/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecruiters(int id, Image img)
        {
            if (id != img.PathId)
            {
                return BadRequest();
            }

            var updatedImage = await _repository.Update(id, img);
            if (updatedImage == null)
            {
                return NotFound();
            }

            return NoContent();
        }

        // DELETE api/Recruiter/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecruiters(int id)
        {
            var deletedImage = await _repository.Delete(id);
            if (deletedImage == null)
            {
                return NotFound();
            }

            return NoContent();
        }





    }
}
