using AutoFixture;
using backend.Controllers;
using backend.Interfaces;
using backend.Models;
using FluentAssertions;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace BackendAnswerTests.IntergartionTests
{
    public class AnswerControllerTests
    {
        //Declare the vars that i need for tests
        private readonly IFixture ifixture;
        private readonly Mock<IAnswerService> answerserviceMock;//the service Mock..mocking the service
        private readonly AnswerController systemUnderTest;

        //Constructor
        public AnswerControllerTests()
        {
            ifixture = new Fixture();
            answerserviceMock = ifixture.Freeze<Mock<IAnswerService>>();
            systemUnderTest = new AnswerController(answerserviceMock.Object);
        }

        //Test 1 Get ANswerBy Id

        //test 2 getby id

        [Fact]
        public async Task GetAnswerById_ThrowsNotFound_WhenAnswerFound()
        {
            //Scenarios

            //Arrange
            var questionsDataMock = ifixture.Create<Answer>();//creating a answer by ifixture
            var id = ifixture.Create<Guid>();

            //Act
            var result = await systemUnderTest.Get(id).ConfigureAwait(false);

            //Assert
            //Assert.NotNull(result);
            result.Should().NotBeNull();
            answerserviceMock.Verify(x => x.GetAnswerById(id), Times.Once());
        



        }
        [Fact]
        public async Task GetAnswersTest()
        {
            //Scenarios

            //Arrange
            var questionsDataMock = ifixture.Create<Answer>();//creating a answer by ifixture
            var id = ifixture.Create<Guid>();
            var questionId = ifixture.Create<Guid>();
            var ownerId = ifixture.Create<Guid>();

            //Answer answer = new Answer(id, questionId, "In summer dont wear heavy clothes", ownerId, false,
            //   new DateTime(2010, 3, 11), 10);


            //Act
            var result = await systemUnderTest.Get().ConfigureAwait(false);

            //Assert
           
            result.Should().NotBeNull();
            answerserviceMock.Verify(x => x.GetAllAnswers(), Times.Once());
           



        }

        [Fact]
        public async Task CreateAnswerTest()
        {
            //Scenarios

            //Arrange
            var questionsDataMock = ifixture.Create<Answer>();//creating a answer by ifixture
            var id = ifixture.Create<Guid>();
            var questionId = ifixture.Create<Guid>();
            var ownerId = ifixture.Create<Guid>();

            Answer answer = new Answer(id, questionId, "In summer dont wear heavy clothes", ownerId, false,
               new DateTime(2010, 3, 11), 10);


            //Act
            var result = await systemUnderTest.Add(answer).ConfigureAwait(false);

            //Assert
            //Assert.NotNull(result);
            result.Should().NotBeNull();
            answerserviceMock.Verify(x => x.AddAnswer(answer), Times.Once());




        }
        [Fact]
        public async Task DeleteAnswerTest()
        {
            //Scenarios

            //Arrange
            var questionsDataMock = ifixture.Create<Answer>();//creating a answer by ifixture
            var id = ifixture.Create<Guid>();
            var questionId = ifixture.Create<Guid>();
            var ownerId = ifixture.Create<Guid>();

            Answer answer = new Answer(id, questionId, "In summer dont wear heavy clothes", ownerId, false,
               new DateTime(2010, 3, 11), 10);


            //Act
            var result = await systemUnderTest.Delete(id).ConfigureAwait(false);

            //Assert
            //Assert.NotNull(result);
            result.Should().NotBeNull();
            answerserviceMock.Verify(x => x.DeleteAnswer(id), Times.Once());




        }
        [Fact]
        public async Task UpdateAnswersTest()
        {
            //Scenarios

            //Arrange
            var questionsDataMock = ifixture.Create<Answer>();//creating a answer by ifixture
            var id = ifixture.Create<Guid>();
            var questionId = ifixture.Create<Guid>();
            var ownerId = ifixture.Create<Guid>();

            Answer answer = new Answer(id, questionId, "In summer dont wear heavy clothes", ownerId, false,
               new DateTime(2010, 3, 11), 10);

         

            //Act
            var result = await systemUnderTest.UpdateHero(answer);

            //Assert

            //Assert
            //Assert.NotNull(result);
            result.Should().NotBeNull();
            answerserviceMock.Verify(x => x.UpdateAnswer(answer));
           




        }

    }
}
