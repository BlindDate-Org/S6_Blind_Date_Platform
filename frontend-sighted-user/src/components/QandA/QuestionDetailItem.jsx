import React, { useContext } from 'react'
import { UserCircleIcon, PencilSquareIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import { QandAContext } from '../../contexts/QandAContext'




const QuestionDetailItem = () => {
  const { selectedQuestion } = useContext(QandAContext);
  return (
    <div className='mt-2 w-full p-2 border-2 border-cyan-500 rounded-md'>
      {/* question header*/}
      <div className='flex justify-between items-stretch'>
        {/* question title */}
        <div>
          <h1 className='text-2xl font-mono'>{selectedQuestion.title}</h1>
          {
            selectedQuestion?.topics?.map((topic, _) => {
              return <span className='topicTag' key={_}>{topic}</span>
            })
          }
          <div><UserCircleIcon className='w-8 inline' />{selectedQuestion.owner_id}</div>
        </div>
        {/* menue for question */}
        <div className='w-30'>
          <div className='hidden md:inline pr-2'><PencilSquareIcon className='w-6 inline' />Answer</div>
          <div className='hidden md:inline pr-2'><ExclamationTriangleIcon className='w-6 inline' />Report</div>
        </div>
      </div>
      <div>{selectedQuestion.description}</div>
    </div>
  )
}

export default QuestionDetailItem