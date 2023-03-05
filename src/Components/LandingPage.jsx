import React from 'react';
import ReactDOM from 'react-dom';
import '../Styles/LandingPage.css'
import backgroundImage from '../Assets/frontpage/bcg.webp';
const styles = {
 
};

const LandingPage = () => {
  return (
    <div > 
      <div  className='centerContainer' style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <p className='text'>What's ur Personality?</p>
      </div>
      <div className='bottomContainer'>This container is at the bottom of the page</div>
    </div>
  );
};

export default LandingPage
