import React from "react";
import "./QuizBoard.css";

function QuizBoard() {
  return (
    <div className="quiz-board">
      <header className="header">
        <h1>ArthaGyat</h1>
      </header>

      <section className="list-section">
        <h2>Quizzes</h2>
        <div className="course-list">
          <div className="course-item">
            <h3>Title 1</h3>
            <p>Medium Description</p>
          </div>
          <div className="course-item">
            <h3>Title 1</h3>
            <p>Medium Description</p>
          </div>
          <div className="course-item">
            <h3>Title 1</h3>
            <p>Medium Description</p>
          </div>
          <div className="course-item">
            <h3>Title 1</h3>
            <p>Medium Description</p>
          </div>
          <div className="course-item">
            <h3>Title 1</h3>
            <p>Medium Description</p>
          </div>
          <div className="course-item">
            <h3>Title 1</h3>
            <p>Medium Description</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuizBoard;
