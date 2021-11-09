import React from "react";
import Question from "./QuestionBox";
// import Highscore from "./highscore";
// import PopUp from "./PopUp";
//import Result from "./Result";
import {connect} from "react-redux";
import {fetchQuestions} from "../store/actions/action";
import { Redirect } from "react-router-dom";


class Quiz extends React.Component {
    constructor(props){
      super(props)
        this.state = {
          questionBank: [this.props.quotes[0]],
          score: 0,
          responses: 0,
          
     }
     
    }
//   componentDidMount() {
//   const score = localStorage.getItem('score');
//   const name = score ? localStorage.getItem('name') : '';
//   this.setState({ name, score });
// }

     componentDidUpdate(prevProps){
         
       if (this.props.quotes !== prevProps.quotes)
       { 
           this.setState({ questionBank: this.props.quotes })
       }
     }

//    processquote = (quotes) => {
       
//      let {data}= JSON.parse(quotes)
//      data = this.shuffle(data)
//      return data.slice(0, 5)
//    }

//    shuffle(array) {
//   let currentIndex = array.length,  randomIndex;
//   while (currentIndex != 0) {

//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex], array[currentIndex]];
//   }

//   return array;
// }


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
        this.props.quotes[0].map(
            ({question, answers, correct, id}) => (
    <Question question={question} options={answers} key={id} 
        selected={answer => this.computeAnswer(answer,correct)}
        />) 
        )}
    {this.state.responses === 5 ? 
    <Redirect to={{
       pathname: '/Result',
       state: this.state.score
      }} 
      />: null }
 
    
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

     