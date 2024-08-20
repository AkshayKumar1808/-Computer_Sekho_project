using Computer_Sekho.Models;
using Computer_Sekho.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Computer_Sekho.Services
{
    public class AdminEnquiryServiceImpl:IAdminEnquiryService
    {
        private readonly ComputerSekhoDbContext computerSekhoDbContext;
        public AdminEnquiryServiceImpl(ComputerSekhoDbContext computerSekhoDbContext)
        {
            this.computerSekhoDbContext = computerSekhoDbContext;
        }

        public void AddEnquiry(AdminEnquiry adminEnquiry)
        {
            if (adminEnquiry == null)
            {
                throw new ArgumentNullException(nameof(adminEnquiry));
            }

            // Check if Course and StaffMaster exist
            var course = computerSekhoDbContext.Courses.FirstOrDefault(c => c.CourseId == adminEnquiry.Cid);
            var staff = computerSekhoDbContext.StaffMasters.FirstOrDefault(s => s.StaffId == adminEnquiry.Sid);

            if (course == null)
            {
                throw new ArgumentException("Invalid Course ID");
            }

            if (staff == null)
            {
                throw new ArgumentException("Invalid Staff ID");
            }

            // Assign Course and StaffMaster entities to AdminEnquiry
            adminEnquiry.Course = course;
            adminEnquiry.StaffMaster = staff;

            try
            {
                computerSekhoDbContext.AdminEnquiries.Add(adminEnquiry);
                computerSekhoDbContext.SaveChanges();


                var followup = new Followup
                {
                    FollowupDate = adminEnquiry.FollowUpDate,
                    FollowupMsg = "Initial follow-up message",
                    IsActive = adminEnquiry.IsActive,
                    EId = adminEnquiry.EnquiryId,
                    StId = adminEnquiry.Sid
                };

                computerSekhoDbContext.Followups.Add(followup);
                computerSekhoDbContext.SaveChanges();
            }
        
            catch (Exception ex)
            {
                throw new Exception("An error occurred while adding the enquiry.", ex);
            }
        }

        public void DeleteAdminEnquiry(int id)
        {
            var enquiry = computerSekhoDbContext.AdminEnquiries.SingleOrDefault(data => data.EnquiryId == id);
            if (enquiry == null) { throw new Exception("No record found"); }
            computerSekhoDbContext.Remove(enquiry);
            computerSekhoDbContext.SaveChanges();
        }

        public async Task<IEnumerable<AdminEnquiry>> GetAdminEnquiry()
        {
            return await computerSekhoDbContext.AdminEnquiries.OrderBy(e => e.EnquiryDate).ToArrayAsync();
        }

        public AdminEnquiry GetAdminEnquiry(int id)
        {
            var enquiry = computerSekhoDbContext.AdminEnquiries.FirstOrDefault(data => data.EnquiryId == id);
            if (enquiry == null) { throw new Exception("No record was found"); }
            return enquiry;
        }

        public async Task<IEnumerable<object>> GetAllDetails()
        {
            var enquiryDetails = await(from enquiry in computerSekhoDbContext.AdminEnquiries
                                       join course in computerSekhoDbContext.Courses on enquiry.Cid equals course.CourseId
                                       join staff in computerSekhoDbContext.StaffMasters on enquiry.Sid equals staff.StaffId
                                       orderby enquiry.FollowUpDate ascending
                                       select new
                                       {
                                           enquiry.EnquiryId,
                                           enquiry.Address,
                                           enquiry.Mobile,
                                           enquiry.AlternateMobile,
                                           enquiry.EmailId,
                                           enquiry.EnquirerName,
                                           enquiry.StudentName,
                                           enquiry.EnquirerQuery,
                                           enquiry.EnquiryDate,
                                           enquiry.FollowUpDate,
                                           courseName = course.CourseName,
                                           StaffName = staff.Staffname,
                                           enquiry.IsActive
                                       }).ToListAsync();

            return enquiryDetails;
        }

        public async Task<IEnumerable<AdminEnquiry>> GetEnquiryByName(string name)
        {
            var list = await computerSekhoDbContext.AdminEnquiries.Where(e => e.EnquirerName == name).Select(data => data).ToListAsync();
            if (!list.Any())
            {
                throw new Exception("record not found");
            }
            return (IEnumerable<AdminEnquiry>)list;
        }

        public async Task UpdateAdminEnquiry(int id, AdminEnquiry adminEnquiry)
        {
            var exenquiry = computerSekhoDbContext.AdminEnquiries.FirstOrDefault(data => data.EnquiryId == id);
            if (exenquiry == null)
            {
                throw new ArgumentException("Enquiry not found.");
            }


            // Validate Course ID
            var courseExists = await computerSekhoDbContext.Courses.AnyAsync(c => c.CourseId == adminEnquiry.Cid);


            if (!courseExists)
            {
                throw new ArgumentException("Invalid Course ID.");
            }

            // Validate Staff ID
            var staffExists = await computerSekhoDbContext.StaffMasters
                .AnyAsync(s => s.StaffId == adminEnquiry.Sid);

            if (!staffExists)
            {
                throw new ArgumentException("Invalid Staff ID.");
            }

            exenquiry.Address = adminEnquiry.Address;
            exenquiry.Mobile = adminEnquiry.Mobile;
            exenquiry.AlternateMobile = adminEnquiry.AlternateMobile;
            exenquiry.EmailId = adminEnquiry.EmailId;
            exenquiry.EnquirerName = adminEnquiry.EnquirerName;
            exenquiry.EnquirerName = adminEnquiry.EnquirerName;
            exenquiry.EnquirerQuery = adminEnquiry.EnquirerQuery;
            exenquiry.EnquiryDate = adminEnquiry.EnquiryDate;
            exenquiry.FollowUpDate = adminEnquiry.FollowUpDate;
            exenquiry.IsActive = adminEnquiry.IsActive;
            exenquiry.Cid = adminEnquiry.Cid;
            exenquiry.Sid = adminEnquiry.Sid;

            await computerSekhoDbContext.SaveChangesAsync();

        }
    }
    }
    

