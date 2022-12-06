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
            var answer = await _context.Answers.FindAsync(id);
            if (answer != null)
            {
                return answer;
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
            var dbAsnwer = await _context.Answers.FindAsync(answer.Id);
            if (dbAsnwer != null)
            {
                dbAsnwer.Description = answer.Description;
                dbAsnwer.Reported = answer.Reported;
                dbAsnwer.Id = answer.Id;
                dbAsnwer.Question_Id = answer.Question_Id;
                dbAsnwer.DateOfAdded = answer.DateOfAdded;
                dbAsnwer.AmountOfLikes = answer.AmountOfLikes;
                dbAsnwer.Owner_Id = answer.Owner_Id;
              
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

        public Task<List<Answer>?> GetAnswerByQuestionId(Guid questionId)
        {
            throw new NotImplementedException();
        }
    }
}
