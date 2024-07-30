import React from "react";

const Result = ({ answers, questions }) => {
  const correctAnswers = questions.filter(
    (q, index) => answers[index] === q.correct_answer
  ).length;

  return (
    <div>
      <h2> Quiz Results </h2> <p> Total Questions: {questions.length} </p>{" "}
      <p> Correct Answers: {correctAnswers} </p>{" "}
      <p> Incorrect Answers: {questions.length - correctAnswers} </p>{" "}
      <p> Answered: {Object.keys(answers).length} </p>{" "}
    </div>
  );
};

export default Result;
