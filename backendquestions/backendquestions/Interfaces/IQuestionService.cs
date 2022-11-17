using backendquestions.Models;

namespace backendquestions.Interfaces
{
    public interface IQuestionService
    {
        Task<List<Question>> GetAllQuestions();
        Task<Question> GetQuestionById(Guid id);
        Task<List<Question>> AddQuestion(Question question);
        Task<List<Question>> UpdateQuestion(Question request);
        Task<List<Question>> DeleteQuestion(Guid id);
    }
}
