import BaseHttpService from './BaseHttpService';
class AnswerServices extends BaseHttpService {

  // other BASE_URL of the API
  BASE_URL = 'https://localhost:7141';

  async GetAnswerList() {
    const answerList = this.get("api/Answer/");
    return answerList;
  }
  async GetAnswersByQuestionId(questionId) {
    const answers = await this.get("api/Answer/");
    let selectedAnswers = answers.filter(item => item.question_Id === questionId) || null;
    return selectedAnswers;
  }
  
  async PostAnswer(questionId, answer) {    
    const postedAnswer = this.post("api/Answer/", {"question_Id": questionId, "description": answer});
    return postedAnswer;
  }
}

export default new AnswerServices('AnswerService')