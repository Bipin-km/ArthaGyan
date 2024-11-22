import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Quiz_platform.css";
import { quizData } from "./questions";

const QuizPlatform = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quiz, setQuiz] = useState(null);

    useEffect(() => {
        const selectedQuiz = quizData.find((quiz) => quiz.id === parseInt(id));
        if (selectedQuiz) {
            setQuiz(selectedQuiz);
        } else {
            navigate("/not-found");
        }
    }, [id, navigate]);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quiz.questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            navigate("/results", { state: { score: score, total: quiz.questions.length } });
        }
    };

    if (!quiz) {
        return <div>Loading...</div>;
    }

    return (
        <div className="quiz-platform">
            <h2>{quiz.title}</h2>
            <div className="question-section">
                <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/{quiz.questions.length}
                </div>
                <div className="question-text">{quiz.questions[currentQuestion].questionText}</div>
            </div>
            <div className="answer-section">
                {quiz.questions[currentQuestion].answerOptions.map((answerOption, index) => (
                    <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                        {answerOption.answerText}
                    </button>
                ))}
            </div>
        </div>
    );
}
export default QuizPlatform;