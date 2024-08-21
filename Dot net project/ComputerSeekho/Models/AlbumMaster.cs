using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ComputerSeekho.Models
{

    public partial class AlbumMaster
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AlbumId { get; set; }

        [Required]
        [StringLength(100)]  // Adjust the length as needed
        public string AlbumName { get; set; }

        public bool IsActive { get; set; }

        ICollection<Image> images { get; set; }
    }
}