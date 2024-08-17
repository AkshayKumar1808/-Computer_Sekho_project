using computerseekho.DTO;
using computerseekho.Models;
using static computerseekho.DTO.AdminEnquiryDTO;

namespace computerseekho.Services
{
    public interface IAdminEnquiryService
    {
        public Task<IEnumerable<AdminEnquiry>> GetAdminEnquiry();
        public void AddEnquiry(AdminEnquiry adminEnquiry);
        public Task UpdateAdminEnquiry(int id, AdminEnquiry adminEnquiry);
        public void DeleteAdminEnquiry(int id);

        public AdminEnquiry GetAdminEnquiry(int id);
        public Task<IEnumerable<AdminEnquiry>>GetEnquiryByName(string name);
        public Task<IEnumerable<AdminEnquiryDetailDto>> GetAllDetails();
    }
}
