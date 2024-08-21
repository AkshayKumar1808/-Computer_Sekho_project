using ComputerSeekho.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComputerSeekho.Repository;

namespace ComputerSeekho.Services
{ 
  public class RecruitersImpl : IRecruiters
    {
        private readonly AppdbContext _context;

        public RecruitersImpl(AppdbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Image>> GetAllRecImg()
        {
            return await (from img in _context.ImageMaster
                          join album in _context.AlbumMaster on img.Aid equals album.AlbumId
                          where album.AlbumName == "Recruiters"
                          select img).ToListAsync();
        }


        public async Task<Image?> GetRecImg(int id)
        {
            return await _context.ImageMaster.FindAsync(id);
        }

        public async Task<ComputerSeekho.Models.Image> Add(Image img)
        {
            _context.ImageMaster.Add(img);
            await _context.SaveChangesAsync();
            return img;
        }

        public async Task<Image?> Update(int id, Image image)
        {
            if (id != image.PathId)
            {
                return null;
            }

            _context.Entry(image).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ImageExists(id))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }

            return image;
        }

        private bool ImageExists(int id)
        {
            return _context.ImageMaster.Any(e => e.PathId == id);
        }

        public async Task<Image> Delete(int id)
        {
            var image = await _context.ImageMaster.FindAsync(id);
            if (image == null)
            {
                return null;
            }

            _context.ImageMaster.Remove(image);
            await _context.SaveChangesAsync();

            return image;
        }


    }
}
