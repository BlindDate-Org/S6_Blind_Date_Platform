import React, { useContext } from "react";
import { QandAContext } from "../../contexts/QandAContext";
import AnswerItem from "./AnswerItem";

const AnswerList = () => {
  const { selectedAnswers } = useContext(QandAContext);
  return (
    <>
      <h1 className="w-full text-xl font-mono pt-2">Answers</h1>
      <div className="w-full mt-2 border-2 rounded-md p-2 border-cyan-500">
        {/* Answers */}
        {selectedAnswers?.map((answer) => {
          return <AnswerItem key={answer.id} answer={answer} />;
        })}
      </div>
    </>
  );
};

export default AnswerList;
