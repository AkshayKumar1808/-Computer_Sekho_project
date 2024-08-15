using Computer_Seekho.Models;

namespace Computer_Seekho.Services
{
    public interface IStaffService
    {
        public Task<IEnumerable<StaffMaster>> GetAll();
        public Task<StaffMaster> GetStaff(int id);

        public void AddStaff(StaffMaster staff);
        public void UodateStaff(int id,StaffMaster staff);
        public void DeleteStaff(int id);
    }
}
