import { render } from "@testing-library/react";
import React from "react";

class Question extends React.Component {

 questionBox = ({question, options, selected}) => {
  const [answer, setAnswer] = (options)

  render() 
  return (
    <div className="questionBox">
      <div className="question">"{question}"</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
              setAnswer([text]);
              selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
}
} 
export default Question;