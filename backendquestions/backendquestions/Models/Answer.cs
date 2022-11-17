namespace backendquestions.Models
{
    public class Answer
    {
        //Mary added constructor ofr the test of initializing this object
        public Answer(Guid id, string description, Guid ownerId)
        {
            Id = id;
            Description = description;
            OwnerId = ownerId;
        }

        public Guid Id { get; set; }
        public string Description { get; set; } = string.Empty;
        public Guid OwnerId { get; set; }
    }
}
