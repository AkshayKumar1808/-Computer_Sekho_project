using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ComputerSeekho.DTO;
using ComputerSeekho.Services;
using ComputerSeekho.Models;



namespace ComputerSeekho.Controllers
{
    [Route("api/student/")]
    [ApiController]


    public class PlacementController : ControllerBase
    {
        private readonly IStudentPlacement _placementService;

        public PlacementController(IStudentPlacement placementService)
        {
            _placementService = placementService;
        }

        [HttpGet("{batchName}")]
        public async Task<ActionResult<List<StudentPlacementDTO>>> GetStudentPlacement(string batchName)
        {
            string decodedBatchName = Uri.UnescapeDataString(batchName);



            var result = await _placementService.GetStudentPlacementDetails(decodedBatchName);
            if (result == null || !result.Any())
            {
                return NotFound();
            }
            return Ok(result);
        }





        // GET: api/Batch
        [HttpGet("Getstudentdetail")]
        public async Task<ActionResult<IEnumerable<StudentMaster>>> GetAllStudent()
        {
            var student = await _placementService.GetAllstudent();
            return Ok(student);
        }
    }

}