using Microsoft.EntityFrameworkCore;
using ComputerSeekho.Repository;
using ComputerSeekho.Services;

namespace ComputerSeekho
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
           
            builder.Services.AddControllers();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll",
                    builder => builder
                        .WithOrigins("http://localhost:3000") // React app URL
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials()); // This line allows credentials to be included in requests
            });


            builder.Services.AddDbContext<AppdbContext>(item =>
               item.UseSqlServer(builder.Configuration.GetConnectionString("Default")));
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddScoped<IBatch, BatchImpl>();
            builder.Services.AddScoped<IRecruiters, RecruitersImpl>();
            builder.Services.AddScoped<IStudentPlacement, StudentPlacementImpl>();
            builder.Services.AddScoped<IAuthServices, AuthService>();
            builder.Services.AddScoped<IAnnouncementServices, AnnouncementService>();
            builder.Services.AddScoped<ItempEnquiryServices, tempEnquiryServices>();
            builder.Services.AddScoped<IRegistration, RegistrationServices>();
            builder.Services.AddTransient<ICourseService, CourseImpl>();
            builder.Services.AddScoped<IStaffService, StaffServiceImpl>();
            builder.Services.AddScoped<IAdminEnquiryService, AdminEnquiryServiceImpl>();
            builder.Services.AddScoped<IFollowUpService, FollowUpServiceImpl>();




            var app = builder.Build();

            // Register the service here
           

            

            // Rest of the code...


            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseCors("AllowAll");

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
