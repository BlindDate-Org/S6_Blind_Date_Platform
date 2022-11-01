using backend.Interfaces;
using backend.Models;

namespace backend.Services
{
    public class AnswerService : IAnswerService
    {
        private readonly IAnswerRepository _answerRepository;

        public AnswerService(IAnswerRepository answerrepository)
        {
            _answerRepository = answerrepository;
        }
        public async Task<List<Answer>> AddAnswer(Answer answer)
        {
            return await _answerRepository.AddAnswer(answer);
        }

        public async Task<List<Answer>> DeleteAnswer(Guid id)
        {
            return await _answerRepository.DeleteAnswer(id);
        }

        public async Task<List<Answer>> GetAllAnswers()
        {
            return await _answerRepository.GetAllAnswers();
        }

        public async Task<Answer> GetAnswerById(Guid id)
        {
            return await _answerRepository.GetAnswerbyId(id);
        }

        public async Task<List<Answer>> UpdateAnswer(Answer answer)
        {
            return await _answerRepository.UpdateAnswer(answer);
        }
    }
}
