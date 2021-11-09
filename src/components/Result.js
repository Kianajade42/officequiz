
import {Link} from 'react-router-dom';
import { withRouter} from 'react-router';
import PopUp from "./PopUp";

const Result = (props) => {
<PopUp highscore={`${props.location.state}`}/>

    return( 
         <div className="container">
             <div className="popup">
        </div>
          
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
         <button className="scoreBtn"
         onClick={props.highscore}>
             <Link to="/highscore">Highscores</Link>
        </button>
    </div>
    </div>
    )
    }

export default withRouter(Result);