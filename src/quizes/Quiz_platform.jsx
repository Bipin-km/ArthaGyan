import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Quiz_platform.css";

const QuizPlatform = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const quizId = parseInt(id.replace("quiz", ""), 10); // Ensure proper parsing
    fetchQuizQuestions(quizId);
  }, [id]);

  const fetchQuizQuestions = async (quizId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/getQuizQuestions/${quizId}`);
      if (response.status === 200) {
        console.log("Quiz questions fetched successfully:", response.data);

        // Transform the data into the structure required by the component
        const quiz = {
          topic: `Quiz ${quizId + 1}`, // Assign a topic name dynamically
          questions: response.data.map((item) => {
            const options = [
              item.options.option_a,
              item.options.option_b,
              item.options.option_c,
              item.options.option_d,
            ];
            const correctAnswerIndex = 0; // Assuming option_a is always correct
            const shuffledData = shuffleWithCorrectAnswer(options, correctAnswerIndex);
            console.log("Shuffled Options:", shuffledData.shuffledOptions);
            return {
              question_id: item.question_id,
              question: item.question,
              options: shuffledData.shuffledOptions,
              correctAnswerIndex: shuffledData.correctAnswerIndex, // Use the correct index here
            };
          }),
        };

        setCurrentQuiz(quiz);
        setUserAnswers(new Array(quiz.questions.length).fill(null)); // Initialize answers array
      }
    } catch (error) {
      console.error("Error fetching quiz questions:", error.message);
    }
  };

  // Utility function to shuffle options and track the correct answer index
  const shuffleWithCorrectAnswer = (options, correctAnswerIndex) => {
    const indexedOptions = options.map((option, index) => ({
      option,
      originalIndex: index,
    }));

    for (let i = indexedOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indexedOptions[i], indexedOptions[j]] = [indexedOptions[j], indexedOptions[i]];
    }

    const shuffledOptions = indexedOptions.map((item) => item.option);
    const newCorrectAnswerIndex = indexedOptions.findIndex(
      (item) => item.originalIndex === correctAnswerIndex
    );

    return { shuffledOptions, correctAnswerIndex: newCorrectAnswerIndex };
  };

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    if (showResults) return;

    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = optionIndex;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    if (!currentQuiz) return;

    const calculatedScore = userAnswers.reduce((acc, answer, index) => {
      return acc + (answer === currentQuiz.questions[index].correctAnswerIndex ? 1 : 0);
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
          <h2>
            Your Score: {score} / {currentQuiz.questions.length}
          </h2>
          <button className="back-btn" onClick={() => navigate("/QuizBoard")}>
            Back to Quiz Board
          </button>
        </div>
      )}
    </div>
  );
}
export default QuizPlatform;