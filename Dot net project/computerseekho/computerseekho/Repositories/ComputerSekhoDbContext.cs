using computersekho.Models;
using Microsoft.EntityFrameworkCore;

namespace Computer_Sekho.Repositories
{
    public class ComputerSekhoDbContext:DbContext
    {
        public ComputerSekhoDbContext(DbContextOptions<ComputerSekhoDbContext> options) : base(options) { }

        public DbSet<Course> Courses { get; set; }
    }
}
