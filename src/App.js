import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "./assets/style.css";
import Quiz from "./quiz"
import Home from "./components/home";
import Result from "./components/Result";



function App() {
  return (
    <div className="App">
      <Router>
      <Switch >
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/quiz">
          <Quiz />
        </Route>
        <Route exact path="/result">
          <Result />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
