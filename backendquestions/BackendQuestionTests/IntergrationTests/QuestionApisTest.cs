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
            //Arrange
            var questionId = ifixture.Create<Guid>();
            var ownerId = ifixture.Create<Guid>();
            var answerid = ifixture.Create<Guid>();

            var answerid2 = ifixture.Create<Guid>();
            // var question_Id = ifixture.Create<Guid>();
            var ownerId2 = ifixture.Create<Guid>();

            string topics = "Fashion";

            var topicId1 = ifixture.Create<Guid>();
            var topicId2 = ifixture.Create<Guid>();
            string topic1 = "Eating";
            string topic2 = "Shopping";


            Question question = new Question(questionId, topics, "Restaurant", "Looking for a nice restaurant for nice food", ownerId, new DateTime(2010, 3, 11), false, 10);

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
            //Arrange
            var questionId = ifixture.Create<Guid>();
            var ownerId = ifixture.Create<Guid>();
            var answerid = ifixture.Create<Guid>();

            var answerid2 = ifixture.Create<Guid>();
            var ownerId2 = ifixture.Create<Guid>();

            string topics = "Fashion";
            string topic1 = "Eating";
            string topic2 = "Shopping";

            Question question = new Question(questionId, topics, "Restaurant", "Looking for a nice restaurant for nice food", ownerId, new DateTime(2010, 3, 11), false, 10);

            //Act
            var result = await systemUnderTest.UpdateQuestion(question);

            //Assert
            result.Should().NotBeNull();
            questionserviceMock.Verify(x => x.UpdateQuestion(question));

        }
        //UNSUCCESSFUL SCENARIOS

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
            Assert.Null(questionNotFound);
            questionserviceMock.Verify(x => x.GetQuestionById(id), Times.Once());

        }

    }
}
