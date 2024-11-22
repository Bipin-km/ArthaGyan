import React, { useState, useEffect } from "react";
import "./QuizPlatform.css";
import { quizData } from "./questions";

function QuizPlatform({ quizId, onBack }) {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("/questions.json")
      .then((response) => response.json())
      .then((data) => {
        const quizQuestions = data.find((quiz) => quiz.id === quizId)?.questions || [];
        setQuestions(quizQuestions);
      });
  }, [quizId]);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    setUserAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <div className="quiz-platform">
      <h2>Quiz {quizId + 1}</h2>
      {submitted ? (
        <div className="result-container">
          <h3>Your Score: {score}/{questions.length}</h3>
          <div className="correct-answers">
            <h4>Correct Answers:</h4>
            {questions.map((question, index) => (
              <div key={index} className="question-result">
                <p>{index + 1}. {question.question}</p>
                <p>Correct Answer: {question.options[question.answer]}</p>
                <p>
                  Your Answer:{" "}
                  {userAnswers[index] !== undefined
                    ? question.options[userAnswers[index]]
                    : "Not Answered"}
                </p>
              </div>
            ))}
          </div>
          <button onClick={onBack} className="back-button">Back to Quizzes</button>
        </div>
      ) : (
        <div className="quiz-container">
          {questions.map((question, index) => (
            <div key={index} className="question-card">
              <p>
                {index + 1}. {question.question}
              </p>
              <div className="options">
                {question.options.map((option, optionIndex) => (
                  <label key={optionIndex} className="option">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      checked={userAnswers[index] === optionIndex}
                      onChange={() => handleAnswerChange(index, optionIndex)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button onClick={handleSubmit} className="submit-button">
            Submit Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizPlatform;
