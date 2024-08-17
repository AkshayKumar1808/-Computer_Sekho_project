
using computerseekho.Repositories;
using computerseekho.Services;
using Microsoft.EntityFrameworkCore;

namespace computerseekho
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var provider = builder.Services.BuildServiceProvider();
            var config = provider.GetRequiredService<IConfiguration>();
            builder.Services.AddDbContext<ComputerSeekhoDbContext>(item => item.UseSqlServer(config.GetConnectionString("Default")));
            builder.Services.AddTransient<ICourseService,CourseImpl>();
            builder.Services.AddScoped<IStaffService, StaffServiceImpl>();
            builder.Services.AddScoped<IAdminEnquiryService, AdminEnquiryServiceImpl>();

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
