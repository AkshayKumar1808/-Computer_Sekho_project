using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ComputerSeekho.Models
{
    public class AdminLogin
    {
        [Key]
        public string Email { get; set; } = null!;

        public string? Name { get; set; }

        public string? Password { get; set; }
        
        [ForeignKey("Staff")]
        public int Sid { get; set; }

        //public virtual StaffMaster Staff { get; set; } = null!;
    }
}
