import React, { useState } from "react";
import "./App.css";
import questions from "./components/data";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const questionHandler = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score">
          Your Score: {score}/{questions.length}
        </div>
      ) : (
        <>
          <div className="container">
            <p>
              Question # {currentQuestion + 1}/{questions.length}
            </p>
            <h3>{questions[currentQuestion].question}</h3>
            <div className="answers">
              {questions[currentQuestion].options.map((option) => (
                <button onClick={() => questionHandler(option.isCorrect)}>
                  {option.answer}
                </button>
              ))}
            </div>
            {/* <button>Score: {0}</button> */}
            {console.log(questions)}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
