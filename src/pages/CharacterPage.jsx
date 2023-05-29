import React from 'react';
import characterData, { characterData25, characterData35 } from '../Components/Character'
import img from '../Assets/frontpage/captain.jpg'
import '../Styles/character.css'
import characterData18 from '../Components/Character';
const CharacterPage = ({ Global, setGlobal, setpage, head }) => {
  console.log(Global)
  return (
    <div className='d-flex flex-column align-items-center justify-content-center h-100 container'>
      <h3 className='mb-4 character_head'>Choose A Character </h3>
      <div className='d-flex flex-wrap justify-content-center my-5'>
        {
          Number(Global?.age) < 25 ?
            characterData18?.map((item, index) => {
              return <div key={index} className='m-4 character_container' onClick={() => setGlobal({ ...Global, character: item?.name, movie: item.movie })} >
                <img src={item?.img} alt="charcter img" className={`${Global?.character === item?.name && `selected_character_img`}`} width={160} height={160} />
                <h5 className={`text-center mt-4 ${Global?.character === item?.name && `selected_character_text`}`}>{item?.name}</h5>
              </div>
            })
            :
            Number(Global?.age) < 35 && Number(Global?.age) > 25 ?
              characterData25?.map((item, index) => {
                return <div key={index} className='m-4 character_container' onClick={() => setGlobal({ ...Global, character: item?.name, movie: item.movie })} >
                  <img src={item?.img} alt="charcter img" className={`${Global?.character === item?.name && `selected_character_img`}`} width={160} height={160} />
                  <h5 className={`text-center mt-4 ${Global?.character === item?.name && `selected_character_text`}`}>{item?.name}</h5>
                </div>
              }) :
              Number(Global?.age) > 35 &&
              characterData35?.map((item, index) => {
                return <div key={index} className='m-4 character_container' onClick={() => setGlobal({ ...Global, character: item?.name, movie: item.movie })} >
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
