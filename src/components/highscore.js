
import { withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import React, {useState} from "react";


const Highscore = (props) => {
     const winner = (props.highscore);
               
console.log(winner)
    
        
    return(
         <div className="container">
              <div className="intro">IT IS THE OFFICE QUIZ.</div>
              <div className="home"> <h3> Am I a hero?… I really can’t say, but yes! -Michael Scott </h3></div> 
              <div className="score-board">    
              <div className="highscore"> 
             <div className="intro"><h2>Highscores</h2></div>
                    <div className="questionBox">
                    <div className="question"> 
                    <form action="http://localhost:3000/scores" method="POST">
  <label> Name: <input type="text" name="name" id="name" /></label>
  <br />
  <input type="submit" id="submit" value="Submit" />
</form>
                     
                    </div>
                    </div>
                     
                    
         <button className="playBtn"
         onClick={props.playAgain}>
             <Link to="/quiz">Play again?</Link>
        </button>
        
        <button className="scoreBtn">
        <Link to="/">Home</Link>
         </button>
             </div>
        
        </div>
        </div>
     
    )
                 }


export default withRouter(Highscore);