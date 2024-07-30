import React from "react";

const Question = ({ question, questionIndex, onAnswer }) => {
  const handleAnswerClick = (answer) => {
    onAnswer(questionIndex, answer);
  };

  return (
    <div>
      <h3> {question.question} </h3>{" "}
      {question.incorrect_answers
        .concat(question.correct_answer)
        .map((answer, index) => (
          <button key={index} onClick={() => handleAnswerClick(answer)}>
            {" "}
            {answer}{" "}
          </button>
        ))}{" "}
    </div>
  );
};

export default Question;
