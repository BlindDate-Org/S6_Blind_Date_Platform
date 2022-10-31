
import React, { createContext, useEffect, useState } from 'react'
import QuestionService from '../services/QuestionService'
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




  //Get Feed Question List
  const GetFeedQuestionList = async () => {
    const data = await QuestionService.GetMyFeedQuestionList();
    SetMyFeedQuestions(data);
  }



  useEffect(() => {
    GetFeedQuestionList();
  }, [])



  return <QandAContext.Provider value={{ myFeedQuestions, selectedTab, selectedQuestion, SwitchTabsTo, GetQuestionDetail }}>
    {props.children}
  </QandAContext.Provider>
}



export default QandAContextProvider;