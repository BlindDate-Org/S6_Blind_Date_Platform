import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import QuestionService from "../../services/QuestionService";
const MySwal = withReactContent(Swal);
import Creatable from "react-select/creatable";

const EditQuestion = (props) => {
  const questionId = props.questionId;
  const title = props.title;
  const topics = props.topics;
  const description = props.description;

  //Hardcoded selectable topics for the dropdown menu
  const options = [
    { value: "game", label: "Game" },
    { value: "tech", label: "Tech" },
    { value: "food", label: "Food" },
  ];

  //Set the default topics for dropdown menu
  let selectedTopics = [{ value: "game", label: "Game" }];

  const questionRef = React.useRef();
  const descriptionRef = React.useRef();
  const topicRef = React.useRef();

  function onChangeTopics(event) {
    selectedTopics = event;
    console.log("topics", selectedTopics);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    //The inputs from the post-question form
    const question = questionRef.current.value;
    // const topics = selectedTopics;
    const topics = topicRef.current.value;
    console.log("topics", topics);
    const description = descriptionRef.current.value;

    //TODO Fix Topics issue
    QuestionService.EditQuestion(questionId, question, topics, description)
      .then((result) => {
        const statusCode = result.status;
        console.log(statusCode);
        if (statusCode == 200) {
          Swal.fire("Question Editted!", "", "success");
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
          Question
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mb-5"
            ref={questionRef}
            defaultValue={title}
            required
          />
        </label>
        <label className="block text-left ">
          Topic
          {/* Later added if Topics is not a string
          <Creatable
            isMulti
            options={options}
            defaultValue={selectedTopics}
            className="shadow mb-5"
            onChange={onChangeTopics}
          /> */}
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mb-5"
            ref={topicRef}
            defaultValue={topics}
            required
          />
        </label>

        <label className="block text-left">
          Description
          <textarea
            type="text"
            className="resize-y rounded-md shadow appearance-none border w-full text-gray-700 focus:outline-none focus:shadow-outline pb-10 mb-5"
            ref={descriptionRef}
            defaultValue={description}
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

export default EditQuestion;
