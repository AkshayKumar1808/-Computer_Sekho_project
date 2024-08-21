using ComputerSeekho.Models;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ComputerSeekho.Models
{
    public class AdminEnquiry
    {
        [Key]
        public int EnquiryId { get; set; }

        public string? Address { get; set; }

        [Required]
        public long? Mobile { get; set; }

        public long AlternateMobile { get; set; }

        [Required]
        public string? EmailId { get; set; }

        public string? EnquirerName { get; set; }

        [Required]
        public string? StudentName { get; set; }

        public string? EnquirerQuery { get; set; }

        public DateTime? EnquiryDate { get; set; }

        public DateTime? FollowUpDate { get; set; }
        [JsonProperty("courseId")]
        public int? Cid { get; set; }
        [JsonProperty("staffId")]
        public int? Sid { get; set; }

        public bool IsActive { get; set; }
        [NotMapped]
        [ForeignKey(nameof(Cid))]
        public Course? Course { get; set; }
        [NotMapped]
        [ForeignKey(nameof(Sid))]
        public StaffMaster? StaffMaster { get; set; }
    }
}

