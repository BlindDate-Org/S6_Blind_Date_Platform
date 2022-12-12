import React, { useContext } from 'react'
import { UserCircleIcon, PencilSquareIcon, ExclamationTriangleIcon, TrashIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid'
import { QandAContext } from '../../contexts/QandAContext'
import Swal from "sweetalert2";
import QuestionService from '../../services/QuestionService'
import EditQuestion from './EditQuestion';
import PostAnswer from './PostAnswer';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const QuestionDetailItem = () => {
  const { selectedQuestion } = useContext(QandAContext);
  return (
    <div className='mt-2 w-full p-2 border-2 border-cyan-500 rounded-md'>
      {/* question header*/}
      <div className='flex justify-between items-stretch'>
        {/* question title */}
        <div>
          <h1 className='text-2xl font-mono'>{selectedQuestion.title}</h1>
          {/* NOT usable if topics is a string{
            selectedQuestion?.topics?.map((topic, _) => {
              return <span className='topicTag' key={_}>{topic}</span>
            })
          } */}<span className='topicTag' >{selectedQuestion?.topics}</span>
          <div><UserCircleIcon className='w-8 inline' />{selectedQuestion.owner_id}</div>
        </div>
        {/* menue for question */}
        <div className='w-30'>
        <button onClick={ () => postAnswer(selectedQuestion.id)} className='hidden md:inline pr-2'><ChatBubbleBottomCenterTextIcon className='w-6 inline' />Answer</button>
          <div className='hidden md:inline pr-2'><ExclamationTriangleIcon className='w-6 inline' />Report</div>
          <button onClick={() => editQuestion(selectedQuestion.id, selectedQuestion.title, selectedQuestion.topics, selectedQuestion.description)} className='hidden md:inline pr-2 text-orange-500 cursor-pointer'><PencilSquareIcon className='w-6 inline fill-orange-500' />Edit</button>
          <button onClick={ () => deleteQuestion(selectedQuestion.id)} className='hidden md:inline pr-2 text-red-500'><TrashIcon className='w-6 inline fill-red-500' />Delete</button>
          
        </div>
      </div>
      <div>{selectedQuestion.description}</div>
    </div>
  )
}

function deleteQuestion(questionId) {
  Swal.fire({
    title: "Do you want to delete the Question?",
    showDenyButton: true,
    showCancelButton: true,
    showConfirmButton: false,
    denyButtonText: `Delete`,
  }).then((result) => {
    if (result.isDenied) {
      //let statusCode;
      QuestionService.DeleteQuestion(questionId)
        .then((result) => {
          const statusCode = result.status;
          console.log(statusCode);
          if (statusCode == 200) {
            Swal.fire("Question Deleted!", "", "success");
          }
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    }
  });
}

function editQuestion(questionId, title, topics, description) {
  MySwal.fire({
    title: <p>Edit the Question</p>,
    html: (
      <EditQuestion
        questionId={questionId}
        title={title}
        topics={topics}
        description={description}
      />
    ),
    showCloseButton: true,
    showConfirmButton: false,
  });
}

function postAnswer(questionId) {
  MySwal.fire({
    title: <p>Post an answer</p>,
    html: (
      <PostAnswer
        questionId={questionId}
        
      />
    ),
    showCloseButton: true,
    showConfirmButton: false,
  });
}

export default QuestionDetailItem