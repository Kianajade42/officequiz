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
          questionBank: [this.props.quotes],
          score:  0,
          responses: 0,
     }
    }
    //   componentDidMount() {
    //     this.props.fetchQuestions()
    //   }
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
      
             {this.props.quotes.map(display => (
                <React.Fragment>
            <div className="questionBox">
             <p  className="question" key={display.id}> "{display.question}" </p>
                 {display.answers.split(",").map(choice => (
             <p className="answerBtn"> {choice}</p> 
                 )
                 )}
            </div> 
                </React.Fragment>
             ))}
    
            
             {/* {this.props.quotes.map((question, id) => (
               <div className="questionBox">
             <p className="question" key={id}> {question.question}</p>
                
             {this.props.quotes.map((answers, id) => (
             <p className="answerBtn" key={id}> {answers.answers.split(",")}</p>
                ))}    
          </div>
          ))}  */}
           

        {/* {this.state.score.length > 0 && 
         this.state.responses < 5 &&
         this.props.quotes.map(
           (display, correct) => (
        <Question
    
        question={display.question}
         options={display.answers.split(",")} key={display.id} 
        selected={answer => this.computeAnswer(answer,correct)}/>) 
        )}
        {this.state.responses === 5 ? (<Result score={this.state.score} playAgain={this.playAgain}/>) : null} */}
       
         
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
