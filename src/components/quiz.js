import React from "react";
import Question from "./QuestionBox"
import Result from "./Result"

// import { connect } from 'react-redux'
// import {fetchQuestion} from '../store/actions/action'


class Quiz extends React.Component {
     state = {
       questionBank: [],
        score: 0,
         responses: 0
     }
          
     getQuestions = () => {
            this.setState({
                questionBank: Question
            });

         };
     

      componentDidMount(){
         this.getQuestions();
     };

    computeAnswer =
    (answer, correctAnswer) => {
        if (answer === correctAnswer) {
      this.setState({
     score: this.state.score + 1
});
 };
      this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        });
    };

    playAgain = () => {
        this.getQuestions();
        this.setState({
            score: 0,
            responses: 0
        });
    };

    
   render(){
        return (
        <div className="container">
        <div className="title">IT IS THE OFFICE QUIZ.</div>
        <div className="intro"> WHO SAID IT?</div>
    
        {this.state.questionBank.length > 0 && 
         this.state.responses < 5 &&
         this.state.questionBank.forEach(
           ({question, answers, correct, questionId}) => (
        <questionBox question={question} options={answers.split(',')} key={questionId} 
        selected={answer => this.computeAnswer(answer,correct)}/>) 
        )}
        {this.state.responses === 5 ? (<Result score={this.state.score} playAgain={this.playAgain}/>) : null}
        </div>
        
        
       
        
);    
}
  }  
 


export default Quiz;
//connect(mapStateToProps, mapDispatchToProps)(Quiz)