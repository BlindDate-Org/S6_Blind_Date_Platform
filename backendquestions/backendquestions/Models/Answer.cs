namespace backendquestions.Models
{
    public class Answer
    {
        public Guid Id { get; set; }
        public string Description { get; set; } = string.Empty;
        public Guid OwnerId { get; set; }
    }
}
