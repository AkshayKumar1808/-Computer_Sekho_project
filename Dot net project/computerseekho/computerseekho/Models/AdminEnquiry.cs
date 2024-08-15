using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Computer_Seekho.Models
{
    public class AdminEnquiry
    {
        [Key]
        public int EnquiryId { get; set; }

        public string? Address { get; set; }
        [Required]
        public long ? Mobile { get; set; }

        public long AlternateMobile { get; set; }
        [Required]

        public string? EmailId { get; set; }

        public string? EnquirerName { get; set; }
        [Required]
        public string? StudentName { get; set; }

        public string? EnquirerQuery { get; set; }

        public DateTime? EnquiryDate { get; set; }

        public DateTime? FollowUpDate { get; set; }

        public ulong IsActive { get; set; }
        //[NotMapped]
        //[JsonIgnore]
        //public Course Course { get; set; }
        [ForeignKey(nameof(Course))]
        public int Cid { get; set; }
        //[NotMapped]
        //[JsonIgnore]

        //public StaffMaster StaffMaster { get; set; }
        [ForeignKey(nameof(StaffMaster))]
        public int Sid { get; set; }

       
    }
}
