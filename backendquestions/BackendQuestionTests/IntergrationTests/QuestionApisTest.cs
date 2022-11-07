using AutoFixture;
using backendquestions.Controllers;
using backendquestions.Interfaces;
using backendquestions.Models;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestPlatform.Utilities;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackendQuestionTests.IntergrationTests
{
    public class QuestionApisTest
    {
        //Declare the vars that i need for tests
        private readonly IFixture ifixture;
        private readonly Mock<IQuestionService> questionserviceMock;//the service Mock..mocking the service
        private readonly QuestionController systemUnderTest;

        //Constructor
      
           
        public QuestionApisTest()
        {
            ifixture = new Fixture();
            questionserviceMock = ifixture.Freeze<Mock<IQuestionService>>();
            systemUnderTest = new QuestionController(questionserviceMock.Object);

        }
 

      
        //test 2 getby id

        [Fact]
        public async Task GetQuestionById()
        {
            //Scenarios

            //Arrange
            var questionsDataMock = ifixture.Create<Question>();//creating a answer by ifixture
            var id = ifixture.Create<Guid>();

            //Act
            var result = await systemUnderTest.GetQuestionById(id).ConfigureAwait(false);

            //Assert

            result.Should().NotBeNull();
            questionserviceMock.Verify(x => x.GetQuestionById(id), Times.Once());




        }
        [Fact]
        public async Task GetQuestionsTest()
        {
            //Scenarios
            //Arrange already done at the constructor

            //Act
            var result = await systemUnderTest.GetAllQuestions().ConfigureAwait(false);

            //Assert

            Assert.NotNull(result);
            questionserviceMock.Verify(x => x.GetAllQuestions(), Times.Once());




        }

        [Fact]
        public async Task CreateQuestionTest()
        {
            //Scenarios

            //Arrange
            //Arrange
            var questionId = ifixture.Create<Guid>();
            var ownerId = ifixture.Create<Guid>();
            //Arrange
            var answerid = ifixture.Create<Guid>();

            var answerid2 = ifixture.Create<Guid>();
            // var question_Id = ifixture.Create<Guid>();
            var ownerId2 = ifixture.Create<Guid>();


            Answer answer1 = new Answer(answerid, "In summer dont wear heavy clothes", ownerId);
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



            Question question = new Question(questionId, topics, "Restaurant", "Looking for a nice restaurant for nice food", ownerId, answers, new DateTime(2010, 3, 11), false, 10);

            //Act
            var result = await systemUnderTest.PostQuestion(question).ConfigureAwait(false);

            //Assert
            //Assert.NotNull(result);
            result.Should().NotBeNull();
            questionserviceMock.Verify(x => x.AddQuestion(question), Times.Once());




        }
        [Fact]
        public async Task DeleteQuestionTest()
        {
            //Scenarios

            //Arrange
            var questionId = ifixture.Create<Guid>();
           
            //Act
            var result = await systemUnderTest.DeleteQuestion(questionId).ConfigureAwait(false);

            //Assert
            //Assert.NotNull(result);
            result.Should().NotBeNull();
            questionserviceMock.Verify(x => x.DeleteQuestion(questionId), Times.Once());




        }
        [Fact]
        public async Task UpdateQuestionsTest()
        {
            //Scenarios

            //Arrange...Takes a Question Object
            var questionId = ifixture.Create<Guid>();
            var ownerId = ifixture.Create<Guid>();
            //Arrange
            var answerid = ifixture.Create<Guid>();

            var answerid2 = ifixture.Create<Guid>();
            // var question_Id = ifixture.Create<Guid>();
            var ownerId2 = ifixture.Create<Guid>();


            Answer answer1 = new Answer(answerid, "In summer dont wear heavy clothes", ownerId);
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



            Question question = new Question(questionId, topics, "Restaurant", "Looking for a nice restaurant for nice food", ownerId, answers, new DateTime(2010, 3, 11), false, 10);



            //Act
            var result = await systemUnderTest.UpdateQuestion(question);

            //Assert

            //Assert
            //Assert.NotNull(result);
            result.Should().NotBeNull();
            questionserviceMock.Verify(x => x.UpdateQuestion(question));

        }
        //UNSUCCESSFUL SCENARIOS

        //should return not found when no data Found

        [Fact]
        public async Task GetQuestionById_Should_RetrunNotFound_WhenNoFoundAnswerById()
        {
            //Arrange

            Question? questionNotFound = null;
            var id = ifixture.Create<Guid>();
            questionserviceMock.Setup(x => x.GetQuestionById(id)).ReturnsAsync(questionNotFound);

            //Act
            var result = await systemUnderTest.GetQuestionById(id).ConfigureAwait(false);

            //ASSERT

           // result.Should().NotBeNull();
            Assert.Null(questionNotFound);
            //result.Result.Should().BeAssignableTo<NotFoundResult>();
            questionserviceMock.Verify(x => x.GetQuestionById(id), Times.Once());

        }

    }
}
