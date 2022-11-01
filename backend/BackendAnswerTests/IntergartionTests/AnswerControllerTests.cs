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
        public async Task GetAllAnswersTest()
        {
            answerserviceMock.Verify(x => x.GetAllAnswers(), Times.Once());
        }

    }
}
