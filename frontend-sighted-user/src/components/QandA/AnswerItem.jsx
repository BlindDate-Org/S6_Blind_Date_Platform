import React from 'react'
import { UserCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'

const AnswerItem = ({ answer }) => {
  return (
    <div className='border-b-2 border-cyan-500'>
      {/* question header*/}
      <div className='flex justify-between items-stretch'>
        {/* question title */}
        <div className='w-11/12'>
          <div><UserCircleIcon className='w-8 inline' />{answer.username}</div>
          <h1 className='w-full break-words font-mono'>{answer.description}</h1>
        </div>
        {/* menue for question */}
        <div className='w-1/6 flex justify-end pr-2'>
          <div className='hidden md:inline '><ExclamationTriangleIcon className='w-6 inline' />Report</div>
        </div>
      </div>
    </div>
  )
}

export default AnswerItem