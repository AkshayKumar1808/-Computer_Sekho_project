﻿using Computer_Seekho.DTO;
using Computer_Seekho.Models;
using Computer_Seekho.Repositories;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using static Computer_Seekho.DTO.AdminEnquiryDTO;


namespace Computer_Seekho.Services
{
   
    public class AdminEnquiryServiceImpl : IAdminEnquiryService
    {
        private readonly ComputerSeekhoDbContext computerSeekhoDbContext;
        public AdminEnquiryServiceImpl(ComputerSeekhoDbContext computerSeekhoDbContext)
        {
            this.computerSeekhoDbContext = computerSeekhoDbContext;
        }

        public void AddEnquiry(AdminEnquiry adminEnquiry)
        {
           
            try
            {
                //retrive the coursename and admin coursename from admin enquiry
                var course = computerSeekhoDbContext.courses.FirstOrDefault(c => c.CourseName == adminEnquiry.Course.CourseName);
                var staff= computerSeekhoDbContext.staffmasters.FirstOrDefault(C=>C.Staffname==adminEnquiry.StaffMaster.Staffname);
                if(course == null || staff==null) { throw new Exception("invalid course name or Staff Name"); }
                adminEnquiry.Cid = course.CourseId;
                adminEnquiry.Sid = staff.Staffid;
                // Add AdminEnquiry
                computerSeekhoDbContext.adminEnquiry.Add(adminEnquiry);
                 computerSeekhoDbContext.SaveChanges();

                // Create Followup
                var followup = new Followup
                {
                    FollowupDate = adminEnquiry.FollowUpDate,
                    FollowupMsg = "Initial follow-up message",
                    IsActive = adminEnquiry.IsActive,
                    EId = adminEnquiry.EnquiryId,
                    StId = adminEnquiry.Sid
                };

                computerSeekhoDbContext.followup.Add(followup);
                computerSeekhoDbContext.SaveChanges();

                // Commit transaction
                

                
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
          
        }

        public void DeleteAdminEnquiry(int id)
        {
            var enquiry= computerSeekhoDbContext.adminEnquiry.SingleOrDefault(data=>data.EnquiryId==id);
            if(enquiry == null) { throw new Exception("No record found"); }
            computerSeekhoDbContext.Remove(enquiry);
            computerSeekhoDbContext.SaveChanges();
        }

        public async Task<IEnumerable<AdminEnquiry>> GetAdminEnquiry()
        {
             return await computerSeekhoDbContext.adminEnquiry.OrderByDescending(e =>e.EnquiryDate ).ToListAsync();
        }

        public AdminEnquiry GetAdminEnquiry(int id)
        {
           var enquiry=computerSeekhoDbContext.adminEnquiry.FirstOrDefault(data=>data.EnquiryId== id);
            if(enquiry== null) { throw new Exception("No record was found"); }
            return enquiry;
        }

        public async Task<IEnumerable<AdminEnquiryDetailDto>> GetAllDetails()
        {
            var enquiries = await (from enquiry in computerSeekhoDbContext.adminEnquiry
                            join course in computerSeekhoDbContext.courses
                            on enquiry.Cid equals course.CourseId
                            join staff in computerSeekhoDbContext.staffmasters
                            on enquiry.Sid equals staff.Staffid
                            select new AdminEnquiryDetailDto
                            {
                                EnquiryId = enquiry.EnquiryId,
                                Address = enquiry.Address,
                                Mobile = enquiry.Mobile,
                                AlternateMobile = enquiry.AlternateMobile,
                                EmailId = enquiry.EmailId,
                                EnquirerName = enquiry.EnquirerName,
                                StudentName = enquiry.StudentName,
                                EnquirerQuery = enquiry.EnquirerQuery,
                                EnquiryDate = enquiry.EnquiryDate,
                                FollowUpDate = enquiry.FollowUpDate,
                                IsActive = enquiry.IsActive,
                                CourseName = course.CourseName,
                                StaffName = staff.Staffname
                            }).ToListAsync();
            return enquiries;
        }

        public async Task<IEnumerable<AdminEnquiry>> GetEnquiryByName(string name)
        {
            var list= await computerSeekhoDbContext.adminEnquiry.Where(e=>e.EnquirerName== name).Select(data=>data).ToListAsync();
            if (!list.Any())
            {
                throw new Exception("record not found");
            }
            return (IEnumerable<AdminEnquiry>)list;
           
        }

        public async Task UpdateAdminEnquiry(int id, AdminEnquiry adminEnquiry)
        {
            var exenquiry = computerSeekhoDbContext.adminEnquiry.FirstOrDefault(data => data.EnquiryId == id);
            if (exenquiry == null)
            {
                throw new ArgumentException("Enquiry not found.");
            }

            
            // Validate Course ID
            var courseExists = await computerSeekhoDbContext.courses.AnyAsync(c => c.CourseId == adminEnquiry.Cid);
                

            if (!courseExists)
            {
                throw new ArgumentException("Invalid Course ID.");
            }

            // Validate Staff ID
            var staffExists = await computerSeekhoDbContext.staffmasters
                .AnyAsync(s => s.Staffid == adminEnquiry.Sid);

            if (!staffExists)
            {
                throw new ArgumentException("Invalid Staff ID.");
            }

            exenquiry.Address = adminEnquiry.Address;
            exenquiry.Mobile = adminEnquiry.Mobile;
            exenquiry.AlternateMobile = adminEnquiry.AlternateMobile;
            exenquiry.EmailId = adminEnquiry.EmailId;
            exenquiry.EnquirerName = adminEnquiry.EnquirerName;
            exenquiry.EnquirerName= adminEnquiry.EnquirerName;
            exenquiry.EnquirerQuery= adminEnquiry.EnquirerQuery;
            exenquiry.EnquiryDate = adminEnquiry.EnquiryDate;
            exenquiry.FollowUpDate = adminEnquiry.FollowUpDate;
            exenquiry.IsActive = adminEnquiry.IsActive;
            exenquiry.Cid = adminEnquiry.Cid;
            exenquiry.Sid = adminEnquiry.Sid;

            await computerSeekhoDbContext.SaveChangesAsync();

        }
    }
}
