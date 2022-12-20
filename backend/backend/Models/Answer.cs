namespace backend.Models
{
    public class Answer
    {
        public Answer(Guid id, Guid question_Id, string? description, Guid owner_Id, bool reported, DateTime dateOfAdded, int amountOfLikes)
        {
            Id = id;
            Question_Id = question_Id;
            Description = description;
            Owner_Id = owner_Id;
            Reported = reported;
            DateOfAdded = dateOfAdded;
            AmountOfLikes = amountOfLikes;
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
