using System.ComponentModel.DataAnnotations;

namespace ComputerSeekho.Models 
{
    public class StaffMaster
    {
        [Key]
        public int StaffId { get; set; }
        [Required]
        public string? Staffemail { get; set; } 

        public long Staffmobile { get; set; }
        [Required]
        public string? Staffname { get; set; } 

        public string? Staffrole { get; set; }

       // public ICollection<AdminEnquiry> AdminEnquiry { get; set; }
    }
}
