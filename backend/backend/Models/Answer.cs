namespace backend.Models
{
    public class Answer
    {
        public Guid Id { get; set; }
        public Guid Question_Id{ get; set; }
        public string? Description { get; set; }
        public Guid Owner_Id { get; set; }
        public bool Reported { get; set; }
        public DateTime DateOfAdded { get; set; }
        public int AmountOfLikes { get; set; }

    }
}
