
import React, { createContext, useEffect, useState } from 'react'
import QuestionService from '../services/QuestionService'
import AnswerService from '../services/AnswerService'
export const QandAContext = createContext()


export const Tabs = [
  'My Feed',
  'My Question',
  'Book Mark'
]

export const topics = [
  { id: 1, name: 'Education' },
  { id: 2, name: 'Entertainment' },
  { id: 3, name: 'Sport' },
  { id: 4, name: 'Audio Book' },
  { id: 5, name: 'Music' },
  { id: 6, name: 'Food' },
  { id: 7, name: 'Sushi' },
  { id: 8, name: 'Technology' },
  { id: 9, name: 'Fashion' },
  { id: 10, name: 'Travel' },
  { id: 11, name: 'Health' },
  { id: 12, name: 'Beauty' },
  { id: 13, name: 'Business' },
  { id: 14, name: 'Self Improvement' },
  { id: 15, name: 'Nature' },
  { id: 16, name: 'Outdoor Adventure' },
  { id: 17, name: 'Art' },
  { id: 18, name: 'Photography' },
  { id: 19, name: 'Cooking' },
  { id: 20, name: 'Fitness' },
  { id: 21, name: 'Gardening' },
  { id: 22, name: 'Pets' }
]

const QandAContextProvider = (props) => {
  const [selectedTab, SetSelectedTab] = useState(Tabs[0]);
  const [myFeedQuestions, SetMyFeedQuestions] = useState([]);
  const [selectedQuestion, SetSelectedQuestion] = useState({});
  const [myFeedAnswers, SetMyFeedAnswers] = useState([]);
  const [selectedAnswers, SetSelectedAnswers] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState(topics);

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
    let response = await QuestionService.PostQuestion(question, topic, description);
    SetMyFeedQuestions(response.data);
  }


  const DeleteQuestion = async (questionId) => {
    let response = await QuestionService.DeleteQuestion(questionId);
    if (response.status === 200) {
      SetMyFeedQuestions([...myFeedQuestions.filter(questionId => questionId !== questionId), questionId]);
    }
  }


  //Get Feed Question List
  const GetFeedQuestionList = async () => {
    let questions = await QuestionService.GetMyFeedQuestionList();
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

  useEffect(() => {
    console.log(selectedTopics)
    //Call Api to topics
  }, [selectedTopics])



  return <QandAContext.Provider value={{ myFeedQuestions, selectedTab, selectedQuestion, myFeedAnswers, selectedAnswers, selectedTopics, setSelectedTopics, SwitchTabsTo, GetQuestionDetail, GetAnswersDetail, PostQuestion }}>
    {props.children}
  </QandAContext.Provider>
}



export default QandAContextProvider;