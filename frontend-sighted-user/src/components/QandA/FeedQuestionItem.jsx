import React from 'react'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'


const FeedQuestionItem = ({ id, title, topics = [], answers }) => {
  return (
    <Link to={`/question/${id}`}>
      <div
        className='w-full border-solid border-2 p-3 border-cyan-500 mb-2 rounded-md hover:shadow-lg'
      >
        {/* Question title */}
        <h1 className='text-2xl'>{title}</h1>
        {/* List of topic tags */}
        <div>
          {topics.map((topic, _) => {
            return <div key={_} className='topicTag'>{topic}</div>
          })}
        </div>
        {answers.map(answer => {
          return <div key={answer.id}>
            {/* User information */}
            <div className='p-2 flex items-center'><UserCircleIcon className='w-8' />{answer.username}</div>
            {/* Answer list */}
            <div className='px-2'>{answer.description}</div>
          </div>
        })}

      </div>
    </Link>
  )
}

export default FeedQuestionItem