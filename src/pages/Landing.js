import React from 'react';
import '../Styles/landing.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../Assets/landing/c1.png'
import img2 from '../Assets/landing/c2.png'
import img3 from '../Assets/landing/c3.png'
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <div className='bg-dark container-fluid landing_wrapper d-flex'>
      <div className='container col-6 p-5'>
        <Carousel autoPlay showArrows={false} showThumbs={false} showStatus={false} transitionTime={0.2} interval={4000} infiniteLoop showIndicators={false}>
          <div className='landing_carosel '>
            <img src={img1} alt="" />
          </div>
          <div className='landing_carosel'>
            <img src={img2} alt="" />
          </div>
          <div className='landing_carosel'>
            <img src={img3} alt="" />
          </div>
        </Carousel>
      </div>
      <div className='col-6 landing_heading px-3'>
        <h2 className='mb-0'>Mindology</h2>
        <small style={{ fontWeight: "700", marginLeft: "5px" }}>
          <span>Explore Your</span> <span style={{ color: "hsl(323, 72%, 50%)" }}>Personality</span> <span>in a whole new way.</span>
        </small>
        <p className='mt-3'>Unleash your full potential and find your perfect career fit with our advanced personality detection system. Our state-of-the-art technology unlocks your unique strengths, providing deep insights into your personality traits and helping you discover your true calling. Start exploring now and take the first step toward achieving your goals.</p>
        <Link to={'/questions'}>
          <button className='btn-common align-self-start p-3 rounded'> Get Started</button>
        </Link>
      </div>

      <div className='design_box'>
      </div>
    </div>
  );
}

export default Landing;
