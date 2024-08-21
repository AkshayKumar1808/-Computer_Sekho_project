
using ComputerSeekho.Repository;
using ComputerSeekho.Models;

using Microsoft.EntityFrameworkCore;

namespace ComputerSeekho.Services
{
    public class CourseImpl : ICourseService
    {
        private readonly AppdbContext computerSeekhoDbContext;
        public CourseImpl(AppdbContext computerSeekhoDbContext) { 
            this.computerSeekhoDbContext = computerSeekhoDbContext;
        }

        public async Task AddCourse(Course course)
        {
            try
            {
                if (course == null)
                    throw new ArgumentNullException("content of course is null");
                await computerSeekhoDbContext.courses.AddAsync(course);
                await computerSeekhoDbContext.SaveChangesAsync();
            }
            catch
            {
                throw;
            }

        }

        public void deleteCourse(int id)
        {
            var excourse = computerSeekhoDbContext.courses.SingleOrDefault(data => data.CourseId == id);
            if (excourse != null)
            {
                computerSeekhoDbContext.courses.Remove(excourse);
                computerSeekhoDbContext.SaveChanges();
            }
            else
            {
                throw new Exception("data is not found");
            }

        }

        public async Task<IEnumerable<Course>> getAllCourse()
        {
            return await computerSeekhoDbContext.courses.ToArrayAsync();
        }

        public async Task<Course> getbyId(int id)
        {
            return await computerSeekhoDbContext.courses.FindAsync(id);
        }

        public async Task<IEnumerable<string>> GetCourses()
        {
            var coursename = await computerSeekhoDbContext.courses.Where(c => c.CourseIsActive).Select(c => c.CourseName).ToArrayAsync();
            if (coursename.Length == 0)
                throw new Exception("No active course is foud");

            else
                return coursename;
        }

        public async Task<string> GetCourseDescriptionAsync(string courseName)
        {
            // Retrieve the course description from the database
            var description = await computerSeekhoDbContext.courses
                .Where(c => c.CourseName == courseName)
                .Select(c => c.CourseDescription)
                .FirstOrDefaultAsync();

            return description;
        }


        public void updateCourse(int id, Course course)
        {
            Course excourse = computerSeekhoDbContext.courses.SingleOrDefault(data => data.CourseId == id);
            if (excourse != null)
            {
                excourse.CourseDescription = course.CourseDescription;
                excourse.CourseDuration = course.CourseDuration;
                excourse.CourseIsActive = course.CourseIsActive;
                excourse.CourseName = course.CourseName;
                excourse.CourseSyllabus = course.CourseSyllabus;
                computerSeekhoDbContext.SaveChanges();
            }
            else { throw new Exception("There have no data found"); }

        }
    }
}

