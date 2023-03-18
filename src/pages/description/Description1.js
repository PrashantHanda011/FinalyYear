import React from 'react';
import desc1 from '../../Assets/description/d1.png'
import '../../Styles/common/description.css'
const Description = ({ page, setpage, step, img, head, description }) => {
  return (
    <div className='d-flex flex-row container justify-content-center align-items-center'>

      <div className='col-6 d1_img'>
        <img src={img} alt="description" />
      </div>
      <div className='col-6 d1_head'>
        <h5><span>STEP {step} :</span> {head}</h5>
        <p> {description || "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim veniam quasi dolor amet ipsam rerum debitis unde soluta nulla, similique dolore perferendis, dicta voluptates. Doloribus nulla tenetur reprehenderit minima nesciunt id sunt eos inventore quos culpa odit nam quia, labore odio. Illum alias facilis recusandae? Esse, totam dolores maiores ab, eligendi animi a commodi iste ducimus recusandae nostrum tenetur facere."}
        </p>
        <button className='btn-common px-4 py-2 rounded' onClick={() => setpage(page)}>Start</button>
      </div>

    </div>
  );
}

export default Description;
