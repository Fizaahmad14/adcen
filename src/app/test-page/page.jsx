import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'; // Import CSS file

const QuizComponent = ({ testType }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [currentDifficulty, setCurrentDifficulty] = useState('easy');
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    // Fetch the merged data from the Flask backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('/merged_data');
        setMergedData(response.data);
      } catch (error) {
        console.error('Error fetching merged data:', error);
      }
    };
    fetchData();
  }, []);

  const generateQuestion = async () => {
    try {
      const response = await axios.post('/get_question', { currentDifficulty, askedQuestions });
      const { question, options } = response.data;
      setQuestion(question);
      setOptions(options);
    } catch (error) {
      console.error('Error generating question:', error);
    }
  };

  const checkAnswer = async (userAnswer) => {
    try {
      const response = await axios.post('/check_answer', { answer: userAnswer });
      const { message, correct_count, incorrect_count, total_asked, feedback } = response.data;
      setFeedback(feedback);
      setCorrectCount(correct_count);
      setIncorrectCount(incorrect_count);
      setAskedQuestions(total_asked);
    } catch (error) {
      console.error('Error checking answer:', error);
    }
  };

  const handleAnswerSubmit = (selectedOption) => {
    checkAnswer(selectedOption);
  };

  const resetQuiz = () => {
    setCurrentDifficulty('easy');
    setCorrectCount(0);
    setIncorrectCount(0);
    setAskedQuestions([]);
    generateQuestion();
  };

  return (
    <div>
      <h1>Quiz</h1>
      {/* Render quiz components */}
      <div id="quiz-container">
        <h1>Mock Test</h1>
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
            <p id="correct-count">Correct: {correctCount}</p>
            <p id="incorrect-count">Incorrect: {incorrectCount}</p>
            <p id="total-count">Total Asked: {askedQuestions.length}</p>
          </div>
          <div id="result-message">{feedback}</div>
          <button className="end-button" onClick={resetQuiz}>End Mock Test</button>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
