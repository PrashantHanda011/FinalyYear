import React from 'react';
import '../Styles/result.css'
import img from '../Assets/description/final.png'
import { useState } from 'react'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Result = ({ setShowForm }) => {
  const percentage = 77
  return (
    <div className='  gap-5 d-flex flex-column align-items-center justify-content-center col-12'>
      <h1>Results</h1>
      <div className='col-6 d-flex flex-wrap gap-5 justify-content-center result-box'>
        <div style={{ background: "#393B3D" }} className='p-3 align-items-center col-3 border rounded d-flex flex-column align-items-center'>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textSize: '16px',
              pathColor: `#AA076B`,
              textColor: 'white',
            })}
          />
          <h5 className='mt-3'>Completeness</h5>
        </div>
        <div style={{ background: "#393B3D" }} className='p-3 col-3  border rounded d-flex flex-column align-items-center'>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textSize: '16px',
              pathColor: `#AA076B`,
              textColor: 'white',
            })}
          />
          <h5 className='mt-3'>Conscientiousness</h5>
        </div>
        <div style={{ background: "#393B3D" }} className='p-3 col-3 border rounded d-flex flex-column align-items-center'>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textSize: '16px',
              pathColor: `#AA076B`,
              textColor: 'white',
            })}
          />
          <h5 className='mt-3'>Extraversion</h5>
        </div>
        <div style={{ background: "#393B3D" }} className='p-3 border col-3 rounded d-flex flex-column align-items-center'>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textSize: '16px',
              pathColor: `#AA076B`,
              textColor: 'white',
            })}
          />
          <h5 className='mt-3'>Agreeableness</h5>
        </div>
        <div style={{ background: "#393B3D" }} className='p-3 border col-3 rounded d-flex flex-column align-items-center'>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textSize: '16px',
              pathColor: `#AA076B`,
              textColor: 'white',
            })}
          />
          <h5 className='mt-3'>Neuroticism</h5>
        </div>
      </div>
      <div>
        <button onClick={() => setShowForm(4)} className='btn-common p-3 rounded'>Give Feedback</button>
      </div>

    </div>
  );
}

export default Result;
