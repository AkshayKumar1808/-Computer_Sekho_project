using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Computer_Seekho.Models
{
    public class Followup
    {
        [Key]
        public int FollowupId { get; set; }

        public DateTime? FollowupDate { get; set; }

        public string? FollowupMsg { get; set; }

        public bool? IsActive { get; set; }

        public int? EId { get; set; }

        public int? StId { get; set; }
        [ForeignKey(nameof(EId))]
        public virtual AdminEnquiry? Enquirynav { get; set; }
        [ForeignKey(nameof (StId))]
        public virtual StaffMaster? StaffNav { get; set; }
    }
}
