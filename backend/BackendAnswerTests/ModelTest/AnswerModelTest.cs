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
            var ownerId = ifixture.Create<Guid>();

            Answer answer = new Answer(id, questionId, "In summer dont wear heavy clothes",ownerId,false,
               new DateTime(2010, 3, 11), 10);

            //Assert

            Assert.Equal(id, answer.Id);
            Assert.Equal(questionId, answer.Question_Id);
            Assert.Equal("In summer dont wear heavy clothes",answer.Description);
            Assert.Equal(ownerId, answer.Owner_Id);
            Assert.Equal(new DateTime(2010, 3, 11), answer.DateOfAdded);
            Assert.False(answer.Reported);
            Assert.Equal(10,answer.AmountOfLikes);







        }
    }
}
