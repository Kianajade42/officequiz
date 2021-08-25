import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "./assets/style.css";
import Quiz from "./components/quiz"
import Home from "./components/home";
import Result from "./components/Result";
import {fetchQuestionsWithRedux} from "./store/actions/action"
import {connect} from "react-redux";
import { useEffect } from "react";
//import Question from "./components/QuestionBox";
//import {fetchQuestions} from './store/actions/action';


function App({fetchQuestions}) {

  useEffect(() => {
    fetchQuestions()
     },[fetchQuestions]);

  return (
    
  <div className="App">
     <Router>
      <Switch >
        <Route exact path="/">
          <Home />
        </Route>
         { <Route exact path="/quiz">
           <Quiz/>
        </Route>}
        <Route exact path="/result">
          <Result />
        </Route>
      </Switch>
      </Router>
    </div> 
  );
   
}
//  const mapStateToProps = (state) => {
//     return{
//       Quiz
//         //questionBox: state.question
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        fetchQuestions: () => dispatch(fetchQuestionsWithRedux())
    }
}
export default connect(null, mapDispatchToProps)(App);
