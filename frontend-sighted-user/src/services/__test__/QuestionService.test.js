import QuestionService from '../QuestionService'

describe('----- Question Service ------', async () => {
  
  test('Question Service Loaded correctly',async ()=>{
    expect(QuestionService).toBeTruthy();
  })

  test('Load My Feed Question',async ()=>{
   const myFeedQuestions = await QuestionService.GetMyFeedQuestionList();
    expect(Array.isArray(myFeedQuestions)).toEqual(true)
  })

  test('Get Question by send none exist id',async ()=>{
   const questionId =  'e3e098b5-6691-40b8-b1ff-ef5742e10e72';
   const res = await QuestionService.GetQuestion(questionId);
  expect(res).toEqual("Question not found");
  })

  test('Get Question by sending a error formate id',async()=>{
    const questionId =  'FakeQuestionList[0].id;$asjdhsjfi1E!Fvm'
    const res = await QuestionService.GetQuestion(questionId);
    expect(res).toEqual('Question not found')
  })


})

//Check this link to see more object validation for you service intergation test
//https://medium.com/@andrei.pfeiffer/jest-matching-objects-in-array-50fe2f4d6b98

//https://stackoverflow.com/questions/42677387/jest-returns-network-error-when-doing-an-authenticated-request-with-axios
//https://stackoverflow.com/questions/50634550/how-do-i-manually-trust-a-self-signed-certificate-embedded-in-my-application