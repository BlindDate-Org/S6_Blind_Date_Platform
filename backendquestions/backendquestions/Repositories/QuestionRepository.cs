using backendquestions.Interfaces;
using backendquestions.Models;

namespace backendquestions.Repositories
{
    public class QuestionRepository : IQuestionRepository
    {
        private readonly DataContext _context;

        public QuestionRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Question>> GetQuestionByTopic(string topic)
        {
            var dbQuestion = await _context.Questions.Where(question => question.Topics == topic).ToListAsync();
            if(dbQuestion != null)
            {
                return dbQuestion;
            }
            return null;
        }

        async Task<List<Question>> IQuestionRepository.AddQuestion(Question question)
        {
            _context.Questions.Add(question);
            await _context.SaveChangesAsync();

            return await _context.Questions.ToListAsync();
        }

        async Task<List<Question>> IQuestionRepository.DeleteQuestion(Guid id)
        {
            var dbQuestion = await _context.Questions.FindAsync(id);
            if(dbQuestion != null)
            {
                _context.Questions.Remove(dbQuestion);
                await _context.SaveChangesAsync();

                return _context.Questions.ToList();
            }

            return null;
        }

        async Task<List<Question>> IQuestionRepository.GetAllQuestions()
        {
            return await _context.Questions.ToListAsync();
        }

        async Task<Question> IQuestionRepository.GetQuestionById(Guid id)
        {
            var question = await _context.Questions.FindAsync(id);
            if(question != null)
            {
                return question;
            }
            return null;
        }

        async Task<List<Question>> IQuestionRepository.UpdateQuestion(Question request)
        {
            var dbQuestion = await _context.Questions.FindAsync(request.Id);
            if(dbQuestion != null)
            {
                dbQuestion.Topics = request.Topics;
                dbQuestion.Title = request.Title;
                dbQuestion.Description = request.Description;
                dbQuestion.OwnerId = request.OwnerId;
                dbQuestion.DateOfAdded = request.DateOfAdded;
                dbQuestion.Reported = request.Reported;
                dbQuestion.AmountOfLikes = request.AmountOfLikes;

                await _context.SaveChangesAsync();

                return await _context.Questions.ToListAsync();
            }

            return null;
        }
    }
}
