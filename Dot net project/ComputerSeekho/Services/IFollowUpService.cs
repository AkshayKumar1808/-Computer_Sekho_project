using ComputerSeekho.Models;
using ComputerSeekho.Repository;

namespace ComputerSeekho.Services
{
    public interface IFollowUpService
    {
        public Task<IEnumerable<object>> GetFollowUp();
        public void updateFollowup(int id, Followup followup);

        public void deleteFollowup(int id);
    }
}
