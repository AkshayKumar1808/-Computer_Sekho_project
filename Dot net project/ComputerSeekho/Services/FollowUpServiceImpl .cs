using ComputerSeekho.Models;
using ComputerSeekho.Repository;
using Microsoft.EntityFrameworkCore;

namespace ComputerSeekho.Services
{
    public class FollowUpServiceImpl : IFollowUpService
    {
        private readonly AppdbContext computerSekhoDbContext;
        public FollowUpServiceImpl(AppdbContext computerSekhoDbContext)
        {
            this.computerSekhoDbContext = computerSekhoDbContext;
        }

        public void deleteFollowup(int id)
        {
            var del = computerSekhoDbContext.Followups.FirstOrDefault(data => data.FollowupId == id);
            if (del != null)
            {
                computerSekhoDbContext.Followups.Remove(del);
                computerSekhoDbContext.SaveChanges();
            }

            else throw new Exception("data not found");
        }

        public async Task<IEnumerable<object>> GetFollowUp()
        {
            var followupdetail = from followup in computerSekhoDbContext.Followups
                                 join enquiry in computerSekhoDbContext.AdminEnquiries
                                 on followup.EId equals enquiry.EnquiryId
                                 join staff in computerSekhoDbContext.StaffMasters
                                 on followup.StId equals staff.StaffId
                                 join course in computerSekhoDbContext.courses
                                 on enquiry.Cid equals course.CourseId
                                 orderby followup.FollowupDate ascending
                                 select new
                                 {
                                     followup.FollowupId,
                                     followup.FollowupDate,
                                     followup.FollowupMsg,
                                     enquiry.Address,
                                     enquiry.Mobile,
                                     enquiry.AlternateMobile,
                                     enquiry.EmailId,
                                     enquiry.EnquirerName,
                                     enquiry.StudentName,
                                     enquiry.EnquirerQuery,
                                     enquiry.EnquiryDate,
                                     course.CourseName,
                                     staff.Staffname,
                                     followup.IsActive
                                 };
            return await followupdetail.ToArrayAsync();
        }

        public void updateFollowup(int id, Followup followup)
        {
            var exfollowup = computerSekhoDbContext.Followups.FirstOrDefault(data => data.FollowupId == id);
            if (exfollowup == null) { throw new Exception("Selected record os not found"); }
            exfollowup.FollowupDate = followup.FollowupDate;
            exfollowup.FollowupMsg = followup.FollowupMsg;
            exfollowup.IsActive = followup.IsActive;

            computerSekhoDbContext.SaveChanges();
        }
    }
}
