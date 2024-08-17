
using Computer_Seekho.Models;
using Computer_Seekho.Repositories;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho.Services
{
    public class FollowUpServiceImpl : IFollowUpService
    {
        private readonly ComputerSeekhoDbContext computerSeekhoDbContext;
        public FollowUpServiceImpl(ComputerSeekhoDbContext computerSeekhoDbContext)
        {
            this.computerSeekhoDbContext = computerSeekhoDbContext;
        }

        public void AddFollowUp(Followup followup)
        {
            computerSeekhoDbContext.followup.Add(followup);
            computerSeekhoDbContext.SaveChanges();
        }

        public void deleteFollowup(int id)
        {
          var del = computerSeekhoDbContext.followup.FirstOrDefault(data=>data.FollowupId==id);
            if (del != null)
            {
                computerSeekhoDbContext.followup.Remove(del);
                computerSeekhoDbContext.SaveChanges() ;
            }

            else throw new Exception("data not found");
        }

        public async Task<IEnumerable<object>> GetFollowUp()
        {
            var followupdetail = from followup in computerSeekhoDbContext.followup
                                 join enquiry in computerSeekhoDbContext.adminEnquiry
                                 on followup.EId equals enquiry.EnquiryId
                                 join staff in computerSeekhoDbContext.staffmasters
                                 on followup.StId equals staff.Staffid
                                 join course in computerSeekhoDbContext.courses
                                 on enquiry.Cid equals course.CourseId
                                 orderby followup.FollowupDate
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
            return await followupdetail.ToArrayAsync<object>();
        }

        public void updateFollowup(int id, Followup followup)
        {
            var exfollowup= computerSeekhoDbContext.followup.FirstOrDefault(data=>data.FollowupId==id);
            if (exfollowup == null) { throw new Exception("Selected record os not found"); }
            exfollowup.FollowupDate=followup.FollowupDate;
            exfollowup.FollowupMsg = followup.FollowupMsg;
            exfollowup.IsActive = followup.IsActive;

            computerSeekhoDbContext.SaveChanges();
        }
    }
}
