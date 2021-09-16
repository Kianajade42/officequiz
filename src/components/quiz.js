import React from "react";
import Question from "./QuestionBox";
import Result from "./Result";
import {connect} from "react-redux";
import {fetchQuestions} from "../store/actions/action";
import { Redirect } from "react-router-dom";
//import useData from "../store/selectors/selector";

class Quiz extends React.Component {
    constructor(props){
      super(props)
        this.state = {
          questionBank: [this.props.quotes],
          score: 0,
          responses: 0,
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
        {this.state.questionBank.length > 0 && 
         this.state.responses < 5 && 
          this.props.quotes.map(
            ({question, answers, correct, id}) => (
    <Question question={question} options={answers} key={id} 
        selected={answer => this.computeAnswer(answer,correct)}
        />) 
        )}
        
    {this.state.responses === 5 ? <Redirect to="/Result"/>: null}
         </div>
     )
}
}

const mapStateToProps = state => {
   return {
       questionBank: state.fetchSuccess
   }
}


 const mapDispatchToProps = dispatch => {
    return {
        fetchQuestions: () => dispatch(fetchQuestions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

     