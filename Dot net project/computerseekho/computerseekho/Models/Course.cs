using Newtonsoft.Json;

namespace computersekho.Models
{
    public class Course
    {
       // [JsonProperty("courseId")]
        public int CourseId { get; set; }
       // [JsonProperty("courseDescription")]

        public string? CourseDescription { get; set; }
       // [JsonProperty("courseDuration")]

        public int CourseDuration { get; set; }
        //[JsonProperty("courseIsActive")]

        public bool CourseIsActive { get; set; }
      //  [JsonProperty("courseName")]
        public string? CourseName { get; set; }
       // [JsonProperty("courseSyllabus")]

        public string? CourseSyllabus { get; set; }
    }
}
