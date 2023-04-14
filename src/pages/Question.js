import React, { useRef, useState } from 'react';
import '../Styles/Question.css'
import '../Styles/common/common.css'
import Description from './description/Description1';
import CharacterPage from './CharacterPage';
import d1 from '../Assets/description/d1.png'
import d2 from '../Assets/description/d2.png'
import d3 from '../Assets/description/d3.png'
import d4 from '../Assets/description/d4.png'
import d5 from '../Assets/description/d5.png'
import d6 from '../Assets/description/d6.png'
import question from '../Components/Question.json'
import AudioRecorder from '../Components/Audio';
import img from '../Assets/description/final.png'
import img1 from '../Assets/description/Img1.jpeg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import finish from '../Assets/description/finish.png'
const Question = () => {
  const [ShowForm, setShowForm] = useState(3);

  const [Global, setGlobal] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    profession: "",
    character: "",
    question: [],
    media: {
      images: []
    }
  });
  const [textArea, settextArea] = useState();
  const [ImagetextArea, setImagetextArea] = useState();
  const [page, setpage] = useState(0);
  const [QuestionNo, setQuestionNo] = useState(0);

  const [handWritingImages, sethandWritingImages] = useState({
    img1: "",
    img2: "",
    img3: ""
  });

  const handleQuestion = (item) => {
    console.log(item)
    if (Global?.question?.filter((item) => item.question == question[QuestionNo]?.question).length === 0) {
      setGlobal({ ...Global, question: [...Global?.question, { question: question[QuestionNo]?.question, answer: item, type: question[QuestionNo]?.survey }] })
    } else {
      const data = Global?.question
      const newarr = data?.filter((item) => item?.question != question[QuestionNo]?.question)
      newarr?.push({ question: question[QuestionNo]?.question, answer: item, type: question[QuestionNo]?.survey })
      setGlobal({ ...Global, question: newarr })
    }
  }
  const handleTextArea = (e) => {
    settextArea(e.target.value)
  }
  const handleImageTextArea = (e) => {
    setImagetextArea(e.target.value)
  }
  const handleTextSubmit = () => {
    setGlobal({ ...Global, question: [...Global?.question, { question: question[QuestionNo]?.question, answer: textArea, type: question[QuestionNo]?.survey }] })
    settextArea("")
    setQuestionNo(QuestionNo + 1)
  }
  const handleImageTextSubmit = () => {
    setGlobal({ ...Global, question: [...Global?.question, { question: "Express your thoughts on this image.", answer: ImagetextArea, type: "Image" }] })
    setImagetextArea("")
    setQuestionNo(QuestionNo + 1)
  }

  const [AudioStatus, setAudioStatus] = useState(false);
  const AudioStatusHandler = (val) => {
    setAudioStatus(val)
  }
  const handleAudioSubmit = () => {
    setGlobal({ ...Global, question: [...Global?.question, { question: question[QuestionNo]?.question, answer: "audio", type: question[QuestionNo]?.survey }] })
    setAudioStatus(false)
    setQuestionNo(QuestionNo + 1)
  }

  console.log(Global)
  const navigate = useNavigate()
  const handleHandwritingImage = (name, e) => {
    if (name === "img1") {
      sethandWritingImages({ ...handWritingImages, img1: e.target.files[0] })
    } else if (name === "img2") {
      sethandWritingImages({ ...handWritingImages, img2: e.target.files[0] })
    } else {
      sethandWritingImages({ ...handWritingImages, img3: e.target.files[0] })
    }

  }


  const imgRef1 = useRef()
  const imgRef2 = useRef()
  const imgRef3 = useRef()

  const handleImageRef = (name) => {
    if (name === "img1") {
      imgRef1.current.click()
    } else if (name === "img2") {
      imgRef2.current.click()
    } else {
      imgRef3.current.click()
    }
  }


  // final

  const handleFinalSubmit = async () => {
    try {
      setpage(8)
      setShowForm(0)
      const formdata = new FormData();
      formdata.append("file", handWritingImages?.img1)
      formdata.append("upload_preset", "FinalYear")
      const result1 = await axios.post("https://api.cloudinary.com/v1_1/sinox-technology/image/upload", formdata)

      const formdata2 = new FormData();
      formdata2.append("file", handWritingImages?.img2)
      formdata2.append("upload_preset", "FinalYear")
      const result2 = await axios.post("https://api.cloudinary.com/v1_1/sinox-technology/image/upload", formdata2)
      const formdata3 = new FormData();
      formdata3.append("file", handWritingImages?.img3)
      formdata3.append("upload_preset", "FinalYear")
      const result3 = await axios.post("https://api.cloudinary.com/v1_1/sinox-technology/image/upload", formdata3)
      console.log(result1, result2, result3)
      const arr = [result1?.data?.secure_url, result2?.data?.secure_url, result3?.data?.secure_url]
      setGlobal({ ...Global, media: { ...Global.media, images: arr } })
      //navigate('/result')
    } catch (error) {
      console.log(error)
    }
  }

  const HandleInputChange = (e) => {
    const { name, value } = e.target
    setGlobal({ ...Global, [name]: value })
  }



  //api post


  const handleAPiPost = async (e) => {
    e.preventDefault()
    console.log("ok")
    try {
      await axios.post("http://localhost:8080/api/user", Global)
      setShowForm(3)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center bg-dark h-100 w-100 Question_wrapper'>
      {/* step1 */}
      {
        page === 0 && <Description step={1} page={1}
          description="Once you click on the start icon, you will be shown 5 different fictional famous characters. These all characters are different unique mixes of the BIG 5 personality traits (extroversion, agreeableness, openness, conscientiousness, and neuroticism). Choose the character which you thinks resembles your personality the most. You can only pick one character so take a few minutes to think deeply and then choose 1. Once done, click on the next page icon."
          head="Choose a Character" img={d1} setpage={setpage} />
      }
      {
        page === 1 &&
        <CharacterPage Global={Global} setGlobal={setGlobal} setpage={setpage} />
      }

      {/* step2 */}
      {
        page === 2 &&
        <Description description={"Once you click on the start icon, you will be shown 16 different MCQ questions which we have curated after our vigorous research. You can answer these questions by choosing 1 of the 5 options which are the following: strongly disagree, disagree, neutral, agree, strongly agree. So take a moment to reflect and then select the option which is best according to your personality. These questions are pretty personal in nature but we request you share your unbiased answers to all these questions so that we can accurately assess your personality. We respect your privacy so your response to these questions will be anonymous and won't be shared publically. Once done, click on the next page icon."} step={2} page={3} head="Short Survey" img={d2} setpage={setpage} />
      }
      {
        (page === 3 && question[QuestionNo]?.survey === "short") &&
        <>
          <div className='container p-5'>
            <h2>Q {QuestionNo + 1}. {question[QuestionNo]?.question}</h2>

            <div className='d-flex col-10'>
              <div className='d-flex flex-column mt-4 justify-content-center w-50 align-items-center '>
                {
                  question[QuestionNo]?.options?.map((item) => {
                    return <button onClick={() => {
                      handleQuestion(item)
                    }} className={`align-self-start w-100 py-3 px-3 rounded my-2 ${Global?.question[QuestionNo]?.answer === item ? `btn-common_selected` : `btn-common`}`}>{item}</button>
                  })
                }

              </div>
              <div className='d-flex align-items-start ps-5 mb-2 align-self-end'>
                {
                  !!Global?.question[QuestionNo]?.answer &&
                  <button className='btn-common px-3 mx-4 py-2 rounded'
                    onClick={() => setQuestionNo(QuestionNo + 1)}
                  >submit</button>
                }
              </div>
            </div>
          </div>
        </>
      }
      {/* step3 */}
      {
        (question[QuestionNo]?.survey === "long" && page === 3) &&
        <Description description={"Once you click on the start icon, you will be shown 3 different questions which are subjective in nature. You can answer these questions by writing 5-20 sentences to give us enough context about how you think and feel in a certain scenario. Please do not answer these questions in hurry, take some time to reflect and calm your mind, then answer these questions. Once done, click on the next page icon."} step={3} page={4} head="Long Survey" img={d3} setpage={setpage} />
      }
      {
        (page === 4 && question[QuestionNo]?.survey === "long") &&
        <>
          <div className='container p-5'>
            <h2 >Q {QuestionNo + 1}. {question[QuestionNo]?.question}</h2>

            <div className=' '>
              <div className='d-flex flex-column mt-4 justify-content-center align-items-center w-100 col-7 '>
                {
                  question[QuestionNo]?.survey === "long" &&
                  <textarea name="" id="" maxlength="150" value={textArea} onChange={handleTextArea} className='w-100 bg-dark p-3 textarea_border rounded' placeholder='Type Your answer here' rows="4"></textarea>
                }
              </div>
              <div className='d-flex justify-content-end mt-4'>
                {
                  !!textArea &&
                  <button className='btn-common px-3 py-2 rounded'
                    onClick={handleTextSubmit}
                  >submit</button>
                }
              </div>
            </div>
          </div>
        </>
      }
      {/* step 4 */}
      {
        (question[QuestionNo]?.survey === "audio" && page === 4) &&
        <Description step={4} description={"Once you click on the start icon, you will be shown 1 question. You have to answer that question by recording a short 1-5 minute audio of your voice. Once done, click on the next page icon."} page={5} head="Audio Analysis" img={d4} setpage={setpage} />
      }
      {
        (page === 5 && question[QuestionNo]?.survey === "audio") &&
        <>
          <div className='container d-flex flex-column p-5 '>
            <h2>Q9. At social events you rarely try to introduce yourself to new people and mostly talk to the ones you already know.</h2>
            <AudioRecorder Audiorecord={AudioStatusHandler} />
            <div className='d-flex justify-content-end mt-4'>
              {
                AudioStatus &&
                <button className='btn-common px-3 py-2 rounded'
                  onClick={handleAudioSubmit}
                >submit</button>
              }
            </div>
          </div>
        </>
      }
      {
        (page === 5 && question[QuestionNo]?.survey != "audio") &&
        <Description step={5} description={"Once you click on the start icon, you will be shown 1 image. You have to describe how that image makes you feel by writing 5-20 sentences. Once done, click on the next page icon."} page={6} head="Image Analysis" img={d5} setpage={setpage} />
      }
      {
        (page === 6 && QuestionNo === 8) &&
        <>
          <div className='container d-flex flex-column align-items-center p-5 '>
            <h2>Q {QuestionNo + 1}. Express your thoughts on this image.</h2>
            <div className='mt-2'>
              <img src={img1} alt="img" className='surveryImage' />
            </div>
            <div className='d-flex flex-column mt-4 justify-content-center align-items-center w-100 col-7 '>
              {
                <textarea name="" id="" maxlength="150" value={ImagetextArea} onChange={handleImageTextArea} className='w-100 bg-dark p-3 textarea_border rounded' placeholder='Type Your answer here' rows="4"></textarea>
              }
            </div>
            <div className='d-flex justify-content-end mt-4'>
              {
                !!ImagetextArea &&
                <button className='btn-common px-3 py-2 rounded'
                  onClick={handleImageTextSubmit}
                >submit</button>
              }
            </div>
          </div>
        </>
      }


      {
        (page === 6 && QuestionNo === 9) &&
        <Description step={5} description={"Once you click on the start icon, you will be shown 1 image. You have to describe how that image makes you feel by writing 5-20 sentences. Once done, click on the next page icon."} page={7} head="Handwriting Analysis" img={d6} setpage={setpage} />
      }
      {
        (page === 7 && QuestionNo === 9) &&
        <>
          <div className='container d-flex flex-column align-items-center p-5 '>
            <h2>Q {QuestionNo + 1}. Upload Images of your handwriting</h2>
            <div className='d-flex gap-4 flex-column'>
              <div>
                <button className='btn-common px-3 py-2 me-5 rounded' onClick={() => handleImageRef("img1")} >Upload Image</button>
                <img src={!!handWritingImages?.img1 && URL.createObjectURL(handWritingImages?.img1)} height={100} width={200} alt="img" />
              </div>
              <div>
                <button className='btn-common px-3 py-2 me-5 rounded' onClick={() => handleImageRef("img2")}>Upload Image</button>
                <img src={!!handWritingImages?.img2 && URL.createObjectURL(handWritingImages?.img2)} height={100} width={200} alt="img" />
              </div>
              <div>
                <button className='btn-common px-3 py-2 me-5 rounded' onClick={() => handleImageRef("img3")}>Upload Image</button>
                <img src={!!handWritingImages?.img3 && URL.createObjectURL(handWritingImages?.img3)} height={100} width={200} alt="img" />
              </div>


              <input type="file" ref={imgRef1} onChange={(e) => handleHandwritingImage("img1", e)} className='d-none' />
              <input type="file" ref={imgRef2} onChange={(e) => handleHandwritingImage("img2", e)} className='d-none' />
              <input type="file" ref={imgRef3} onChange={(e) => handleHandwritingImage("img3", e)} className='d-none' />
            </div>

            <div className='d-flex justify-content-end mt-5'>
              {
                (!!handWritingImages.img1 && !!handWritingImages.img2 && !!handWritingImages.img3) &&
                <button className='btn-common px-3 py-2 mt-3 rounded'
                  onClick={handleFinalSubmit}
                >submit</button>
              }
            </div>

          </div>
        </>
      }

      {
        page === 8 &&
        <div className='d-flex align-items-center col-12 justify-content-center'>
          {
            ShowForm === 1 ?
              <>
                <form className='col-4 border p-4 rounded'>
                  <div class="form-group mb-3">
                    <label for="exampleFormControlInput1">Name</label>
                    <input onChange={HandleInputChange} name="name" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Name" />
                  </div>
                  <div class="form-group mb-3">
                    <label for="exampleFormControlInput1">Age</label>
                    <input onChange={HandleInputChange} name="age" type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Age" />
                  </div>
                  <div class="form-group mb-3">
                    <label for="exampleFormControlSelect1">Gender</label>
                    <select class="form-control" name="gender" onChange={HandleInputChange} id="exampleFormControlSelect1">
                      <option className='text-dark'>Male</option>
                      <option className='text-dark'>Female</option>
                      <option className='text-dark'>Others</option>
                    </select>
                  </div>
                  <div class="form-group mb-3">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input onChange={HandleInputChange} name="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />
                  </div>
                  <div class="form-group mb-3">
                    <label for="exampleFormControlInput1">Profession</label>
                    <input onChange={HandleInputChange} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Profession" />
                  </div>
                  <div className='d-flex justify-content-center rounded w-100 my-3 mt-4 rounded'>
                    <button type="button" onClick={handleAPiPost} className='btn-common px-4 py-3 rounded'>Submit </button>
                  </div>
                </form>
              </>
              :
              ShowForm === 0 ?
                <>
                  <div className='result-image-wrapper col-6 px-5'>
                    <img src={img} alt="" />
                  </div>
                  <div className='col-6 result-content'>
                    <h2>Hurray </h2>
                    <h6>You Have Completed the Assesment</h6>
                    <button className='btn-common p-3 rounded' onClick={() => setShowForm(1)}>Get Result</button>
                  </div>
                </> : <>
                  <div className="col-6">
                    <h1 className='text-center'>
                      All Done!
                    </h1>
                    <img src={finish} className="w-75" alt="finish" />
                  </div>
                </>
          }
        </div>
      }


    </div>
  );
}

export default Question;
