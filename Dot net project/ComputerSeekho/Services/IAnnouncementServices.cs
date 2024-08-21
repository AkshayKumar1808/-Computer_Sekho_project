using ComputerSeekho.Models;
using Microsoft.AspNetCore.Mvc;

namespace ComputerSeekho.Services
{
    public interface IAnnouncementServices
    {
        Task<IEnumerable<Announcement>> GetAllAnnouncementsAsync();
        Task<IEnumerable<Announcement>> GetAllActiveAnnouncementsAsync();
        Task<Announcement> GetAnnouncementByIdAsync(int id);
        Task<ActionResult<Announcement>> CreateAnnouncementAsync(Announcement announcement);
        Task<bool> UpdateAnnouncementAsync(int id,Announcement announcement);
        Task<bool> DeleteAnnouncementAsync(int id);
    }
}
