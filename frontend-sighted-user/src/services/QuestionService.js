import BaseHttpService from "./BaseHttpService";
export class QuestionService extends BaseHttpService {
  async GetMyFeedQuestionList() {
    const questions = this.get("api/Question/");
    return questions;
  }
  async GetQuestion(questionId) {
    const myFeedQuestion = this.get("api/Question/" + questionId);
    return myFeedQuestion;
  }
  
  async PostQuestion(question, topic, description) {
    const myFeedQuestion = this.post("api/Question/", {"title": question, "topic": topic,"description": description});
    return myFeedQuestion;
  }
}

export default new QuestionService("QuestionService");
