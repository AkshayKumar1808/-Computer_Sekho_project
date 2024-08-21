using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;



namespace ComputerSeekho.Models
{
    
    public class tempEnquiry
    {
        [Key]
        public long EnqId { get; set; }

        public string Name { get; set; }

        public string Course { get; set; } 

        public string Enquirytext { get; set; } 

        public string Email { get; set; } 

        public string Phone { get; set; } 

        public string? AltPhone { get; set; }

    }

}