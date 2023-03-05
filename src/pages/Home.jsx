import React, { useState } from 'react';
import CharacterPage from '../Components/CharacterPage';
import Progressbar from '../Components/Progressbar';
import QuestionPage from '../Components/QuestionPage';
import '../Styles/home.css'
import question from '../Components/Question.json'
const Home = () => {

  const [pageNo, setpageNo] = useState(0);
  const [questionNo, setquestionNo] = useState(0);
  const [Global, setGlobal] = useState({
    name: "",
    character: "",
    question: []
  });


  const handleQuestionAnswer = (value) => {
    setGlobal({ ...Global, question: [value] })
  }

  return (
    <div className='bg-dark  '>
      <div className=' w-100 progress_wrapper'>
        <Progressbar />
        <hr className='mt-0 pb-0' />
      </div>

      {/* //questions */}

      <div className='container-fluid home_wrapper '>
        {
          pageNo == 0 ?
            <CharacterPage setGlobal={setGlobal} Global={Global} />
            : pageNo >= 1 ?
              <QuestionPage data={question[questionNo + 1]} index={questionNo + 1} handleQuestionAnswer={handleQuestionAnswer} />
              : null
        }
      </div>

      <div className='next_btn_div container '>
        {
          !!Global.character &&
          <button onClick={() => {
            setpageNo(pageNo + 1)
            pageNo >= 1 && setquestionNo(questionNo + 1)
          }

          }>Next </button>
        }
      </div>

    </div>
  );
}

export default Home;
