import React from 'react';
import characterData from './Character'
import img from '../Assets/frontpage/captain.jpg'
const CharacterPage = ({ Global, setGlobal }) => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center h-100 container'>
      <h3 className='mb-4'>Choose a Character</h3>
      <div className='d-flex flex-wrap justify-content-center my-5'>
        {
          characterData?.map((item) => {
            return <div className='m-4 character_container' onClick={() => setGlobal({ ...Global, character: item?.name })} >
              <img src={item?.img} alt="charcter img" className={`${Global.character === item.name && `selected_character_img`}`} width={160} height={160} />
              <h5 className={`text-center mt-4 ${Global.character === item.name && `selected_character_text`}`}>{item?.name}</h5>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default CharacterPage;
