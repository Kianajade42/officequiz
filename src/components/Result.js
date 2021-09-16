
import {Link} from 'react-router-dom';


const Result = ({score, playAgain}) => {

    return(
         <div className="container">
              <div className="intro">IT IS THE OFFICE QUIZ.</div>
             <div className="home">
               <h3> That wasn't so hard... </h3>
                <small>(that's what she said)</small>
               </div> 
        <div className="score-board">
        <div className="score">{`You answered ${score}/ 5 correct!`}</div>
        <div className="gif">
        <iframe src="https://giphy.com/embed/8VrtCswiLDNnO" width="580" height="450" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-office-nbc-8VrtCswiLDNnO"></a></p>
        </div>
        <div className="tryagain">“Fool me once, strike one. Fool me twice, strike three.” -Michael Scott</div>
        <button className="playBtn"
         onClick={playAgain}>
             <Link to="/quiz">Play again?</Link>
        </button>
    </div>
    </div>
    )
    }

export default Result;