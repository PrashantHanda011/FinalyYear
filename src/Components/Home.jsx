import React, { useState } from 'react';
import '../Styles/home.css'
import captain from '../Assets/frontpage/captain.jpg'
import doctor from '../Assets/frontpage/doctor.jfif'
import scarlet from '../Assets/frontpage/scarlet.jfif'
import thor from '../Assets/frontpage/thor.jfif'
import iron from '../Assets/frontpage/iron.jfif'
const Home = () => {
    const [character, setcharacter] = useState(0);
    return (
        <div className='container-fluid p-0 home_box  p-2'>
            <div className='character_container my-2'>
                <h2 className='my-5'>Choose Your Character</h2>
                <ul className='d-flex container justify-content-center align-items-center'>
                    <li>
                        <img onClick={() => setcharacter(1)} className={`${character === 1 ? "character_selected_img" : null}`} src={captain} alt="captain" />
                        <h5 className={`${character === 1 ? "character_selected_text" : null}`}>Captain America</h5>
                    </li>
                    <li>
                        <img onClick={() => setcharacter(2)} className={`${character === 2 ? "character_selected_img" : null}`} src={doctor} alt="doctor strange" />
                        <h5 className={`${character === 2 ? "character_selected_text" : null}`}>Docter Strange</h5>

                    </li>
                    <li>
                        <img onClick={() => setcharacter(3)} className={`${character === 3 ? "character_selected_img" : null}`} src={scarlet} alt="scarlet" />
                        <h5 className={`${character === 3 ? "character_selected_text" : null}`}>Scarlet Witch</h5>
                    </li>
                    <li>
                        <img onClick={() => setcharacter(4)} className={`${character === 4 ? "character_selected_img" : null}`} src={thor} alt="thor" />
                        <h5 className={`${character === 4 ? "character_selected_text" : null}`}>Thor</h5>
                    </li>
                    <li>
                        <img onClick={() => setcharacter(5)} className={`${character === 5 ? "character_selected_img" : null}`} src={iron} alt="iron man" />
                        <h5 className={`${character === 5 ? "character_selected_text" : null}`}>Iron Man</h5>

                    </li>
                </ul>
            </div>
            <div className='home_footer d-flex justify-content-end container'>
                {
                    character >= 1 && character <= 5 &&
                    <button className='btn btn-danger'>Next</button>
                }
            </div>
        </div>
    );
}

export default Home;
