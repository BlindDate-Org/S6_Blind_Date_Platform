using backendquestions.Interfaces;
using backendquestions.Models;

namespace backendquestions.Services
{
    public class QuestionService : IQuestionService
    {
        private readonly IQuestionRepository _questionRepository;

        public QuestionService(IQuestionRepository questionRepository)
        {
            _questionRepository = questionRepository;
        }

        public async Task<List<Question>> GetAllQuestions()
        {
            return await _questionRepository.GetAllQuestions();
        }

        public async Task<Question> GetQuestionById(Guid id)
        {
            return await _questionRepository.GetQuestionById(id);
        }

        public async Task<List<Question>> AddQuestion(Question question)
        {
            return await _questionRepository.AddQuestion(question);
        }

        public async Task<List<Question>> UpdateQuestion(Question request)
        {
            return await _questionRepository.UpdateQuestion(request);
        }

        public async Task<List<Question>> DeleteQuestion(Guid id)
        {
            return await _questionRepository.DeleteQuestion(id);
        }
    }
}
