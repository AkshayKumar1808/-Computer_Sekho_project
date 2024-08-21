using computersekho.Models;

namespace computersekho.Services
{
    public interface ICourseService
    {
        public Task<IEnumerable<string>> GetCourses();
       public Task<Course> getbyId(int id);

        public Task AddCourse(Course course);
       public void updateCourse(int id, Course course);

       public void deleteCourse(int id);
      public Task<IEnumerable<Course>> getAllCourse();
       public Task<string> GetCourseDescriptionAsync(string name);
    }
}
