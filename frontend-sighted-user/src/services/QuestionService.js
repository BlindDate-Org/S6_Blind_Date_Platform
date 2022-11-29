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
  
  async PostQuestion(question, topics, description) {
    const myFeedQuestion = this.post("api/Question/", {"title": question, "topics": topics,"description": description});
    return myFeedQuestion;
  }

  async EditQuestion(questionId, question, topics, description) {
    const myFeedQuestion = this.put("api/Question/", {"id": questionId, "title": question, "topics": topics,"description": description});
    return myFeedQuestion;
  }

  async DeleteQuestion(questionId) {
    const response = this.delete("api/Question/" + questionId);
    return response;
  }
}

export default new QuestionService("QuestionService");
