import React, { useState } from "react";

export default function Question({ question, answer }) {
  const [showAnswer, setshowAnswer] = useState(false);
  const toggleAnswer = () => {
    setshowAnswer(!showAnswer);
  };
  return (
    <div className="list-group-item qa-item px-4">
      <div onClick={toggleAnswer} className="qa-item-header">
        <h6 className="mb-0" className="question-text">
          {question}
        </h6>
        <div className="chevron-icon">
          {showAnswer ? (
            <i className="fa fa-chevron-down chevron"  />
          ) : (
            <i className="fa fa-chevron-right chevron" />
          )}
        </div>
      </div>
      {showAnswer && (
        <div className="answer-div">
          <p className="mb-0 answer-text">{answer}</p>
        </div>
      )}

      <style jsx>{`
        .qa-item {
          background-color: transparent;
        }
        .qa-item-header {
          display: flex;
          align-items: center;
          color: #000;
        }
        .qa-item-header:hover {
          cursor: pointer;
        }
        .question-text {
          flex: 1;
          font-weight: 500;
          font-size: 1.4rem;
        }
        .answer-div {
          background-color: transparent;
          border-radius: 5px;
        }
        .answer-text {
          font-size: 1.2rem;
          color: rgba(0, 0, 0, 0.7);
        }
        .chevron{
            color:#F4A242;
        }
      `}</style>
    </div>
  );
}
