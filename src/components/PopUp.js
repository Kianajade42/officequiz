import React, { Component } from "react";

export default class PopUp extends Component {
 
  render() {
    return (
      <div className="popup">
          <div className="popupform"> identity theft is not a joke.</div> 
        <div>
          
          <form  action="http://localhost:3000/scores" method="POST">
             <label className="formBtn" >
              Name: <input type="text" name="name" id="name" />
              <textarea className="scoretext" name="highscore" id="highscore" value={this.props.highscore} />
              </label>  <br />
             <input className="formsubmit" onclick="self.close()" type="submit" id="submit" value="Submit" />
             
          </form>

          </div>
      </div>
    );
  }
}