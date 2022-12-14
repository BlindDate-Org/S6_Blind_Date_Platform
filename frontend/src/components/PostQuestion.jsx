import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const PostQuestion = () => {
  const questionRef = React.useRef();
  const topicRef = React.useRef();
  const descriptionRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire('Question posted!', '', 'success')

    //The inputs from the post-question form
    const question = questionRef.current.value;
    const topic = topicRef.current.value;
    const description = descriptionRef.current.value;

    //TODO: POST to backend
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
        <label className="block text-left">
          Topic
          <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mb-5" ref={topicRef} required />
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
          className="swal2-confirm swal2-styled"
          type="submit"
          value="Submit"
        />
      </form>
    </>
  );
};

export default PostQuestion;
