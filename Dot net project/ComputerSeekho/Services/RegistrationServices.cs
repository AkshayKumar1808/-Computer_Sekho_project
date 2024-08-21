using ComputerSeekho.Repository;
using ComputerSeekho.DTO;
using ComputerSeekho.Models;
using Microsoft.EntityFrameworkCore;

namespace ComputerSeekho.Services
{
    public class RegistrationServices : IRegistration
    {
        private readonly AppdbContext _context;

        public RegistrationServices(AppdbContext context)
        {
            _context = context;
        }
        public async Task<int> RegisterStudentAsync(StudentRegistrationDTO registrationDto)
        {
            // Fetch Batch and Course based on names from the DTO
            var batch = await _context.BatchMaster.FirstOrDefaultAsync(b => b.BatchName == registrationDto.Student.BatchName);
            var course = await _context.courses.FirstOrDefaultAsync(c => c.CourseName == registrationDto.Student.CourseName);

            if (batch == null || course == null)
            {
                throw new Exception("Batch or Course not found.");
            }

            // Create StudentMaster entity and assign BatchId and CourseId
            var student = new StudentMaster
            {
                StudentName = registrationDto.Student.StudentName,
                Address = registrationDto.Student.Address,
                MobileNum = registrationDto.Student.MobileNum,
                AlternateNum = registrationDto.Student.AlternateNum,
                Dob = registrationDto.Student.Dob,
                StudentGender = registrationDto.Student.StudentGender,
                StudentQualification = registrationDto.Student.StudentQualification,
                StudentPhoto = registrationDto.Student.StudentPhoto,
                BId = batch.BatchId,  // Use BatchId from the fetched Batch entity
                CId = course.CourseId // Use CourseId from the fetched Course entity
            };

            _context.StudentMaster.Add(student);
            await _context.SaveChangesAsync();

            // Create Payment entity
            var payment = new Payment
            {
                Amount = registrationDto.Payment.Amount,
                PaymentType = registrationDto.Payment.PaymentType,
                Date = registrationDto.Payment.Date,
                TransactionNo = registrationDto.Payment.TransactionNo,
                StudentId = student.StudentId // Use the StudentId from the saved Student entity
            };

            _context.Payment.Add(payment);
            await _context.SaveChangesAsync();

            return student.StudentId;
        }



























        /*  public async Task<bool> RegisterStudentAsync(StudentRegistrationDTO studentRegistrationDTO)
          {
              // Add the StudentMaster object to the context
              _context.StudentMaster.Add(studentRegistrationDTO.Student);

              // Save the StudentMaster to generate the StudentId
              await _context.SaveChangesAsync();

              // Assign the generated StudentId to the Payment entity
              studentRegistrationDTO.Payment.StudentId = studentRegistrationDTO.Student.StudentId;

              // Add the Payment object to the context
              _context.Payment.Add(studentRegistrationDTO.Payment);

              // Save all changes
              int result = await _context.SaveChangesAsync();

              // Return true if both entities are saved successfully
              return result > 0;
          }*/
    }
}
