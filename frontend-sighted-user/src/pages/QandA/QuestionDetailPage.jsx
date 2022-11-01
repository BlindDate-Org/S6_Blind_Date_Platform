import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router';
import AnswerList from '../../components/QandA/AnswerList';
import QuestionDetailItem from '../../components/QandA/QuestionDetailItem';
import { QandAContext } from '../../contexts/QandAContext';

const QuestionDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { GetQuestionDetail } = useContext(QandAContext);


  useEffect(() => {
    GetQuestionDetail(id);
  }, [id]);


  return (
    <div className='flex w-11/12 flex-col items-center'>
      {/* Subnav */}
      <div className='w-full items-start'><button className='btn' onClick={() => navigate(-1)}>Return</button></div>
      {/* Question */}
      <QuestionDetailItem />
      {/* Answer list  */}
      <AnswerList />
    </div>
  )
}

export default QuestionDetailPage

