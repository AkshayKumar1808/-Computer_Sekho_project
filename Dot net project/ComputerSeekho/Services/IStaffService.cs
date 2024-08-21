using ComputerSeekho.Models;

namespace ComputerSeekho.Services
{
    public interface IStaffService
    {
        public Task<IEnumerable<StaffMaster>> GetAll();
       public Task<StaffMaster> GetStaff(int id);

        public void AddStaff(StaffMaster staff);
       public void UpdateStaff(int id, StaffMaster staff);
        public void DeleteStaff(int id);
       // Task<IEnumerable<string>> GetAllStaffbyname();
    }
}
