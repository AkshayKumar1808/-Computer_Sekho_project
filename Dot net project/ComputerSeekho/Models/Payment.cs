using ComputerSeekho.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace ComputerSeekho.Models
{
    public class Payment
    {

        public int PaymentId { get; set; }

        public double Amount { get; set; }

        public string? PaymentType { get; set; }
        public DateTime? Date { get; set; }
        public string? TransactionNo { get; set; }

        [NotMapped]
        public virtual StudentMaster Student { get; set; }

        [ForeignKey(nameof(StudentMaster))]
        public int StudentId { get; set; }



    }
}