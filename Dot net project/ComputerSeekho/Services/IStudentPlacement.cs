
using System.Collections.Generic;
using System.Threading.Tasks;
using ComputerSeekho.DTO;
using ComputerSeekho.Models;
using Microsoft.AspNetCore.Mvc;


namespace ComputerSeekho.Services
{

    public interface IStudentPlacement
    {
        Task<List<StudentPlacementDTO>> GetStudentPlacementDetails(string batchName);
        Task<IEnumerable<StudentMaster>> GetAllstudent();
    }

}
