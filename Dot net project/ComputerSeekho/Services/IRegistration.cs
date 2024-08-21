using ComputerSeekho.DTO;

namespace ComputerSeekho.Services
{
    public interface IRegistration
    {
        Task<int> RegisterStudentAsync(StudentRegistrationDTO studentRegistrationDTO);
    }
}
