using AutoFixture;
using backendquestions.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackendQuestionTests.ModelTests
{
    public class QuestionModelTest
    {
        private readonly IFixture ifixture = new Fixture();

        [Fact]
        public void ConstructorTest()
        {
            //Arrange
               var questionId = ifixture.Create<Guid>();
            var ownerId = ifixture.Create<Guid>();
            //Arrange
            var answerid = ifixture.Create<Guid>();
           
            var answerid2 = ifixture.Create<Guid>();
           // var question_Id = ifixture.Create<Guid>();
            var ownerId2 = ifixture.Create<Guid>();

         
        Answer answer1 = new Answer(answerid,  "In summer dont wear heavy clothes",ownerId);
        Answer answer2 = new Answer(answerid2, "Always be careful when meeting new people", ownerId2);

            List<Answer> answers = new List<Answer>();
            answers.Add(answer1);
            answers.Add(answer2);

            List<Topic> topics = new List<Topic>();

            var topicId1 = ifixture.Create<Guid>();
            var topicId2 = ifixture.Create<Guid>();
            Topic topic1 = new Topic(topicId1, "Eating");
            Topic topic2 = new Topic(topicId2, "Shopping");
            topics.Add(topic1);
            topics.Add(topic2);

            

            Question question = new Question(questionId,topics,"Restaurant", "Looking for a nice restaurant for nice food",ownerId,answers, new DateTime(2010, 3, 11),false, 10);

            //Assert

            Assert.Equal(questionId, question.Id);
            Assert.Equal(topics, question.Topics);
            Assert.Equal("Restaurant", question.Title);
            Assert.Equal("Looking for a nice restaurant for nice food", question.Description);
            Assert.Equal(ownerId,question.OwnerId);
            Assert.Equal(answers, question.Answers);
            Assert.Equal(new DateTime(2010, 3, 11), question.DateOfAdded);
            Assert.False(question.Reported);
            Assert.Equal(10, question.AmountOfLikes);

        }
       
    }
}
