namespace computerseekho.DTO
{
    public class AdminEnquiryDTO
    {
        public class AdminEnquiryDetailDto
        {
            public int EnquiryId { get; set; }
            public string Address { get; set; }
            public long? Mobile { get; set; }
            public long AlternateMobile { get; set; }
            public string EmailId { get; set; }
            public string EnquirerName { get; set; }
            public string StudentName { get; set; }
            public string EnquirerQuery { get; set; }
            public DateTime? EnquiryDate { get; set; }
            public DateTime? FollowUpDate { get; set; }
            public ulong IsActive { get; set; }
            public string CourseName { get; set; }
            public string StaffName { get; set; }
        }

    }
}
