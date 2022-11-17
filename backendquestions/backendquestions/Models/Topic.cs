namespace backendquestions.Models
{
    public class Topic
    {
        //Mary added constructor to initialize this object for testing purposes in the question model
        public Topic(Guid id, string name)
        {
            Id = id;
            Name = name;
        }

        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
    }
}
