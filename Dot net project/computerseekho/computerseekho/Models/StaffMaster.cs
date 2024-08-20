using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Computer_Sekho.Models
{
    public class StaffMaster
    {
        [Key]
        
        public int StaffId { get; set; }
        
        public string? Staffemail { get; set; }

        public long Staffmobile { get; set; }

        public string? Staffname { get; set; }

        public string? Staffrole { get; set; }

        // public ICollection<AdminEnquiry> AdminEnquiry { get; set; }
    }
}

