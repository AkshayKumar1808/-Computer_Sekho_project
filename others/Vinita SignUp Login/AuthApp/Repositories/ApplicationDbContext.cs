using AuthApp.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace AuthApp.Repositories
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<StaffMaster> StaffMasters { get; set; }
        public DbSet<AdminLogin> AdminLogins { get; set; }

        /*protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AdminLogin>()
                .HasOne(a => a.Staff)
                .WithOne(s => s.AdminLogin)
                .HasForeignKey<AdminLogin>(a => a.Sid)
                .OnDelete(DeleteBehavior.Restrict);

        }*/
    }
}
