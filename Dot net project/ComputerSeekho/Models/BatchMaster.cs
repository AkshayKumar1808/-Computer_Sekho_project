using ComputerSeekho.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;


namespace ComputerSeekho.Models
{
    public partial class BatchMaster
    {
        [Key]
        public int BatchId { get; set; }

        public string? BatchName { get; set; }

        public DateTime? BatchStartDate { get; set; }

        public DateTime? BatchEndTime { get; set; }

        public int CourseFees { get; set; }

        public bool? BatchIsActive { get; set; }

        [ForeignKey(nameof(Course))]
        public int? Cid { get; set; }

        ICollection<PlacementMaster> PlacementMaster { get; }

        ICollection<StudentMaster> StudentMaster { get; }
    }
}