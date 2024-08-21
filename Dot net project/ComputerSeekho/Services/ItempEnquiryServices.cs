using ComputerSeekho.Models;

namespace ComputerSeekho.Services
{
    public interface ItempEnquiryServices
    {
        Task<tempEnquiry> AddEnquiryAsync(tempEnquiry enquiry);
        Task<IEnumerable<tempEnquiry>> getAllEnquiry();
        Task<bool> DeleteEnq(long id);
    }
}
