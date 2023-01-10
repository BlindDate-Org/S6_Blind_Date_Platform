import React, { useState } from 'react';
import Swal from "sweetalert2";
import { topics } from '../../contexts/QandAContext'

import TopicCombox from './TopicCombox';

const PostQuestion = ({ onPost }) => {

  const [selectedTopic, setSelectedTopic] = useState(topics[0])

  const questionRef = React.useRef();
  const descriptionRef = React.useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const question = questionRef.current.value;
    const topic = selectedTopic.name;
    const description = descriptionRef.current.value;
    onPost(question, topic, description);
    Swal.fire('Question posted!', '', 'success')
  };




  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="block text-left">
          Question
          <input

            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mb-5"
            ref={questionRef}
            required
          />
        </label>
        <label className="block text-left mb-1">
          Topic
          <TopicCombox selected={selectedTopic} setSelected={setSelectedTopic} />
        </label>
        <label className="block text-left">
          Description
          <textarea
            type="text"
            className="resize-y rounded-md shadow appearance-none border w-full text-gray-700 focus:outline-none focus:shadow-outline pb-10 mb-5"
            ref={descriptionRef}
          />
        </label>
        <input
          className="btn"
          type="submit"
          value="Submit"
        />
      </form>
    </>
  );
};

export default PostQuestion;

