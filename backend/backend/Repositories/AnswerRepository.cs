using backend.Interfaces;
using backend.Models;

namespace backend.repositories
{
    public class AnswerRepository:IAnswerRepository
    {
        private readonly DataContext _context;
        public AnswerRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Answer>?> GetAllAnswers()
        {
            return await _context.Answers.ToListAsync();
        }

        public async Task<Answer?> GetAnswerbyId(Guid id)
        {
            var question = await _context.Answers.FindAsync(id);
            if (question != null)
            {
                return question;
            }
            return null;
        }

        public async Task<List<Answer>> AddAnswer(Answer answer)
        {
            _context.Answers.Add(answer);
            await _context.SaveChangesAsync();
            return await _context.Answers.ToListAsync();
        }

        public async Task<List<Answer>?> UpdateAnswer(Answer answer)
        {
            var dbQuestion = await _context.Answers.FindAsync(answer.Id);
            if (dbQuestion != null)
            {
                dbQuestion.Description = answer.Description;
                dbQuestion.Reported = answer.Reported;
                dbQuestion.Id = answer.Id;
                dbQuestion.Question_Id = answer.Question_Id;
                dbQuestion.DateOfAdded = answer.DateOfAdded;
                dbQuestion.AmountOfLikes = answer.AmountOfLikes;
                dbQuestion.Owner_Id = answer.Owner_Id;
              
                await _context.SaveChangesAsync();

                return await _context.Answers.ToListAsync();
            }

            return null;
        }

        public async Task<List<Answer>?> DeleteAnswer(Guid id)
        {
            var dbAnswer = await _context.Answers.FindAsync(id);
            if (dbAnswer != null)
            {
                _context.Answers.Remove(dbAnswer);
                await _context.SaveChangesAsync();

                return _context.Answers.ToList();
            }

            return null;
        }
    }
}
