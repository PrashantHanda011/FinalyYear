import React , {useState}from 'react';

const QuestionPage = ({ data, i,handleChangeData }) => {
    console.log(data)
    const [isOptionSelected, setIsOptionSelected] = useState(false);
    const handleOptionClick = () => {
        setIsOptionSelected(true);
      };
    
      const handleNextClick = () => {
        if (isOptionSelected) {
          handleChangeData(1);
        }
      };
      
    
    return (
        <div className='question_box'>
            <h5>Q{i}. {data?.question}</h5>
            <div className='d-flex flex-column'>
                <ul>

                    {
                        data?.options.map((item, index) => {
                            return <li key={index} onClick={handleOptionClick}>{item}</li>
                        })
                    }
                </ul>
            </div>
            <button onClick={handleNextClick}  className='btn btn-danger'  disabled={!isOptionSelected}>Next</button>
        </div>
    );
}

export default QuestionPage;
