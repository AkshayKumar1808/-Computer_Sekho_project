using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;

namespace ComputerSeekho.Models
{
    public class Course
    {

        [Key]
        [JsonPropertyName("courseId")]
        public int CourseId { get; set; }

        public string? CourseDescription { get; set; }

        public int CourseDuration { get; set; }

        public bool CourseIsActive { get; set; }

        public string? CourseName { get; set; }

        public string? CourseSyllabus { get; set; }

       

    }
}
