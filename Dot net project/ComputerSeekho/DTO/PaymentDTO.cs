namespace ComputerSeekho.DTO
{
    public class PaymentDTO
    {
        public double Amount { get; set; }
        public string? PaymentType { get; set; }
        public DateTime? Date { get; set; }
        public string? TransactionNo { get; set; }
    }
}
