import React, { useState } from "react";
import "../Styles/Feedback.css";
import illustratorImg from "../Assets/feedback.png";

function FeedbackForm() {
  const [isSatisfied, setIsSatisfied] = useState(true);
  const [feedback, setFeedback] = useState("");

  const handleRadioChange = (e) => {
    setIsSatisfied(e.target.value === "satisfied");
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`isSatisfied: ${isSatisfied}, feedback: ${feedback}`);
    // Add code to submit feedback to the server here
  };

  return (
    <div className="main">
  <div> <img src={illustratorImg} alt="Illustrator" className="illustrator-img" /></div>
    <form onSubmit={handleSubmit} className="feedback-form">
       
     
      <div>
        <p>Are you satisfied with the results?</p>
        <label>
          <input
            type="radio"
            name="satisfaction"
            value="satisfied"
            checked={isSatisfied}
            onChange={handleRadioChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="satisfaction"
            value="not-satisfied"
            checked={!isSatisfied}
            onChange={handleRadioChange}
          />
          No
        </label>
      </div>
      <div>
        <label>
          <p>Feedback:</p>
          <textarea
            value={feedback}
            onChange={handleFeedbackChange} className="textarea"
          />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  
  );
}

export default FeedbackForm;
