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

            string answers = "Best clothing is heavy clothing";
            string topics = "Fashion";

            string topic1 = "Eating";
            string topic2 = "Shopping";

            

            Question question = new Question(questionId,topics,"Restaurant", "Looking for a nice restaurant for nice food",ownerId, new DateTime(2010, 3, 11),false, 10);

            //Assert

            Assert.Equal(questionId, question.Id);
            Assert.Equal("Restaurant", question.Title);
            Assert.Equal("Looking for a nice restaurant for nice food", question.Description);
            Assert.Equal(ownerId,question.OwnerId);
            Assert.Equal(new DateTime(2010, 3, 11), question.DateOfAdded);
            Assert.False(question.Reported);
            Assert.Equal(10, question.AmountOfLikes);

        }
       
    }
}
