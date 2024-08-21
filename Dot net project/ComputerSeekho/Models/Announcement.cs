using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ComputerSeekho.Models
{
    public class Announcement
    {
        
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int AnnouncementId {  get; set; }

        [Required]
        public string AnnouncementText { get; set;}

        [Required]
        public DateTime AnnouncementDate { get; set;}

        [Required]
        public bool isValid { get; set; }

    }
}
