using ComputerSeekho.Models;
using ImageModel = ComputerSeekho.Models.Image;

namespace ComputerSeekho.Services
{
    public interface IBatch
    {
        Task <IEnumerable<ImageModel>> getBatch1Image();
        Task<IEnumerable<ImageModel>> getBatch2Image();

        //---------------------------------------------

        Task<IEnumerable<BatchMaster>> GetAllBatches();
        Task<BatchMaster> GetBatchById(int id);
        Task<BatchMaster> AddBatch(BatchMaster batch);
        Task<BatchMaster> UpdateBatch(int id, BatchMaster batch);
        Task<bool> DeleteBatch(int id);

        

    }
}
