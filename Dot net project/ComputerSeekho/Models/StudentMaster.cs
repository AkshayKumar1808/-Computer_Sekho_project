using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace ComputerSeekho.Models
{

    public partial class StudentMaster
    {
        [Key]
        public int StudentId { get; set; }
        public string? Address { get; set; }
        public string? StudentName { get; set; }
        public long? MobileNum { get; set; }
        public long AlternateNum { get; set; }

        //above details are comman to adminenquiry

        public DateTime? Dob { get; set; }
        public string? StudentGender { get; set; }
        public string? StudentQualification { get; set; }
        public string? StudentPhoto { get; set; }



        [NotMapped]
        public BatchMaster Batch { get; set; }

        [ForeignKey(nameof(BatchMaster))]
        public int? BId { get; set; }



        [NotMapped]
        public Course Course { get; set; }

        [ForeignKey(nameof(Course))]
        public int? CId { get; set; }




        //  public virtual ICollection<PlacementMaster> PlacementMasters { get; }
    }
}
