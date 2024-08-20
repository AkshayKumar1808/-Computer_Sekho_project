using Computer_Sekho.Models;

namespace Computer_Sekho.Services
{
    public interface IAdminEnquiryService
    {
       public Task<IEnumerable<AdminEnquiry>> GetAdminEnquiry();
        public void AddEnquiry(AdminEnquiry adminEnquiry);
        public Task UpdateAdminEnquiry(int id, AdminEnquiry adminEnquiry);
        public void DeleteAdminEnquiry(int id);

        public AdminEnquiry GetAdminEnquiry(int id);
       public Task<IEnumerable<AdminEnquiry>> GetEnquiryByName(string name);
       public Task<IEnumerable<object>> GetAllDetails();
    }
}
