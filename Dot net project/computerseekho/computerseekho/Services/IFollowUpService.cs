using Computer_Seekho.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ActionConstraints;

namespace Computer_Seekho.Services
{
    public interface IFollowUpService
    {
        public Task<IEnumerable<object>> GetFollowUp();
       public void updateFollowup(int id,Followup followup);

        public void deleteFollowup(int id);
    }
}
