"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { useClient } from 'next/data-client'; // Import useClient
import './style.css'; // Import CSS file

const QuizComponent = ({ testType }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [currentDifficulty, setCurrentDifficulty] = useState('easy');
  const [showEndButton, setShowEndButton] = useState(true); // New state to control the visibility of the button
  const [quizEnded, setQuizEnded] = useState(false); // Define quizEnded state

  useEffect(() => {
    setCurrentDifficulty('easy');
    setCorrectCount(0);
    setIncorrectCount(0);
    setAskedQuestions([]);
    generateQuestion();
  }, []);

  const generateQuestion = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/get_question', { currentDifficulty, askedQuestions });
      const { question, options } = response.data;
      setQuestion(question);
      setOptions(options);
    } catch (error) {
      console.error('Error generating question:', error);
    }
  };

  const checkAnswer = async (userAnswer) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/check_answer', { answer: userAnswer });
      const { message, correct_count, incorrect_count, total_asked, feedback } = response.data;
      setFeedback(feedback);
      // Update the counts based on the server response data
      setCorrectCount(correct_count);
      setIncorrectCount(incorrect_count);
      // this will make sure that the total question count is also displayed
      setAskedQuestions(prevAskedQuestions => [...prevAskedQuestions, response.data.askedQuestions]);
      generateQuestion();
    } catch (error) {
      console.error('Error checking answer:', error);
    }
  };

  // to check if feedback is correct then it must appear as green or for incorrect it appears as red
  const getFeedbackColor = (feedbackMessage) => {
    return feedbackMessage.toLowerCase().includes('correct') ? 'red' : 'green';
  };

  const resetQuiz = () => {
    setQuizEnded(true);
    setShowEndButton(false);
  };

  const handleAnswerSubmit = (selectedOption) => {
    checkAnswer(selectedOption);
  };

  return (
    <div>
      <h1><strong>Mock Test</strong></h1>
      {quizEnded ? (
        <ResetQuiz correctCount={correctCount} totalQuestions={askedQuestions.length} />
      ) : (
        <div id="quiz-container">
          <div id="question-container">
            <p id="question">{question}</p>
            <ul id="options">
              {options.map((option, index) => (
                <li key={index} onClick={() => handleAnswerSubmit(option)}>
                  {String.fromCharCode(65 + index)}. {option}
                </li>
              ))}
            </ul>
            <div id="count-container">
              <p id="correct-count">Score: {correctCount}</p>
              <p id="incorrect-count">Incorrect: {incorrectCount}</p>
              <p id="total-count">Total Asked: {askedQuestions.length}</p>
            </div>
            <div>
              {/* QuizComponent JSX code */}
              <div id="result-message" style={{ color: getFeedbackColor(feedback) }}>{feedback}</div>
              {/* Remaining JSX code */}
            </div>
            {showEndButton && <button className="end-button" onClick={resetQuiz}>End Mock Test</button>}
          </div>
        </div>
      )}
    </div>
  );
};

const ResetQuiz = ({ correctCount, totalQuestions }) => {
  return (
    <div className="result-container">
      <h2 className="result-heading">Quiz Ended</h2>
      <div className="result-details">
        <p className="result-score">Total Score: {correctCount}</p>
        <p className="result-questions">Total Questions Asked: {totalQuestions}</p>
      </div>
      <a href="/test-options" className="retake-button">Retake Test</a> {/* Anchor tag for navigation */}
    </div>
  );
};

export default QuizComponent;
