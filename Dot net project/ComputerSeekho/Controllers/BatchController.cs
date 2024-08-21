using ComputerSeekho.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using ComputerSeekho.Models;


namespace ComputerSeekho.Controllers
{
    [Route("api/")]
    [ApiController]

    public class BatchController : ControllerBase
    {

        private readonly IBatch _service;


        public BatchController(IBatch _service)
        {
            this._service = _service;
        }
        [HttpGet("Batch1")]
        public async Task<ActionResult<IEnumerable<Image>>> GetBatch1Images()
        {
            var images = await _service.getBatch1Image();
            if (images == null || !images.Any())
            {
                return NotFound();
            }
            return Ok(images);
        }

        [HttpGet("Batch2")]
        public async Task<ActionResult<IEnumerable<Image>>> GetBatch2Image()
        {
            var images = await _service.getBatch2Image();
            if (images == null || !images.Any())
            {
                return NotFound();
            }
            return Ok(images);

        }






        //--------------CRUD on batch table-------------------------------------
        // GET: api/Batch
        [HttpGet("Getbatch")]
        public async Task<ActionResult<IEnumerable<BatchMaster>>> GetAllBatches()
        {
            var batches = await _service.GetAllBatches();
            return Ok(batches);
        }

        // GET: api/Batch/5
        [HttpGet("GetBatchById/{id}")]
        public async Task<ActionResult<BatchMaster>> GetBatchById(int id)
        {
            var batch = await _service.GetBatchById(id);
            if (batch == null)
            {
                return NotFound();
            }
            return Ok(batch);
        }

        // POST: api/Batch
        [HttpPost("PostBatch")]
        public async Task<ActionResult<BatchMaster>> AddBatch([FromBody] BatchMaster batch)
        {
            var createdBatch = await _service.AddBatch(batch);
            return CreatedAtAction(nameof(GetBatchById), new { id = createdBatch.BatchId }, createdBatch);
        }

        // PUT: api/Batch/5
        [HttpPut("PutBatchById/{id}")]
        public async Task<IActionResult> UpdateBatch(int id, [FromBody] BatchMaster batch)
        {
            var updatedBatch = await _service.UpdateBatch(id, batch);
            if (updatedBatch == null)
            {
                return NotFound();
            }
            return Ok(updatedBatch);
        }

        // DELETE: api/Batch/5
        [HttpDelete("DeleteBatchById/{id}")]
        public async Task<IActionResult> DeleteBatch(int id)
        {
            var success = await _service.DeleteBatch(id);
            if (!success)
            {
                return NotFound();
            }
            return NoContent();
        }



    }
}
