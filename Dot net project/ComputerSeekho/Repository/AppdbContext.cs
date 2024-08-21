using Microsoft.EntityFrameworkCore;
using ComputerSeekho.Models;



namespace ComputerSeekho.Repository
{
    public class AppdbContext : DbContext
    {
        public AppdbContext(DbContextOptions<AppdbContext> options)
            : base(options)
        {
        }

        public DbSet<AlbumMaster> AlbumMaster { get; set; }
        public DbSet<Image> ImageMaster { get; set; }
        public DbSet<BatchMaster> BatchMaster { get; set; }
        public DbSet<Course> courses { get; set; }
        public DbSet<StaffMaster> staffmasters { get; set; }
        public DbSet<AdminEnquiry> adminEnquiry { get; set; }
        public DbSet<tempEnquiry> tempEnquiry { get; set; }

        public DbSet<Announcement> Announcements { get; set; }
        public DbSet<PlacementMaster> PlacementMaster { get; set; }
        public DbSet<StudentMaster> StudentMaster { get; set; }
        public DbSet<StaffMaster> StaffMasters { get; set; }
        public DbSet<AdminLogin> AdminLogins { get; set; }

        public DbSet<Payment> Payment { get; set; }
        public DbSet<AdminEnquiry> AdminEnquiries { get; set; }
        public DbSet<Followup> Followups { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Data Source=(localdb)\ProjectModels;Initial Catalog=project;Integrated Security=True;");
            }
        }
    }
}
