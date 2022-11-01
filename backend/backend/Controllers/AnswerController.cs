using backend.Interfaces;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswerController : ControllerBase
    {
        private readonly IAnswerService _context;
        public AnswerController(IAnswerService context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Answer>>> Get()
        {
            return Ok(await _context.GetAllAnswers());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Answer>> Get(Guid id)
        {
            var response = await _context.GetAnswerById(id);
            if (response != null)
            {
                return Ok(response);
            }
            return NotFound("Answer not found with given id");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult<List<Answer>>> Add(Answer answer)
        {
            return Ok(await _context.AddAnswer(answer));
        }

        [HttpPut]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult<List<Answer>>> UpdateHero(Answer request)
        {
            var response = await _context.UpdateAnswer(request);
            if (response != null)
            {
                return Ok(response);
            }
            return BadRequest("Question not found with given id");
        }

        [HttpDelete("{id}")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult<List<Answer>>> Delete(Guid id)
        {
            var Response = await _context.DeleteAnswer(id);
            if (Response != null)
            {
                return Ok(Response);
            }

            return NotFound("Question not found with given id");
        }
    }
}
