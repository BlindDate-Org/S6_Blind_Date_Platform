import QuestionService, {FakeQuestionList}from '../QuestionService'


describe('----- Question Service ------', () => {
  
  test('Question Service Loaded correctly',async ()=>{
    expect(QuestionService).toBeTruthy();
  })

  test('Load My Feed Question',async ()=>{
    const myFeedQuestions = await QuestionService.GetMyFeedQuestionList();
    expect(Array.isArray(myFeedQuestions)).toEqual(true)
  })

  test('Get Question by id',async ()=>{
    const questionId =  FakeQuestionList[0].id;
    const question = await QuestionService.GetQuestion(questionId);
    expect(question.id).toEqual(questionId)
  })
})

