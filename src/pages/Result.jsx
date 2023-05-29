import React from 'react';
import '../Styles/result.css'
import img from '../Assets/description/final.png'
import { useState } from 'react'
import result from '../Assets/description/result.png'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Result = ({ setShowForm, APIResult }) => {
  const percentage = 77


  // const text = APIResult?.message
  const text = `exhibits agreeableness based on their response to seeing other people cry, where they agree that it easily makes them feel like crying. This suggests empathy and sensitivity towards others' emotions.
   Additionally,  agrees that they usually stay calm even under a lot of pressure, indicating a cooperative and composed nature.
   They also disagree that a small mistake can cause them to doubt their overall abilities and knowledge, suggesting a positive self-image and confidence.
   Fun facts about agreeable individuals:
   
   Agreeable people are often seen as compassionate, friendly, and helpful, and they tend to value harmonious relationships.
   They are known for their empathy, understanding, and willingness to support others.
   Agreeable individuals often excel in jobs that involve teamwork, customer service, and collaboration.`
  const words = text?.split(" ");
  console.log(words)
  let countAgreeableness = 0;
  let countOpenness = 0;
  let countConscientiousness = 0;
  let countExtraversion = 0;
  let countNeuroticism = 0;
  for (let i = 0; i < words?.length; i++) {
    if (words[i].toLowerCase().includes("agreeableness")) {
      countAgreeableness++;
    }
  }
  for (let i = 0; i < words?.length; i++) {
    if (words[i].toLowerCase().includes("openness")) {
      countOpenness++;
    }
  }
  for (let i = 0; i < words?.length; i++) {
    if (words[i].toLowerCase().includes("conscientiousness")) {
      countConscientiousness++;
    }
  }
  for (let i = 0; i < words?.length; i++) {
    if (words[i].toLowerCase().includes("extraversion")) {
      countExtraversion++;
    }
  }
  for (let i = 0; i < words?.length; i++) {
    if (words[i].toLowerCase().includes("neuroticism")) {
      countNeuroticism++;
    }
  }
  console.log(countAgreeableness, countConscientiousness, countExtraversion, countNeuroticism, countOpenness)
  return (
    <div className='  gap-5 d-flex flex-column align-items-center justify-content-center col-12 py-5'>
      <u  >
        <h1 className='mb-1' >Results</h1>
      </u>

      <div className='col-12 gap-4 d-flex justify-content-center align-items-center'>
        <div className='col-4'>
          <img src={result} alt="result" className='w-100' />
        </div>

        <div className='col-6'>
          {/* <h4 style={{ whiteSpace: "pre-wrap" }}>{APIResult?.message}</h4> */}
          <h5 style={{ whiteSpace: "pre-wrap" }}>{text}</h5>
        </div>

      </div>

      <div className='col-10'>
        <h3 className='text-center mb-4'>Analysis Breakdown</h3>

        <div className='col-12 d-flex flex-wrap gap-3 justify-content-center result-box'>
          <div style={{ background: "#393B3D" }} className='p-3 align-items-center col-2 border rounded d-flex flex-column align-items-center'>
            <CircularProgressbar
              value={(countAgreeableness > 0 && countAgreeableness < 5) ? countAgreeableness * 20 : 30}
              text={`${(countAgreeableness > 0 && countAgreeableness < 5) ? countAgreeableness * 20 : 30}%`}
              styles={buildStyles({
                textSize: '16px',
                pathColor: `#AA076B`,
                textColor: 'white',
              })}
            />
            <h5 className='mt-3'>Agreeableness</h5>
          </div>

          <div style={{ background: "#393B3D" }} className='p-3 col-2  border rounded d-flex flex-column align-items-center'>
            <CircularProgressbar
              value={(countConscientiousness > 0 && countConscientiousness < 5) ? countConscientiousness * 20 : 30}
              text={`${(countConscientiousness > 0 && countConscientiousness < 5) ? countConscientiousness * 20 : 30}%`}
              styles={buildStyles({
                textSize: '16px',
                pathColor: `#AA076B`,
                textColor: 'white',
              })}
            />
            <h5 className='mt-3'>Conscientiousness</h5>
          </div>
          <div style={{ background: "#393B3D" }} className='p-3 col-2 border rounded d-flex flex-column align-items-center'>
            <CircularProgressbar
              value={(countExtraversion > 0 && countExtraversion < 5) ? countExtraversion * 20 : 30}
              text={`${(countExtraversion > 0 && countExtraversion < 5) ? countExtraversion * 20 : 30}%`}
              styles={buildStyles({
                textSize: '16px',
                pathColor: `#AA076B`,
                textColor: 'white',
              })}
            />
            <h5 className='mt-3'>Extraversion</h5>
          </div>
          <div style={{ background: "#393B3D" }} className='p-3 border col-2 rounded d-flex flex-column align-items-center'>
            <CircularProgressbar
              value={(countOpenness > 0 && countOpenness < 5) ? countOpenness * 20 : 30}
              text={`${(countOpenness > 0 && countOpenness < 5) ? countOpenness * 20 : 30}%`}
              styles={buildStyles({
                textSize: '16px',
                pathColor: `#AA076B`,
                textColor: 'white',
              })}
            />
            <h5 className='mt-3'>Openness</h5>
          </div>
          <div style={{ background: "#393B3D" }} className='p-3 border col-2 rounded d-flex flex-column align-items-center'>
            <CircularProgressbar
              value={(countNeuroticism > 0 && countNeuroticism < 5) ? countNeuroticism * 20 : 30}
              text={`${(countNeuroticism > 0 && countNeuroticism < 5) ? countNeuroticism * 20 : 30}%`}
              styles={buildStyles({
                textSize: '16px',
                pathColor: `#AA076B`,
                textColor: 'white',
              })}
            />
            <h5 className='mt-3'>Neuroticism</h5>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => setShowForm(4)} className='btn-common p-3 rounded'>Give Us Your Feedback</button>
      </div>

    </div>
  );
}

export default Result;
