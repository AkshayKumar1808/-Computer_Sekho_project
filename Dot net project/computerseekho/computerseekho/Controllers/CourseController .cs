using computersekho.Models;
using computersekho.Services;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace computersekho.Controllers
{
    [Route("api/")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ICourseService courseservice;
        public CourseController(ICourseService courseservice)
        {
            this.courseservice = courseservice;
        }


        // GET: api/<CourseController>
        [HttpGet("pta/course")]
        public async Task<ActionResult<IEnumerable<string>>> Get()
        {
            var courses = await courseservice.GetCourses();
            return Ok(courses);
        }


        [HttpGet("pta/course/{coursename}")]
        public async Task<IActionResult> GetDescription(string coursename)
        {
            try
            {
                // Call the service method to get the course description
                var description = await courseservice.GetCourseDescriptionAsync(coursename);

                if (description == null)
                {
                    // Return 404 Not Found if description is null
                    return NotFound($"Description for course '{coursename}' not found.");
                }

                // Return 200 OK with the course description
                return Ok(description);
            }
            catch (Exception ex)
            {
                // Log the exception (optional)
                // _logger.LogError(ex, "An error occurred while fetching the description for course '{CourseName}'.", courseName);
                return StatusCode(500, "An internal server error occurred.");
            }
        }


        // GET api/<CourseController>/5
        [HttpGet("admin/course/{id}")]
        public async Task<ActionResult<Course>> GetByid(int id)
        {
            var course = await courseservice.getbyId(id);
            if (course == null) { return NotFound(); }
            return Ok(course);
        }


        // POST api/<CourseController>
        [HttpPost("pta/addcourse/course")]
        public async Task Post([FromBody] Course value)
        {
            await courseservice.AddCourse(value);

        }

        // PUT api/<CourseController>/5
        [HttpPut("pta/updatecourse/course/{id}")]
        public void Put(int id, [FromBody] Course value)
        {
            courseservice.updateCourse(id, value);
        }



        // DELETE api/<CourseController>/5
        [HttpDelete("admin/course/{id}")]
        public void Delete(int id)
        {
            courseservice.deleteCourse(id);
        }


        [HttpGet("pta/getallcourse/course")]
        public async Task<IEnumerable<Course>> GetAllcourse()
        {
            return await courseservice.getAllCourse();
        }
    }
}
