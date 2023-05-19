import React, { useState } from "react";
import "../Styles/Feedback.css";
import illustratorImg from "../Assets/description/feedback.png";

function FeedbackForm({ setShowForm }) {
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
    <div className="main col-12 d-flex justify-content-center align-items-center">
      <div className="col-5 p-4"> <img src={illustratorImg} alt="Illustrator" className="illustrator-img w-100" /></div>
      <form onSubmit={handleSubmit} className="feedback-form col-4 border rounded p-4 ">
        <div>
          <h4>Are you satisfied with the results?</h4>
          <label className="me-3">
            <input
              type="radio"
              name="satisfaction"
              value="satisfied"
              checked={isSatisfied}
              onChange={handleRadioChange}
            />
            <span className="ms-1">
              Yes
            </span>
          </label>

          <label>
            <input
              type="radio"
              name="satisfaction"
              value="not-satisfied"
              checked={!isSatisfied}
              onChange={handleRadioChange}
            />
            <span className="ms-1">
              No
            </span>
          </label>
        </div>

        <div className="w-100  mt-3">
          <p className="mb-1">Feedback:</p>
          <textarea
            value={feedback}
            rows={4}
            className="w-100 rounded p-2 text-black"
            placeholder="Type Your Feedback here ..."
            onChange={handleFeedbackChange}
          />
        </div>
        <div className="d-flex justify-content-center w-100 mt-3">
          <button className="btn-common px-3 py-2 rounded" type="submit" onClick={() => setShowForm(5)}>Submit</button>
        </div>
      </form>
    </div>

  );
}

export default FeedbackForm;
