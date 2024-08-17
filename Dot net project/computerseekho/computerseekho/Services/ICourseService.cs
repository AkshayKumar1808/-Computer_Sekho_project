using computerseekho.Models;

namespace computerseekho.Services
{
    public interface ICourseService
    {
        public Task<IEnumerable<Course>> GetCourses();
        public Task<Course> getbyId(int id);

        public void AddCourse(Course course);
        public void updateCourse(int id,Course course);

        public void deleteCourse(int id);
    }
}
