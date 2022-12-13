
import React, { createContext, useEffect, useState } from 'react'
import QuestionService from '../services/QuestionService'
import AnswerService from '../services/AnswerService'
export const QandAContext = createContext()


export const Tabs = [
  'My Feed',
  'My Question',
  'Book Mark'
]


const QandAContextProvider = (props) => {
  const [selectedTab, SetSelectedTab] = useState(Tabs[0]);
  const [myFeedQuestions, SetMyFeedQuestions] = useState([]);
  const [selectedQuestion, SetSelectedQuestion] = useState({});
  const [myFeedAnswers, SetMyFeedAnswers] = useState([]);
  const [selectedAnswers, SetSelectedAnswers] = useState([]);


  //Switch Content Filter
  const SwitchTabsTo = (tabName) => {
    switch (tabName) {
      case Tabs[0]: SetSelectedTab(Tabs[0]); break;
      case Tabs[1]: SetSelectedTab(Tabs[1]); break;
      case Tabs[2]: SetSelectedTab(Tabs[2]); break;
      default: SetSelectedTab(Tabs[0]);
    }
  }

  //Get question detail 
  const GetQuestionDetail = async (questionId) => {
    const question = await QuestionService.GetQuestion(questionId);
    SetSelectedQuestion(question)
    return question;
  }

  const GetAnswersDetail = async (questionId) => {
    const answers = await AnswerService.GetAnswersByQuestionId(questionId);
    SetSelectedAnswers(answers)
    return answers;
  }

  const PostQuestion = async (question, topic, description) => {
    console.log("PostQuestion", question);
    let response = await QuestionService.PostQuestion(question, topic, description);
    console.log("response.data", response.data);
    //SetSelectedQuestion(response);
    
    SetMyFeedQuestions([]);
  
    //return response.data;
  }

  //Get Feed Question List
  const GetFeedQuestionList = async () => {
    let questions = await QuestionService.GetMyFeedQuestionList();
    console.log("GetFeedQuestionList", questions);
    SetMyFeedQuestions(questions);
  }

  const GetFeedAnswerList = async () => {
    let answers = await AnswerService.GetAnswerList();
    SetMyFeedAnswers(answers);
  }


  useEffect(() => {
    GetFeedQuestionList();
    GetFeedAnswerList();
  }, [])



  return <QandAContext.Provider value={{ myFeedQuestions, selectedTab, selectedQuestion, myFeedAnswers, selectedAnswers, SwitchTabsTo, GetQuestionDetail, GetAnswersDetail, PostQuestion }}>
    {props.children}
  </QandAContext.Provider>
}



export default QandAContextProvider;