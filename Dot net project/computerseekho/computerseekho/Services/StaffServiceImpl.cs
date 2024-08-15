using Computer_Seekho.Models;
using Computer_Seekho.Repositories;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho.Services
{
    public class StaffServiceImpl:IStaffService
    {
        private readonly ComputerSeekhoDbContext computerSeekhoDbContext;
        public StaffServiceImpl(ComputerSeekhoDbContext computerSeekhoDbContext)
        {
            this.computerSeekhoDbContext = computerSeekhoDbContext;
        }

        public void AddStaff(StaffMaster staff)
        {
            computerSeekhoDbContext.staffmasters.Add(staff);
            computerSeekhoDbContext.SaveChanges();
        }

        public void DeleteStaff(int id)
        {
            var satff= computerSeekhoDbContext.staffmasters.SingleOrDefault(data=>data.Staffid==id);
            if(satff != null)
            {
                computerSeekhoDbContext.staffmasters.Remove(satff);
                computerSeekhoDbContext.SaveChanges();
            }
            else
            {
                throw new Exception("data not found");
            }
        }

        public async Task<IEnumerable<StaffMaster>> GetAll()
        {
            return await computerSeekhoDbContext.staffmasters.ToArrayAsync();
        }

        public async Task<StaffMaster> GetStaff(int id)
        {
            return await computerSeekhoDbContext.staffmasters.SingleOrDefaultAsync(data=>data.Staffid==id);
        }

        public void UodateStaff(int id, StaffMaster staff)
        {
            var exstaff= computerSeekhoDbContext.staffmasters.SingleOrDefault(data=>data.Staffid==id);
            if (staff == null) { throw new Exception("data not found"); }
            exstaff.Staffemail=staff.Staffemail;
            exstaff.Staffmobile=staff.Staffmobile;
            exstaff.Staffname=staff.Staffname;
            exstaff.Staffrole=  staff.Staffrole;
            computerSeekhoDbContext.SaveChanges();
        }
    }
}
