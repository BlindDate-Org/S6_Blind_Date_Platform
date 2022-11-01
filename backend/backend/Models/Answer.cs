namespace backend.Models
{
    public class Answer
    {
        //Mary added constructor to initialize answer needed for testing the object
        public Answer(Guid id, Guid questionId, string? content, DateTime createdAt, bool reported)
        {
            Id = id;
            QuestionId = questionId;
            Content = content;
            CreatedAt = createdAt;
            Reported = reported;
        }

       


        public Guid Id { get; set; }
        public Guid Question_Id{ get; set; }
        public string? Description { get; set; }
        public Guid Owner_Id { get; set; }
        public bool Reported { get; set; }
        public DateTime DateOfAdded { get; set; }
        public int AmountOfLikes { get; set; }

    }
}
