import React from 'react';
import '../Styles/result.css'
import img from '../Assets/description/final.png'
import { useState } from 'react'
const Result = () => {
  const [ShowForm, setShowForm] = useState(false);
  return (
    <div className='result-container'>
      {
        ShowForm ?
          <>
            <form action="" className='col-4 border p-4 rounded'>
              <div class="form-group mb-2">
                <label for="exampleFormControlInput1">Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Name" />
              </div>
              <div class="form-group mb-2">
                <label for="exampleFormControlInput1">Age</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Age" />
              </div>
              <div class="form-group mb-2">
                <label for="exampleFormControlInput1">Gender</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Gender" />
              </div>
              <div class="form-group mb-2">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />
              </div>
              <div class="form-group mb-2">
                <label for="exampleFormControlInput1">Profession</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Profession" />
              </div>
              <div className='d-flex justify-content-center rounded w-100 my-3 mt-4 rounded'>
                <button className='btn-common px-3 py-2 rounded'>Submit </button>
              </div>
            </form>
          </>
          :
          <>
            <div className='result-image-wrapper col-6 px-5'>
              <img src={img} alt="" />
            </div>
            <div className='col-6 result-content'>
              <h2>Hurray </h2>
              <h6>You Have Completed the Assesment</h6>
              <button className='btn-common p-3 rounded' onClick={() => setShowForm(true)}>Get Result</button>
            </div>
          </>
      }


    </div>
  );
}

export default Result;
