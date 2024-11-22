import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quizData } from "./questions";
import "./Quiz_platform.css";

function QuizPlatform() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Convert `id` from the route to an integer and find the corresponding quiz
    const quizId = parseInt(id.replace("quiz", ""), 10); // Ensure proper parsing
    const quiz = quizData.find((q) => q.id === quizId);
    if (quiz) {
      setCurrentQuiz(quiz);
      setUserAnswers(new Array(quiz.questions.length).fill(null)); // Initialize answers array
    }
  }, [id]);

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    if (showResults) return;

    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = optionIndex;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    if (!currentQuiz) return;

    const calculatedScore = userAnswers.reduce((acc, answer, index) => {
      return acc + (answer === currentQuiz.questions[index].answer ? 1 : 0);
    }, 0);

    setScore(calculatedScore);
    setShowResults(true);
  };

  if (!currentQuiz) return <div>Loading quiz...</div>;

  return (
    <div className="quiz-platform">
      <h1>{currentQuiz.topic}</h1>
      {!showResults ? (
        <div className="questions-container">
          {currentQuiz.questions.map((question, index) => (
            <div key={index} className="question-card">
              <h3>{question.question}</h3>
              <div className="options">
                {question.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    className={`option ${
                      userAnswers[index] === optionIndex ? "selected" : ""
                    }`}
                    onClick={() => handleAnswerSelect(index, optionIndex)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button className="submit-btn" onClick={handleSubmit}>
            Submit Quiz
          </button>
        </div>
      ) : (
        <div className="results-container">
          <h2>Your Score: {score} / {currentQuiz.questions.length}</h2>
          <button className="back-btn" onClick={() => navigate("/QuizBoard")}>
            Back to Quiz Board
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizPlatform;
