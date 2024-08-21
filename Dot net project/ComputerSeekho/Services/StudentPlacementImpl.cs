using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComputerSeekho.Repository;
using Microsoft.EntityFrameworkCore;
using ComputerSeekho.DTO;
using ComputerSeekho.Models;
using ComputerSeekho.Services;

namespace ComputerSeekho.Services
{
   

    public class StudentPlacementImpl : IStudentPlacement
    {
        private readonly AppdbContext _context;

        public StudentPlacementImpl(AppdbContext context)
        {
            _context = context;
        }

        public async Task<List<StudentPlacementDTO>> GetStudentPlacementDetails(string batchName)
        {
            var query = from student in _context.StudentMaster
                        join placement in _context.PlacementMaster
                        on student.StudentId equals placement.SId
                        join batch in _context.BatchMaster
                        on student.BId equals batch.BatchId
                        where batch.BatchName == batchName
                        select new
                        {
                            student.StudentId,
                            student.StudentName,
                            student.StudentPhoto,
                            placement.CompanyName,
                            placement.PlacementId
                        };

            var queryResult = await query.ToListAsync();  // Executes the query and gets the data

            // Now group by student and select the latest placement
            var result = queryResult
                .GroupBy(g => new { g.StudentId, g.StudentName, g.StudentPhoto })
                .Select(group => new StudentPlacementDTO
                {
                    StudentId = group.Key.StudentId,
                    StudentName = group.Key.StudentName,
                    StudentPhoto = group.Key.StudentPhoto,
                    CompanyName = group.OrderByDescending(p => p.PlacementId).FirstOrDefault()?.CompanyName
                })
                .ToList();

            return result;
        }




        public async Task<IEnumerable<StudentMaster>> GetAllstudent()
        {
            return await _context.StudentMaster.ToListAsync();
        }

    }
    /*
	@Query("SELECT new com.example.DTO.ImageStudentDTO(s.studentId, s.studentName, s.studentPhoto, p.companyName) " +
		       "FROM Student s JOIN s.placements p JOIN p.batch b WHERE b.batchName = :batchName")*/
}
