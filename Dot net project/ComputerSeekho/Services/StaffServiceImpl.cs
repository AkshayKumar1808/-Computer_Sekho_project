using ComputerSeekho.Models;
using ComputerSeekho.Repository;
using Microsoft.EntityFrameworkCore;

namespace ComputerSeekho.Services
{
    public class StaffServiceImpl:IStaffService
    {
        private readonly AppdbContext computerSekhoDbContext;
         public StaffServiceImpl(AppdbContext computerSekhoDbContext)
        {
            this.computerSekhoDbContext = computerSekhoDbContext;
        }

        public void AddStaff(StaffMaster staff)
        {
            if (staff == null)
            {
                throw new ArgumentNullException(nameof(staff));
            }

            computerSekhoDbContext.StaffMasters.Add(staff);
            computerSekhoDbContext.SaveChanges();
        }

        public void DeleteStaff(int id)
        {
            var satff = computerSekhoDbContext.StaffMasters.SingleOrDefault(data => data.StaffId == id);
            if (satff != null)
            {
                computerSekhoDbContext.StaffMasters.Remove(satff);
                computerSekhoDbContext.SaveChanges();
            }
            else
            {
                throw new Exception("data not found");
            }
        }

        public async Task<IEnumerable<StaffMaster>> GetAll()
        {
            return await computerSekhoDbContext.StaffMasters.ToArrayAsync();
        }

        public async Task<StaffMaster> GetStaff(int id)
        {
           var staff= await computerSekhoDbContext.StaffMasters.SingleOrDefaultAsync(data => data.StaffId == id);
            if (staff == null) { throw new Exception("record is not found"); }
            return staff;
        }

        public void UpdateStaff(int id, StaffMaster staff)
        {
            var exstaff = computerSekhoDbContext.StaffMasters.SingleOrDefault(data => data.StaffId == id);
            if (staff == null) { throw new Exception("data not found"); }
            exstaff.Staffemail = staff.Staffemail;
            exstaff.Staffmobile = staff.Staffmobile;
            exstaff.Staffname = staff.Staffname;
            exstaff.Staffrole = staff.Staffrole;
            computerSekhoDbContext.SaveChanges();
        }
    }
}
