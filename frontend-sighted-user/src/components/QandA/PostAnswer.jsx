import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import AnswerService from "../../services/AnswerService";
const MySwal = withReactContent(Swal);

const PostAnswer = (props) => {
  const questionId = props.questionId;

  const answerRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    //The inputs from the post-answer form
    const answer = answerRef.current.value;

    AnswerService.PostAnswer(questionId, answer.toString())
      .then((result) => {
        const statusCode = result.status;
        if (statusCode == 200) {
          Swal.fire("Answer Posted!", "", "success");
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="block text-left">
          Answer
          <textarea
            type="text"
            className="resize-y rounded-md shadow appearance-none border w-full text-gray-700 focus:outline-none focus:shadow-outline pb-10 mb-5"
            ref={answerRef}
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

export default PostAnswer;
