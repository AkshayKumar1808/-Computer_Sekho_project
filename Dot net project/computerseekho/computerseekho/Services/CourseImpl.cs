using Computer_Seekho.Models;

using Computer_Seekho.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho.Services
{
    public class CourseImpl : ICourseService
    {
        private readonly ComputerSeekhoDbContext computerSeekho;
        public CourseImpl(ComputerSeekhoDbContext computerSeekho)
        {
            this.computerSeekho = computerSeekho;
        }

        public void AddCourse(Course course)
        {
            computerSeekho.courses.Add(course);
            computerSeekho.SaveChanges();
        }

        public void deleteCourse(int id)
        {
            var excourse=computerSeekho.courses.SingleOrDefault(data => data.CourseId == id);
            if (excourse != null)
            {
                computerSeekho.courses.Remove(excourse);
                computerSeekho.SaveChanges() ;
            }
            else
            {
                throw new Exception("data is not found");
            }

        }

        public async Task<Course> getbyId(int id)
        {
            return await computerSeekho.courses.FindAsync(id);
        }

        public async Task<IEnumerable<Course>> GetCourses()
        {
            return await computerSeekho.courses.ToArrayAsync();
        }

        public void updateCourse(int id, Course course)
        {
            Course excourse=computerSeekho.courses.SingleOrDefault(data=>data.CourseId==id);
            if (excourse!=null) {
                excourse.CourseDescription=course.CourseDescription;
                excourse.CourseDuration=course.CourseDuration;
                excourse.CourseIsActive=course.CourseIsActive;
                excourse.CourseName=course.CourseName;
                excourse.CourseSyllabus=course.CourseSyllabus;
                computerSeekho.SaveChanges();
            }
            else { throw new Exception("There have no data found"); }
            
        }
    }
}
