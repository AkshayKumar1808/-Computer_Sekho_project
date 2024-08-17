using System.ComponentModel.DataAnnotations;

namespace computerseekho.Models
{
    public class StaffMaster
    {
        [Key]
        public int Staffid { get; set; }
        [Required]
        public string? Staffemail { get; set; } 

        public long Staffmobile { get; set; }
        [Required]
        public string? Staffname { get; set; } 

        public string? Staffrole { get; set; }

       // public ICollection<AdminEnquiry> AdminEnquiry { get; set; }
    }
}
