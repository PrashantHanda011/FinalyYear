import React, { useState } from 'react';

const QuestionPage = ({ data, i, handleChangeData, handlePage, handleQuestionChange }) => {
    console.log(data)
    const [isOptionSelected, setIsOptionSelected] = useState(false);
    const handleOptionClick = () => {
        setIsOptionSelected(true);
    };

    // const handleNextClick = () => {
    //     if (isOptionSelected) {
    //         handleChangeData(1);
    //     }
    //     setIsOptionSelected(false);
    // };
    const handleAnswer = (value) => {
        handleQuestionChange(value)
        setIsOptionSelected(true)
    }

    return (
        <div className='question_box'>
            <h5>Q{i}. {data?.question}</h5>
            <div className='d-flex flex-column'>
                <ul style={{ listStyle: "none" }}>

                    {
                        data?.options.map((item, index) => {
                            return <li key={index} className="my-1" >
                                <input className="form-check-input me-2 " onClick={handleAnswer} type="radio" name="exampleRadios" id="exampleRadios2" value={item} />
                                {item}</li>
                        })
                    }
                </ul>
            </div>
            {isOptionSelected && (
                <button onClick={handlePage} className="btn btn-danger">
                    Next
                </button>
            )}
        </div>
    );
}

export default QuestionPage;
