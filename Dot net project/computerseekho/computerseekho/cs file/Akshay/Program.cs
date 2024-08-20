
using Computer_Sekho.Repositories;
using Computer_Sekho.Services;
using computersekho.Services;
using Microsoft.EntityFrameworkCore;

namespace Computer_Sekho
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddDbContext<ComputerSekhoDbContext>(options =>
     options.UseSqlServer(builder.Configuration.GetConnectionString("Default")));

            builder.Services.AddControllers();
            builder.Services.AddScoped<ICourseService,CourseImpl>();
            builder.Services.AddScoped<IStaffService,StaffServiceImpl>();
            builder.Services.AddScoped<IAdminEnquiryService,AdminEnquiryServiceImpl>();
            builder.Services.AddScoped<IFollowUpService,FollowUpServiceImpl>();
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll",
                    builder => builder.AllowAnyOrigin()
                                      .AllowAnyMethod()
                                      .AllowAnyHeader());
            });

           


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
            app.UseCors("AllowAll");
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
