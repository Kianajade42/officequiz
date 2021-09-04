import { render } from "@testing-library/react";
import React from "react";
import {useState} from "react";


const Question = ({question, options, selected}) => {
  const [answers, setAnswer] = useState(options);
  return (
    <div className="questionBox">
      <div className="question">"{question}"</div>
      {answers.map((text, index) => (
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
};

export default Question;





//  const QuestionBox = ({question, options, selected}) => {
//  const [answer, setAnswer] = useState(options);

//export default class Question extends React.Component {
//   export const Question = (options, selected) => {
//      const setAnswer = {options};
//   //render(){
//     <div className="questionBox">
//       {this.props.options.map((text, index) => (
//         <button
//           key={index}
//           className="answerBtn"
//           onClick={() => {
//               setAnswer([text]);
//               selected(text);
//           }}
//         >
//           {text}
//         </button>
//       ))}
//     </div>
//   ;
// //}
// };





// class Question extends React.Component { 
  //  questionBox = ({
//   question, options, selected}) => {
//    const [answer, setAnswer] = (options)

//   render(){
  
//   return (
//     <div className="questionBox">
//       <div className="question">{this.props.question}</div>
//       {this.props.options.forEach((text, index) => (
//         <button
//           key={index}
//           className="answerBtn"
//           // onClick={() => {
//           //     setAnswer([text]);
//           //     selected(text);
//           //}}
//         >
//           {text}
//         </button>
//       ))}
//     </div>
//   )};
// }


// export default Question;