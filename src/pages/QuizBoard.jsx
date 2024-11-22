import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizBoard.css";
import { quizData } from "../quizes/questions";

function QuizBoard() {
  const navigate = useNavigate();

  const handleQuizSelect = (id) => {
    navigate(`/quizboard/${id}`);
  };

  return (
    <div className="quiz-board">
      <h1>Quiz Topics</h1>
      <div className="quiz-grid">
        {quizData.map((quiz) => (
          <div
            key={quiz.id}
            className="course-item"
            onClick={() => handleQuizSelect(quiz.id)}
          >
            <h2 className="title">{quiz.topic}</h2>
            <p>Quiz {quiz.id + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizBoard;
