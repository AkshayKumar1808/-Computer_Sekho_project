using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ComputerSeekho.Models
{

    public class PlacementMaster
    {
        [Key]
        public int PlacementId { get; set; }

        public string? CompanyName { get; set; }

        public string? Duration { get; set; }
        
        
        [ForeignKey(nameof(BatchMaster))]
        public int? BId { get; set; }

        [ForeignKey(nameof(Course))]
        public int? CId { get; set; }

        [ForeignKey("StudentMaster")]
        public int? SId { get; set; }
        /*
        public virtual BatchMaster? BIdNavigation { get; set; }

        public virtual Course? CIdNavigation { get; set; }

        public virtual StudentMaster? SIdNavigation { get; set; }
        */
    }
}