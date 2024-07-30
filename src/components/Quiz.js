import React, { useState, useEffect } from "react";
import { fetchQuestions } from "../api";
import Question from "./Question";
import Timer from "./Timer";
import Result from "./Result";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem("quizState");
    if (savedState) {
      const { savedQuestions, savedCurrentQuestionIndex, savedAnswers } =
        JSON.parse(savedState);
      setQuestions(savedQuestions);
      setCurrentQuestionIndex(savedCurrentQuestionIndex);
      setAnswers(savedAnswers);
    } else {
      const loadQuestions = async () => {
        const questions = await fetchQuestions();
        setQuestions(questions);
      };
      loadQuestions();
    }
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      localStorage.setItem(
        "quizState",
        JSON.stringify({
          savedQuestions: questions,
          savedCurrentQuestionIndex: currentQuestionIndex,
          savedAnswers: answers,
        })
      );
    }
  }, [questions, currentQuestionIndex, answers]);

  const handleAnswer = (questionIndex, answer) => {
    setAnswers({
      ...answers,
      [questionIndex]: answer,
    });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (timeUp || currentQuestionIndex >= questions.length) {
    return <Result answers={answers} questions={questions} />;
  }

  return (
    <div>
      <Timer onTimeUp={() => setTimeUp(true)} />{" "}
      {questions.length > 0 && (
        <Question
          question={questions[currentQuestionIndex]}
          questionIndex={currentQuestionIndex}
          onAnswer={handleAnswer}
        />
      )}{" "}
    </div>
  );
};

export default Quiz;
