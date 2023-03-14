import React from 'react';
import characterData from '../Components/Character'
import img from '../Assets/frontpage/captain.jpg'
import '../Styles/character.css'
const CharacterPage = ({ Global, setGlobal, setpage, head }) => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center h-100 container'>
      <h3 className='mb-4 character_head'>Choose A Character </h3>
      <div className='d-flex flex-wrap justify-content-center my-5'>
        {
          characterData?.map((item) => {
            return <div className='m-4 character_container' onClick={() => setGlobal({ ...Global, character: item?.name })} >
              <img src={item?.img} alt="charcter img" className={`${Global?.character === item?.name && `selected_character_img`}`} width={160} height={160} />
              <h5 className={`text-center mt-4 ${Global?.character === item?.name && `selected_character_text`}`}>{item?.name}</h5>
            </div>
          })
        }
      </div>
      {
        !!Global?.character &&
        <button className='btn-common py-2 px-5 rounded mt-3' onClick={() => setpage(2)}>Next Page</button>
      }
    </div>
  );
}

export default CharacterPage;
