using Microsoft.EntityFrameworkCore;
using computerseekho.Models;

namespace computerseekho.Repositories
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Announcement> Announcements { get; set; }
    }
}