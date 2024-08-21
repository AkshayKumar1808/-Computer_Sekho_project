using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ComputerSeekho.Models;
using ComputerSeekho.Repository;
using Microsoft.EntityFrameworkCore;

namespace ComputerSeekho.Services
{
    public class AnnouncementService:IAnnouncementServices
    {
        private readonly AppdbContext _context;

        public AnnouncementService(AppdbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Announcement>> GetAllAnnouncementsAsync()
        {
            return await _context.Announcements.ToListAsync();
        }

        public async Task<IEnumerable<Announcement>> GetAllActiveAnnouncementsAsync()
        {
            return await _context.Announcements
                        .Where(a => a.isValid)
                        .ToListAsync();

        }

        public async Task<Announcement> GetAnnouncementByIdAsync(int id)
        {
            return await _context.Announcements.FindAsync(id);
        }

        public async Task<ActionResult<Announcement>> CreateAnnouncementAsync(Announcement announcement)
        {
            _context.Announcements.Add(announcement);
            await _context.SaveChangesAsync();
            return announcement;
        }

        public async Task<bool> UpdateAnnouncementAsync(int id,Announcement announcement)
        {
            // 
            if (id != announcement.AnnouncementId)
            {
                return false ;
            }

            _context.Entry(announcement).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
                return true;
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AnnouncementExists(announcement.AnnouncementId))
                {
                    return false;
                }
                else
                {
                    throw;
                }
            }
        }

        public async Task<bool> DeleteAnnouncementAsync(int id)
        {
            var announcement = await _context.Announcements.FindAsync(id);
            if (announcement == null)
            {
                return false;
            }

            _context.Announcements.Remove(announcement);
            await _context.SaveChangesAsync();
            return true;
        }

        private bool AnnouncementExists(int id)
        {
            return _context.Announcements.Any(e => e.AnnouncementId == id);
        }
    }
}
