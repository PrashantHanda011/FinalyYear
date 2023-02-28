import React from 'react';

const QuestionPage = ({ data, i }) => {
    console.log(data)
    return (
        <div className='question_box'>
            <h5>Q{i}. {data?.question}</h5>
            <div className='d-flex flex-column'>
                <ul>

                    {
                        data?.options.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default QuestionPage;
