import React, { useContext } from "react";
import { QandAContext } from "../../contexts/QandAContext";
import FeedQuestionItem from "./FeedQuestionItem";
import TopicFilter from "./TopicFilter";

const FeedQuestionsList = () => {
  const { myFeedQuestions } = useContext(QandAContext);
  return (
    <>
      <TopicFilter />
      <div className="w-full flex flex-col">
        {myFeedQuestions.map((question) => {
          return (
            <FeedQuestionItem
              key={question.id}
              id={question.id}
              title={question.title}
              topics={question.topics}
            // answers={question.answers}
            />
          );
        })}
      </div>
    </>
  );
};

export default FeedQuestionsList;
