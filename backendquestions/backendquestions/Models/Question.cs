namespace backendquestions.Models
{
    public class Question
    {
        public Question(Guid id, string topics, string title, string description, Guid ownerId, string answers, DateTime dateOfAdded, bool reported, int amountOfLikes)
        {
            Id = id;
            Topics = topics;
            Title = title;
            Description = description;
            OwnerId = ownerId;
            Answers = answers;
            DateOfAdded = dateOfAdded;
            Reported = reported;
            AmountOfLikes = amountOfLikes;
        }

        //Mary Added the constructor to initialize the object for testing
        //public Question(Guid id, List<Topic> topics, string title, string description, Guid ownerId, List<Answer> answers, DateTime dateOfAdded, bool reported, int amountOfLikes)
        //{
        //    Id = id;
        //    Topics = topics;
        //    Title = title;
        //    Description = description;
        //    OwnerId = ownerId;
        //    Answers = answers;
        //    DateOfAdded = dateOfAdded;
        //    Reported = reported;
        //    AmountOfLikes = amountOfLikes;
        //}

        public Guid Id { get; set; }
        public string Topics { get; set; } = String.Empty;//Topics instead of Topic for better overview
        public string Title { get; set; } = String.Empty;
        public string Description { get; set; } = String.Empty;
        public Guid OwnerId { get; set; }
        public string Answers { get; set; } = String.Empty;//Answers instead of Answer for better overview
        public DateTime DateOfAdded { get; set; }
        public bool Reported { get; set; }
        public int AmountOfLikes { get; set; }

    }
}
