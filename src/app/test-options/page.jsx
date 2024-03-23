// MainComponent.jsx

import React from 'react';
import './style.css'; // Import CSS file

const MainComponent = () => {
  return (
    <div className="container">
      <h1>Choose a Test</h1>
      <div className="buttons">
        <a href="/quiz/test-page" className="button">GIKI</a>
        <a href="/quiz/test-page" className="button">SAT</a>
        <a href="/quiz/test-page" className="button">NTS</a>
        <a href="/quiz/test-page" className="button">NET-Engineering</a>
        <a href="/quiz/test-page" className="button">NET-Computing</a>
        <a href="/quiz/test-page" className="button">NET-Business Studies</a>
        <a href="/quiz/test-page" className="button">NET-Architecture</a>
        <a href="/quiz/test-page" className="button">ECAT</a>
        <a href="/quiz/test-page" className="button">PIEAS</a>
      </div>
    </div>
  );
};

export default MainComponent;
