import React from "react";
import Question from "./QuestionBox";
import Result from "./Result";
import {connect} from "react-redux";
import {fetchQuestions, fetchSuccess} from "../store/actions/action";
import useData from "../store/selectors/selector";

class Quiz extends React.Component {
    constructor(props){
      super(props)
        this.state = {
          questionBank: [],
          score:  0,
          responses: 0
     }
    }
  
     componentDidUpdate(prevProps){
       if (this.props.quotes !== prevProps.quotes)
       { 
           this.setState({ questionBank: this.props.quotes })
       }
     }

    getQuestions = () => {
        this.setState({
        questionBank: Question
         });
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
        <div className="questionBox">
        {console.log(this.state.questionBank)}
        {this.state.questionBank}
        {this.state.questionBank.length > 0 && 
         this.state.responses < 5 &&
         this.state.questionBank.map(
           ({question, answers, correct, id}) => (
        <Question question={question} options={answers.split(",")} key={id} 
        selected={answer => this.computeAnswer(answer,correct)}/>) 
        )}
        {this.state.responses === 5 ? (<Result score={this.state.score} playAgain={this.playAgain}/>) : null}
         
        </div>
    </div>
        );    
         };
  
        }


const mapStateToProps = state => {
   return {
       questionBank: state.fetchSuccess
   }
    // const {questionBank} = state
    // return{
    //     questionBank: questionBank
    // }
}


 const mapDispatchToProps = dispatch => {
    return {
        fetchQuestions: () => dispatch(fetchQuestions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
// export default Quiz;
