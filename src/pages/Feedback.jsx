import React, { useState } from "react";
import "../Styles/Feedback.css";
import illustratorImg from "../Assets/description/feedback.png";
import axios from "axios";

function FeedbackForm({ setShowForm, APIResult }) {
  const [feedback, setfeedback] = useState({
    feedbackStatus: false,
    reason: ""
  });

  // const [feedback, setFeedback] = useState("");
  // const [isSatisfied, setIsSatisfied] = useState(true);

  // const handleRadioChange = (e) => {
  //   setIsSatisfied(e.target.value === "satisfied");
  // };

  // const handleFeedbackChange = (e) => {
  //   setFeedback(e.target.value);
  // };
  console.log(APIResult)
  const handleChange = (e) => {
    if (e.target.value === "yes") {
      setfeedback({ ...feedback, feedbackStatus: true })
    } else {
      setfeedback({ ...feedback, feedbackStatus: false })
    }
  }
  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8080/api/user/feedback/${APIResult?.data?._id}`, feedback)
      setShowForm(5)
    } catch (error) {

    }
    // console.log(`isSatisfied: ${isSatisfied}, feedback: ${feedback}`);
    // Add code to submit feedback to the server here
  };

  return (
    <div className="main col-12 d-flex justify-content-center align-items-center">
      <div className="col-5 p-4"> <img src={illustratorImg} alt="Illustrator" className="illustrator-img w-100" /></div>
      <form className="feedback-form col-4 border rounded p-4 ">
        <div>
          <h4>Are you satisfied with the results?</h4>
          <label className="me-3">
            <input
              type="radio"
              value="yes"
              checked={feedback.feedbackStatus}
              onChange={handleChange}
            />
            <span className="ms-1">
              Yes
            </span>
          </label>

          <label>
            <input
              value="no"
              type="radio"
              checked={!feedback.feedbackStatus}
              onChange={handleChange}
            />
            <span className="ms-1">
              No
            </span>
          </label>
        </div>

        <div className="w-100  mt-3">
          <p className="mb-1">Feedback:</p>
          <textarea
            value={feedback.reason}
            rows={4}
            className="w-100 rounded p-2 text-black"
            placeholder="Type Your Feedback here ..."
            onChange={(e) => setfeedback({ ...feedback, reason: e.target.value })}
          />
        </div>
        <div className="d-flex justify-content-center w-100 mt-3">
          <button className="btn-common px-3 py-2 rounded" type="submit" onClick={handleFeedbackSubmit}>Submit</button>
        </div>
      </form>
    </div>

  );
}

export default FeedbackForm;
