import React from 'react';
import '../Styles/progressbar.css'
const Progressbar = () => {
  return (
    <div className=' container py-3 d-flex align-items-center justify-content-between'>
      <div className="stepper-head d-flex align-items-center gap-2">
        <span className="stepper-head-icon ">1</span>
        <span className="stepper-head-text">step1</span>
      </div>
      <span className='progress-white-border'></span>
      <div className="stepper-head d-flex align-items-center gap-2">
        <span className="stepper-head-icon">2</span>
        <span className="stepper-head-text">step2</span>
      </div>
      <span className='progress-white-border'></span>

      <div className="stepper-head d-flex align-items-center gap-2">
        <span className="stepper-head-icon">3</span>
        <span className="stepper-head-text">step3</span>
      </div>

    </div>

  );
}

export default Progressbar;
