import React, { useState } from 'react';
import '../Styles/Question.css'
import '../Styles/common/common.css'
import Description from './description/Description1';
import CharacterPage from './CharacterPage';
import d1 from '../Assets/description/d1.png'
import d2 from '../Assets/description/d2.png'
import question from '../Components/Question.json'
const Question = () => {
  const [Global, setGlobal] = useState({
    character: "",
    question: []
  });
  console.log(Global)
  const [page, setpage] = useState(0);
  const [QuestionNo, setQuestionNo] = useState(0);
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center bg-dark h-100 w-100 Question_wrapper'>
      {
        page === 0 && <Description step={1} page={1} head="Choose a Character" img={d1} setpage={setpage} />
      }
      {
        page === 1 &&
        <CharacterPage Global={Global} setGlobal={setGlobal} setpage={setpage} />
      }
      {
        page === 2 &&
        <Description step={2} page={3} head="Short Survey" img={d2} setpage={setpage} />
      }
      {
        page === 3 &&
        <>
          <div className='hint_box'>
            Hint
          </div>
          <div className='container p-5'>
            <h2>Q {QuestionNo + 1}. {question[QuestionNo]?.question}</h2>
            <div className='d-flex flex-column mt-4 justify-content-center align-items-center w-100'>
              {
                question[QuestionNo]?.options?.map((item) => {
                  return <button onClick={() => {
                    setQuestionNo(QuestionNo + 1)
                    setGlobal({ ...Global, question: [...Global?.question, { question: question[QuestionNo]?.question, answer: item }] })
                  }} className='align-self-start w-50 py-3 px-3 rounded my-2 btn-common'>{item}</button>
                })
              }
              {/* <button className='align-self-start w-50 py-3 px-3 rounded my-2 btn-common'>Agree</button>
              <button className='align-self-start w-50 py-3 px-3 rounded my-2 btn-common'>Neutral</button>
              <button className='align-self-start w-50 py-3 px-3 rounded my-2 btn-common'>Disagree</button>
              <button className='align-self-start w-50 py-3 px-3 rounded my-2 btn-common'>Strongly Disagree</button> */}
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default Question;
