
import React, {useState} from "react";


const Question = ({question, options, selected}) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="questionBox">
      <div className="question">"{question}"</div>
      {answer.toString().split(",").map((choice) => (
        <button
          className="answerBtn"
          onClick={() => {
              setAnswer([choice]);
              selected(choice);
          }}
        >
          {choice}
        </button>
      ))}
    </div>
  );
};
export default Question;




