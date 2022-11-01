using AutoFixture;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using backend.Models;

namespace BackendAnswerTests.ModelTest
{
    public class AnswerModelTest
    {

        private readonly IFixture ifixture = new Fixture();

        [Fact]
        public void ConstructorTest()
        {
            //Arrange
            var id = ifixture.Create<Guid>();
            var questionId = ifixture.Create<Guid>();

            Answer answer = new Answer(id, questionId, "In summer dont wear heavy clothes",
               new DateTime(2010, 3, 11), false);

            //Assert

            Assert.Equal(id, answer.Id);
            Assert.Equal(questionId, answer.QuestionId);
            Assert.Equal("In summer dont wear heavy clothes", answer.Content);
            Assert.Equal(new DateTime(2010, 3, 11), answer.CreatedAt);
            Assert.False(answer.Reported);







        }
    }
}
