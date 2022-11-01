import React, { useContext } from 'react'
import { QandAContext } from '../../contexts/QandAContext'
import FeedQuestionItem from './FeedQuestionItem'

// TODO fetch list of data here
const FeedQuestionsList = () => {
  const { myFeedQuestions } = useContext(QandAContext);
  return (
    <>
      <h1 className='text-3xl font-mono py-2'>Popular questions</h1>
      <div className='w-full flex flex-col'>
        {myFeedQuestions.map(question => {
          return <FeedQuestionItem
            key={question.id}
            id={question.id}
            title={question.title}
            topics={question.topics}
            answers={question.answers}
          />
        })}
      </div>
    </>

  )
}

export default FeedQuestionsList