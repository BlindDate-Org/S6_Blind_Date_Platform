using backend.Models;

namespace backend.Interfaces
{
    public interface IAnswerRepository
    {
        Task<List<Answer>?>GetAllAnswers();
        Task<Answer> GetAnswerbyId(Guid id);
        Task<List<Answer>?> AddAnswer(Answer answer);
        Task<List<Answer>?> UpdateAnswer(Answer answer);
        Task<List<Answer>?> DeleteAnswer(Guid id);

    }
}
