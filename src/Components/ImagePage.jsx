import React from 'react';
import "../Styles/ImagePage.css" // import your CSS file for styling
import img  from "../Assets/Busystreet.jpeg"
function ImagePage() {
  return (
    <div className='cont' >
      <div><img src= {img}alt="Image" className="center-image" /></div>
      <div>
        <p className='text'>What emotions or thoughts does this image evoke for you? Why?</p></div>
        <textarea name="" id="" placeholder='type your answer here' style={{ resize: "none", minHeight: "10vh" }} autoFocus className='w-50 p-3 bg-dark  rounded ' cols="30" ></textarea>
    </div>
  );
}

export default ImagePage;
