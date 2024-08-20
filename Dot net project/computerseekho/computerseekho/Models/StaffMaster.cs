using System.ComponentModel.DataAnnotations;

namespace Computer_Sekho.Models
{
    public class StaffMaster
    {
        [Key]
        public int Staffid { get; set; }
        
        public string? Staffemail { get; set; }

        public long Staffmobile { get; set; }

        public string? Staffname { get; set; }

        public string? Staffrole { get; set; }

        // public ICollection<AdminEnquiry> AdminEnquiry { get; set; }
    }
}

