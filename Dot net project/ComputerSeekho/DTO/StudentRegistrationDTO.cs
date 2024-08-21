namespace ComputerSeekho.DTO
{
    public class StudentRegistrationDTO
    {
        public StudentDTO Student { get; set; } // Use StudentDTO instead of StudentMaster
        public PaymentDTO Payment { get; set; } // Use PaymentDTO instead of Payment
    }
}
