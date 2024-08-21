using Computer_Sekho.Models;

namespace Computer_Sekho.Services
{
    public interface IFollowUpService
    {
        public Task<IEnumerable<object>> GetFollowUp();
       public void updateFollowup(int id, Followup followup);

        public void deleteFollowup(int id);
    }
}
