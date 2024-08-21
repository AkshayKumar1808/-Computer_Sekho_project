using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace computerseekho.Models
{
    public class Announcement
    {
        
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int AnnouncementId {  get; set; }

        [Required]
        public String AnnouncementText { get; set;}

        [Required]
        public DateTime AnnouncementDate { get; set;}

        [Required]
        public Boolean isValid { get; set; }

    }
}
