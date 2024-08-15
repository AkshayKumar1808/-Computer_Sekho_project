using Computer_Seekho.Models;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho.Repositories
{
    public class ComputerSeekhoDbContext:DbContext
    {
        public ComputerSeekhoDbContext(DbContextOptions<ComputerSeekhoDbContext> options) : base(options) { }

       public DbSet<Course>courses { get; set; }
       public  DbSet<StaffMaster> staffmasters { get; set; }
       public  DbSet<AdminEnquiry> adminEnquiry { get; set; }
    }
}
