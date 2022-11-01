namespace backendquestions.Models
{
    public class Question
    {
        public Guid Id { get; set; }
        public List<Topic> Topics { get; set; } = new List<Topic>();//Topics instead of Topic for better overview
        public string Title { get; set; } = String.Empty;
        public string Description { get; set; } = String.Empty;
        public Guid OwnerId { get; set; }
        public List<Answer> Answers { get; set; } = new List<Answer>();//Answers instead of Answer for better overview
        public DateTime DateOfAdded { get; set; }
        public bool Reported { get; set; }
        public int AmountOfLikes { get; set; }

        //public string FileName { get; set; } = String.Empty;
        //public int NumberOfAnswers { get; set; }
        //public string Deleted { get; set; } = String.Empty;
        //public string LinkedInterest { get; set; } = String.Empty;
        //public string Language { get; set; } = String.Empty;

    }
}
