import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "./assets/style.css";
import Quiz from "./components/quiz";
import Home from "./components/home";
import Highscore from "./components/highscore";
import Result from "./components/Result";
import { useEffect} from "react";
import {fetchQuestions} from './store/actions/action';
import {useDispatch, useSelector} from "react-redux"; 
import {getData} from "./store/selectors/selector";

function App() {

    
const dispatch = useDispatch();

const data = useSelector(getData)
 
useEffect (() => {
  console.log("a")
    dispatch(fetchQuestions());
  console.log("b")
},
 [dispatch]);
console.log(data)
  
return (
    
  <div className="App">
     <Router>
      <Switch >
        <Route exact path="/">
          <Home />
        </Route>
         <Route exact path="/quiz"> 
           <Quiz quotes={data}/> 
        </Route>
        <Route 
        path='/Result'
        render={(props) => (
        <Result {...props}/>)}
          />
         <Route exact path="/highscore">
          <Highscore highscore={data}/>
        </Route>
      </Switch>
      </Router>
    </div> 
  );
   
}


export default App;