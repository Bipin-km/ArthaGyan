import React, { useState, useEffect } from "react";
import questionsData from "./questions.json";
import "./Quiz.css";

const QuizForm = ({ id }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // Fetch questions for the selected topic
  useEffect(() => {
    const topicQuestions = questionsData.find((topic) => topic.id === id)?.questions || [];
    setQuestions(topicQuestions);
  }, [id]);

  const handleOptionChange = (event) => {
    setSelectedOption(parseInt(event.target.value));
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="quiz-container">
      {!finished ? (
        questions.length > 0 ? (
          <div className="question-container">
            <h2>{questions[currentQuestionIndex].question}</h2>
            <div className="options-container">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`option${index}`}
                    name="answer"
                    value={index}
                    checked={selectedOption === index}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor={`option${index}`}>{option}</label>
                </div>
              ))}
            </div>
            <button onClick={handleNextQuestion}>Next Question</button>
          </div>
        ) : (
          <p>No questions available for this topic.</p>
        )
      ) : (
        <div className="result-container">
          <h2>Quiz Completed!</h2>
          <p>Your score: {score} out of {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default QuizForm;
