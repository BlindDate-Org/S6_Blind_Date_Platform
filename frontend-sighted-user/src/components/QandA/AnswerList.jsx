import React, { useContext } from 'react'
import { QandAContext } from '../../contexts/QandAContext'
import AnswerItem from './AnswerItem'

const AnswerList = () => {
  const { selectedQuestion } = useContext(QandAContext);
  return (
    <>
      <h1 className='w-full text-xl font-mono pt-2'>Answers</h1>
      <div className='w-full mt-2 border-2 rounded-md p-2 border-cyan-500'>
        {/* Answers */}
        {/* {selectedQuestion?.answers?.map((answer => {
          return <AnswerItem answer={answer} key={answer.id} />
        }))} */}
        {
          selectedQuestion?.answers?.map(answer => {
            return <AnswerItem key={answer.id} answer={answer} />
          })
        }
      </div>

    </>

  )
}

export default AnswerList