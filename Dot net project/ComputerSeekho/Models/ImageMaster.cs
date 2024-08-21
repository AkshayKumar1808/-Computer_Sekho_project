using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ComputerSeekho.Models;

public class Image
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int PathId { get; set; }

    public string PathName { get; set; }

    public string Url { get; set; }



    // Foreign key
    [ForeignKey("AlbumMaster")]
    public int Aid { get; set; }


}
