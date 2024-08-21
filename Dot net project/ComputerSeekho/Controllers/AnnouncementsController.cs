using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ComputerSeekho.Models;
using ComputerSeekho.Services;

namespace computerseekho.Controllers
{
    [Route("api/")]
    [ApiController]
    public class AnnouncementsController : ControllerBase
    {
        private readonly IAnnouncementServices _announcementService;

        public AnnouncementsController(IAnnouncementServices announcementService)
        {
            _announcementService = announcementService;
        }

        // GET: api/Announcements
        [HttpGet("allAnnoucment")]
        public async Task<ActionResult<IEnumerable<Announcement>>> GetAnnouncements()
        {
            var announcements = await _announcementService.GetAllAnnouncementsAsync();
            return Ok(announcements);
        }

        [HttpGet("allactiveAnnoucment")]
        public async Task<ActionResult<IEnumerable<Announcement>>> GetActiveAnnouncment()
        {
            var announcements=await _announcementService.GetAllActiveAnnouncementsAsync();
            return Ok(announcements);
        }


        // GET: api/Announcements/5
        [HttpGet("getbyid/{id}")]
        public async Task<ActionResult<Announcement>> GetAnnouncement(int id)
        {
            var announcement = await _announcementService.GetAnnouncementByIdAsync(id);

            if (announcement == null)
            {
                return NotFound();
            }

            return Ok(announcement);
        }

        // POST: api/Announcements
        [HttpPost("postAnnouncement")]
        public async Task<ActionResult<Announcement>> PostAnnouncement(Announcement announcement)
        {
           await _announcementService.CreateAnnouncementAsync(announcement);
            return CreatedAtAction("GetAnnouncement", new { id = announcement.AnnouncementId }, announcement);
        }

        // PUT: api/Announcements/5
        [HttpPut("putbyid/{id}")]
        public async Task<IActionResult> PutAnnouncement(int id, Announcement announcement)
        {
            if (id != announcement.AnnouncementId)
            {
                return BadRequest();
            }

            var result = await _announcementService.UpdateAnnouncementAsync(id,announcement);
            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }

        // DELETE: api/Announcements/5
        [HttpDelete("deletebyid/{id}")]
        public async Task<IActionResult> DeleteAnnouncement(int id)
        {
            var result = await _announcementService.DeleteAnnouncementAsync(id);
            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
