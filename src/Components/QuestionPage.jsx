import React, { useEffect, useState } from 'react';
import agree from '../Assets/agree.png'
import disagree from '../Assets/disagree.png'
import neutral from '../Assets/neutral.png'
import strongAgree from '../Assets/strongAgree.png'
import strongDisagree from '../Assets/strongDisagree.png'
const QuestionPage = ({ data, index }) => {

  const [state, setstate] = useState({});
  useEffect(() => {
    setstate(data)
  }, [data])
  return (
    <div className=' question_wrapper container'>
      <h5>Q{index}. {state?.question}</h5>
      <div className='d-flex  h-50 justify-content-center align-items-center w-100'>
        <div className=' d-flex align-items-center options'>
          {state?.survey === "short" &&
            <>
              <span className='text-success'>Agree</span>
              <img src={strongAgree} alt="agreelogo" height={80} width={80} />
              <div className="form-check question_option">
                <img src={agree} alt="agreelogo" height={80} width={80} />
              </div>
              <div className="form-check question_option">
                <img src={neutral} alt="agreelogo" height={80} width={80} />
              </div>
              <div className="form-check question_option">
                <img src={disagree} alt="agreelogo" height={80} width={80} />
              </div>
              <div className="form-check question_option">
                <img src={strongDisagree} alt="agreelogo" height={80} width={80} />
              </div>
              <span className='text-danger'>Disagree</span>
            </>

          }
        </div>
        {
          data.survey === "long" &&
          <textarea name="" id="" placeholder='type your answer here' style={{ resize: "none", minHeight: "40vh" }} autoFocus className='w-100 p-3 bg-dark  rounded ' cols="30" ></textarea>
        }

      </div>
    </div>
  );
}

export default QuestionPage;
