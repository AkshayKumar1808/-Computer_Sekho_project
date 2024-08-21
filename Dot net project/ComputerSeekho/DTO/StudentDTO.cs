using ComputerSeekho.Models;

namespace ComputerSeekho.DTO
{
    public class StudentDTO
    {
        public string? Address { get; set; }
        public string? StudentName { get; set; }
        public long? MobileNum { get; set; }
        public long AlternateNum { get; set; }
        public DateTime? Dob { get; set; }
        public string? StudentGender { get; set; }
        public string? StudentQualification { get; set; }
        public string? StudentPhoto { get; set; }
        public string BatchName { get; set; }  // Only batch name
        public string CourseName { get; set; } // Only course name
    }
}
