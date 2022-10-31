import BaseHttpService from './BaseHttpService';


const FakeData = [
  
];

class AnswerServices extends BaseHttpService {

  async FindAnswersByQuestionId(questionId){
    //TODO: Fetch Data from backend
    return FakeData;
  }
}





export default new AnswerServices('AnswerService')