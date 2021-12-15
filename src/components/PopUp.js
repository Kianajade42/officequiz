import React, { useState } from "react";


const PopUp = (props) => {

  const [open, setOpen] = useState(false);

  const initialFormData = {name: " ", highscore: props.highscore}
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };



    const handleSubmit = () => {
    console.log(formData);
    fetch( "http://localhost:3000/scores", 
                    {
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                    method: "post",
                     })
                     .then (console.log);
                     
}

    return  (
        <nav className={open ? "open" : null}>
          <div className="popup">
          <div className="popupform"> identity theft is not a joke.</div> 
          <form className="formBtn" >
              <label> Name:
          <input type="text" name="name" id="name" onChange={handleChange} />
             </label>
            </form>
                      <button className="formsubmit" value="submit"
        onClick={() => {
        setOpen(!open);
        handleSubmit();
        }}
      >
          Submit
        </button>
        
    
    </div>
   </nav>
    );
}
  
  export default (PopUp);


