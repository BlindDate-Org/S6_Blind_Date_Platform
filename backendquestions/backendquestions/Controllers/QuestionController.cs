using backendquestions.Interfaces;
using backendquestions.Models;
using Microsoft.AspNetCore.Mvc;

namespace backendquestions.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly IQuestionService _questionService;

        public QuestionController(IQuestionService questionService)
        {
            _questionService = questionService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Question>>> GetAllQuestions()
        {
            return Ok(await _questionService.GetAllQuestions());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Question>> GetQuestionById(Guid id)
        {
            var response = await _questionService.GetQuestionById(id);
            if (response != null)
            {
                return Ok(response);
            }
            return NotFound("Question not found with given id");
        }

        [HttpPost]
        public async Task<ActionResult<List<Question>>> PostQuestion(Question Question)
        {
            return Ok(await _questionService.AddQuestion(Question));
        }

        [HttpPut]
        public async Task<ActionResult<List<Question>>> UpdateQuestion(Question request)
        {
            var response = await _questionService.UpdateQuestion(request);
            if (response != null)
            {
                return Ok(response);
            }
            return BadRequest("Question not found with given id");
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Question>>> DeleteQuestion(Guid id)
        {
            var Response = await _questionService.DeleteQuestion(id);
            if (Response != null)
            {
                return Ok(Response);
            }

            return NotFound("Question not found with given id");
        }
    }
}
