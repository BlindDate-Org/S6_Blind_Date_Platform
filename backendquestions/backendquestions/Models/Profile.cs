namespace backendquestions.Models
{
    public class Profile
    {
        public Guid Id { get; set; }
        public string OAuthIdentifier { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Gender { get; set; } = string.Empty;
        public DateTime Birthdate { get; set; }
        public List<Topic> Topic { get; set; } = new List<Topic>();
        //public List<Language> Language { get; set; } = new List<Language>();
        //public List<VisualHandicapLevel> VisualHandicapLevel { get; set; } = new List<VisualHandicapLevel>();
    }
}
