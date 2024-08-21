using System.ComponentModel.DataAnnotations;

namespace AuthApp.Models
{
    public partial class StaffMaster
    {
        [Key]
        public int Staffid { get; set; }

        public string Staffemail { get; set; } = null!;

        public long Staffmobile { get; set; }

        public string Staffname { get; set; } = null!;

        public string Staffrole { get; set; } = null!;

        //public virtual ICollection<AdminEnquiry> AdminEnquiries { get; } = new List<AdminEnquiry>();

        //public virtual AdminLogin? AdminLogin { get; set; }

        //public virtual ICollection<EnquiryMaster> EnquiryMasters { get; } = new List<EnquiryMaster>();

        //public virtual ICollection<Followup> Followups { get; } = new List<Followup>();
    }

}
