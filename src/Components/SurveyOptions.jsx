import React from 'react';

const SurveyOptions = ({ handleSurvey, content }) => {
    console.log(content.surveyOption)
    return (
        <div className='survey_option d-flex gap-5 w-100 justify-content-between  '>
            <span onClick={() => handleSurvey('short')} className={content.surveyOption == "short" && `selected_survey`}>Short Survey</span>
            <span onClick={() => handleSurvey('long')} className={content.surveyOption == "long" && `selected_survey`}>Long Survey</span>
        </div>
    );
}

export default SurveyOptions;
