


using ComputerSeekho.Models;
using ComputerSeekho.Repository;
using Microsoft.EntityFrameworkCore;

namespace ComputerSeekho.Services
{
    public class tempEnquiryServices : ItempEnquiryServices
    {

        private readonly AppdbContext _context;

        public tempEnquiryServices(AppdbContext context)
        {
            _context = context;
        }

        public async Task<tempEnquiry> AddEnquiryAsync(tempEnquiry enquiry)
        {
            _context.tempEnquiry.Add(enquiry);
            await _context.SaveChangesAsync();
            return enquiry;
        }


        public async Task<IEnumerable<tempEnquiry>> getAllEnquiry()
            {
                return await _context.tempEnquiry.ToListAsync();

            }


        public async Task<bool> DeleteEnq(long id)
        {
            var enquiry = await _context.tempEnquiry.FindAsync(id);
            if (enquiry != null)
            {
                _context.tempEnquiry.Remove(enquiry);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }
    }
}
