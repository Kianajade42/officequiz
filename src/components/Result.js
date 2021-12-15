
import {Link, Redirect} from 'react-router-dom';
import { withRouter} from 'react-router';
import PopUp from "./PopUp";
 import {useState, useEffect} from "react";
import React, { Component }  from 'react';
import Home from './home';
const Result = (props) => {

const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowPopup(true), 2000);
}, []);

    return( 
         <div className="container">
             { showPopup ? <PopUp highscore={`${props.location.state}`} /> : null }
          
              <div className="intro">IT IS THE OFFICE QUIZ.</div>
             <div className="home">
               <h3> That wasn't so hard... </h3>
                <small>(that's what she said)</small>
               </div> 
  <div>
        
        
      </div>

        <div className="score-board">
        <div className="score">{`You answered ${props.location.state}/ 5 correct!`}</div>
        <div className="gif">
        <iframe className="gif" src="https://giphy.com/embed/8VrtCswiLDNnO" width="580" height="450" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-office-nbc-8VrtCswiLDNnO"></a></p>
        </div>
        <div className="tryagain">“Fool me once, strike one. Fool me twice, strike three.” -Michael Scott</div>
        <button className="playBtn"
         onClick={props.playAgain}>
             <Link to="/quiz">Play again?</Link>
        </button>
        <button className="scoreBtn">
        <Link to="/">Home</Link>
         </button>
         {/* <button className="scoreBtn"
         onClick={props.highscore}>
             <Link to="/highscore">Highscores</Link>
        </button> */}
    </div>
    </div>
    )
    }

export default withRouter(Result);

