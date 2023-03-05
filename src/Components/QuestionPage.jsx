import React from 'react';

const QuestionPage = ({ data, index }) => {
  return (
    <div className=' question_wrapper container'>
      <h5>Q{index}. {data.question}</h5>

      <div className='my-4'>
        {
          data?.options?.map((item, i) => {
            return <div key={i} className="form-check question_option">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" for="flexRadioDefault1">
                {item}
              </label>
            </div>
          })
        }



      </div>
    </div>
  );
}

export default QuestionPage;
