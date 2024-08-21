using System.Collections.Generic;
using System.Drawing;
using System.Threading.Tasks;
using ComputerSeekho.Models;
using ImageModel = ComputerSeekho.Models.Image;
 

namespace ComputerSeekho.Services
{
    public interface IRecruiters 
    {
        Task<IEnumerable<ImageModel>> GetAllRecImg();
        Task<ImageModel?> GetRecImg(int id);
        Task<ImageModel> Add(ImageModel imageModel);
        Task<ImageModel?> Update(int id, ImageModel imgChanges);
        Task<ImageModel?> Delete(int id);
    }
}
