using ComputerSeekho.Repository;
using ComputerSeekho.Models;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;


namespace ComputerSeekho.Services
{
    public class BatchImpl : IBatch
    {
        private readonly AppdbContext _context;

        public BatchImpl(AppdbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Image>> getBatch1Image()
        {
            return await(from img in _context.ImageMaster
                         join album in _context.AlbumMaster on img.Aid equals album.AlbumId
                         where album.AlbumName == "Batch1"
                         select img).ToListAsync();

        }
        public async Task<IEnumerable<Image>> getBatch2Image()
        {
            return await(from img in _context.ImageMaster
                         join album in _context.AlbumMaster on img.Aid equals album.AlbumId
                         where album.AlbumName == "Batch2"
                         select img).ToListAsync();
        }



        //----------------------------------------------------------------


        public async Task<IEnumerable<BatchMaster>> GetAllBatches()
        {
            return await _context.BatchMaster.ToListAsync();
        }

        public async Task<BatchMaster> GetBatchById(int id)
        {
            return await _context.BatchMaster.FindAsync(id);
        }

        public async Task<BatchMaster> AddBatch(BatchMaster batch)
        {
            _context.BatchMaster.Add(batch);
            await _context.SaveChangesAsync();
            return batch;
        }

        public async Task<BatchMaster> UpdateBatch(int id, BatchMaster batch)
        {
            var existingBatch = await _context.BatchMaster.FindAsync(id);
            if (existingBatch != null)
            {
                existingBatch.BatchName = batch.BatchName;
                existingBatch.BatchIsActive = batch.BatchIsActive;
                existingBatch.BatchStartDate = batch.BatchStartDate;
                existingBatch.BatchEndTime = batch.BatchEndTime;
                existingBatch.CourseFees = batch.CourseFees;
                existingBatch.Cid = batch.Cid;

                await _context.SaveChangesAsync();
                return existingBatch;
            }
            return null;
        }

        public async Task<bool> DeleteBatch(int id)
        {
            var batch = await _context.BatchMaster.FindAsync(id);
            if (batch != null)
            {
                _context.BatchMaster.Remove(batch);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }
    }
}
