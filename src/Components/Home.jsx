import React, { useState, useEffect } from 'react';
import '../Styles/home.css'
import captain from '../Assets/frontpage/captain.jpg'
import doctor from '../Assets/frontpage/doctor.jfif'
import scarlet from '../Assets/frontpage/scarlet.jfif'
import thor from '../Assets/frontpage/thor.jfif'
import iron from '../Assets/frontpage/iron.jfif'
import SurveyOptions from './SurveyOptions';
import QuestionPage from './QuestionPage';
import questions from './Question';
const Home = () => {
    const [character, setcharacter] = useState(0);
    const [page, setpage] = useState(0);
    const [content, setcontent] = useState({
        surveyOption: "",
        questions: []
    })
    const [questionData, setquestionData] = useState(undefined);

    const handleSurvey = (item) => {
        setcontent({ ...content, surveyOption: item })
    }

    useEffect(() => {
        if (page >= 2) {
            setquestionData(questions[page - 2])
        }
    }, [page])
    return (
        <div className='container-fluid p-0 home_box  p-2'>
            {
                page === 0 ? (
                    <div className='character_container '>
                        <h2 className='my-5'>Choose Your Character</h2>
                        <ul className='d-flex  container justify-content-center align-items-center'>
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


                ) : (page === 1 ? (
                    <div className='d-flex justify-content-center align-items-center h-100'><SurveyOptions content={content} handleSurvey={handleSurvey} /></div>) : (
                    page >= 2 && (<QuestionPage data={questionData} i={(page - 2) + 1} />)
                ))
            }
            <div className='home_footer d-flex justify-content-end container'>
                {
                    character >= 1 && character <= 5 &&
                    <button onClick={() => setpage(page + 1)} className='btn btn-danger'>Next</button>
                }
            </div>
        </div>
    );
}

export default Home;