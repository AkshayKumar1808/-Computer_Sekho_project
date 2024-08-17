using Microsoft.AspNetCore.Mvc;
using computerseekho.Models;
using computerseekho.Services;
using Microsoft.AspNetCore.Http.HttpResults;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace computerseekho.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ICourseService courseservice;
        public CourseController(ICourseService courseservice)
        {
            this.courseservice = courseservice;
        }
        // GET: api/<CourseController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Course>>> Get()
        {
            var courses = await courseservice.GetCourses();
            return Ok(courses);
        }

        // GET api/<CourseController>/5
        [HttpGet("{id}")]
       public async Task<ActionResult<Course>> GetByid(int id)
        {
           var course=await courseservice.getbyId(id);
            if(course == null) { return NotFound(); }
            return Ok(course);
        }
        // POST api/<CourseController>
        [HttpPost]
        public void Post([FromBody] Course value)
        {
            courseservice.AddCourse(value);

        }

        // PUT api/<CourseController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Course value)
        {
            courseservice.updateCourse(id, value);
        }

        // DELETE api/<CourseController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            courseservice.deleteCourse(id);
        }
    }
}
