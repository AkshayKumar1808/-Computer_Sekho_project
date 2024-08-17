using computerseekho.Models;
using computerseekho.Models;
using Microsoft.EntityFrameworkCore;

namespace computerseekho.Repositories
{
    public class ComputerSeekhoDbContext:DbContext
    {
        public ComputerSeekhoDbContext(DbContextOptions<ComputerSeekhoDbContext> options) : base(options) { }

       public DbSet<Course>courses { get; set; }
       public  DbSet<StaffMaster> staffmasters { get; set; }
        public DbSet<AdminEnquiry> adminEnquiry { get; set; }

        public DbSet<Announcement> Announcements { get; set; }
    }
}
