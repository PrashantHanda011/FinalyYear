import React from 'react';
import Steps from 'rc-steps';
const Progressbar = () => {
  return (
    <div className='py-3 container '>
      <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar bg-danger" style={{ width: "100%" }}></div>
      </div>
    </div>

  );
}

export default Progressbar;
