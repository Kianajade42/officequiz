import React from "react";
import {Link} from 'react-router-dom';


const Home = () => {

    return (
        <div className="container">
            <div className="welcome">
            <div className="title">
              <h1>IT IS THE OFFICE QUIZ.</h1>
            </div>
             <div className="intro">
               <h2> Think you know who said it?</h2>
                <h4>Test your 'The Office' quotes knowledge</h4>
             </div>
            <div className="home">
               <h3> Its harder than you think... </h3>
                <small>(that's what she said)</small>
               </div> 
                <button className="start">
                    <Link to="/quiz">Lets Play!</Link>
                    </button>
        </div>
        </div>
    )
    }



export default Home