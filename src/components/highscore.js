
import { withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import React from "react";




    export default class Highscore extends React.Component {
    constructor(props){
    super(props)
      this.state = {
          score: [this.props.highscore]
        }
    }
   
        render() {
    return(
         <div className="container">
              <div className="intro">IT IS THE OFFICE QUIZ.</div>
              <div className="home"> <h3> Am I a hero?… I really can’t say, but yes! -Michael Scott </h3></div> 
              <div className="score-board">    
              <div className="highscore"> 
             <div className="intro"><h2>Highscores</h2></div>
            <div className="question"></div> 
        {this.props.highscore[1].slice(0, 5).map(
             ({highscore, name}) => (
          <h1 className="HSdisplay"> {name}:   {highscore}</h1> 
          ))}            
         <button className="playBtn">
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
    }


// export default withRouter(Highscore);
// scoresort = (a,b) => {
//     if (a > b) {
//     return -1;;
//   } else if (b > a) {
//     return 1;;
//   } else {
//     return 0;
//   }
// }

//  {this.state.players.map(function(player, index) {
//                 {this.onScoreChange() && this.onScoreChange(index ,).slice(0, 5).map(
//              ({highscore, name}) => (
//           <h1 className="HSdisplay"> {name}:   {player.score}</h1> ))}     
//             })     
//           }