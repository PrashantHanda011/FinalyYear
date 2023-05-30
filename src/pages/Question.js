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
import end from '../Assets/description/end.png'
import question from '../Components/Question.json'
import AudioRecorder from '../Components/Audio';
import img from '../Assets/description/final.png'
import img1 from '../Assets/description/Img1.jpeg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import finish from '../Assets/description/finish.gif'
import Result from './Result';
import FeedbackForm from './Feedback';
import { Toaster, toast } from 'react-hot-toast';
const Question = () => {
  const [ShowForm, setShowForm] = useState(0)
  const [Global, setGlobal] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    profession: "",
    character: "",
    movie: "",
    question: [],
    media: {
      images: [],
      audioURL: ""
    }
  });

  const [submittedEmails, setSubmittedEmails] = useState([]);
  const [textArea, settextArea] = useState();
  const [ImagetextArea, setImagetextArea] = useState();
  const [page, setpage] = useState(-1);
  const [QuestionNo, setQuestionNo] = useState(0);

  const [handWritingImages, sethandWritingImages] = useState({
    img1: "",
    img2: "",
    img3: ""
  });

  const handleQuestion = (item) => {
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
  const handleAudioSubmit = async () => {
    const formdata = new FormData();
    formdata.append("file", Global?.media?.audioURL)
    formdata.append("upload_preset", "FinalYear")
    setAudioStatus(false)
    setQuestionNo(QuestionNo + 1)
    try {
      const result1 = await axios.post("https://api.cloudinary.com/v1_1/sinox-technology/upload", formdata)
      setGlobal({ ...Global, media: { ...Global?.media, audioURL: result1?.data.url } })
    } catch (error) {
      console.log(error)
      // setGlobal({ ...Global, question: [...Global?.question, { question: question[QuestionNo]?.question, answer: "audio", type: question[QuestionNo]?.survey }] })
    }

  }

  const navigate = useNavigate()
  const handleFeedbackClick = () => {
    navigate('/feedback'); // Replace '/feedback' with the path to your feedback page
  };
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

  const handleImageUpload = async () => {
    try {
      setpage(8)
      setShowForm(0)
      const formdata = new FormData();
      formdata.append("file", handWritingImages?.img1)
      formdata.append("upload_preset", "FinalYear")
      const result1 = await axios.post("https://api.cloudinary.com/v1_1/sinox-technology/image/upload", formdata)

      // const formdata2 = new FormData();
      // formdata2.append("file", handWritingImages?.img2)
      // formdata2.append("upload_preset", "FinalYear")
      // const result2 = await axios.post("https://api.cloudinary.com/v1_1/sinox-technology/image/upload", formdata2)
      // const formdata3 = new FormData();
      // formdata3.append("file", handWritingImages?.img3)
      // formdata3.append("upload_preset", "FinalYear")
      // const result3 = await axios.post("https://api.cloudinary.com/v1_1/sinox-technology/image/upload", formdata3)
      // , result2?.data?.secure_url, result3?.data?.secure_url
      const arr = [result1?.data?.secure_url]
      setGlobal({ ...Global, media: { ...Global.media, images: arr } })
      // navigate('/result')
    } catch (error) {
      console.log(error)
    }
  }

  const HandleInputChange = (e) => {
    const { name, value } = e.target
    setGlobal({ ...Global, [name]: value })
  }

  console.log(Global.question.slice(7, 8))

  //api post


  // const handleAPiPost = async (e) => {
  //   e.preventDefault()
  //   try {
  //     // http://localhost:3000/api/user
  //     // https://mindology.onrender.com/api/user
  //     await axios.post("https://mindology.onrender.com/api/user", Global)
  //     setShowForm(3)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const handleAPiPost = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const existingUser = await axios.get(`https://mindology.onrender.com/api/user?email=${Global.email}`);
  //     if (existingUser.data.length > 0) {
  //       alert("This email is already registered");
  //       return;
  //     }

  //     await axios.post("https://mindology.onrender.com/api/user", Global);
  //     setShowForm(3);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  const [APIResult, setAPIResult] = useState("");
  const handleAPiPost = async (e) => {
    e.preventDefault();
    console.log(Global)
    try {
      if (!!Global?.name && !!Global?.email && !!Global?.profession) {
        setShowForm(2);
        const resp = await axios.post('https://mindology2.onrender.com/api/user', Global);
        setAPIResult(resp?.data)
        setShowForm(3);
        console.log(resp)
      } else {
        toast.error("Please Fill the Required Fields", {
          toastId: 'success1',
        })
        return;
      }
      // Add the new response
    } catch (error) {
      setShowForm(1)
      toast.error("A user already Exist with this email id!",)
      console.log(error);
    }
  }




  return (
    <div className='container-fluid d-flex justify-content-center align-items-center bg-dark h-100 w-100 Question_wrapper'>
      {/* step1 */}
      {
        page === -1 && <>
          <div>
            <form className=' border p-4 rounded w-100  '>
              <label for="exampleFormControlInput1 " className='mb-1'>Enter Your Age<span className='text-danger'>*</span></label>
              <input className='w-100 text-dark' style={{ width: "20vw" }} onChange={(e) => setGlobal({ ...Global, age: e.target.value })} value={Global?.age} max={100} min={10} required name="age" type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Age" />
              {
                !!Global?.age &&
                <div className='d-flex justify-content-center mt-3'>
                  <button className='btn-common p-2 rounded' onClick={() => setpage(0)}>Submit</button>
                </div>
              }
            </form>
          </div>
        </>
      }
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
                  question[QuestionNo]?.options?.map((item, index) => {
                    return <button key={index} onClick={() => {
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
                  <textarea name="" id="" maxLength="300" value={textArea} onChange={handleTextArea} className='w-100 bg-dark p-3 textarea_border rounded' placeholder='Type Your answer here in 150 words' rows="4"></textarea>
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
            <AudioRecorder Audiorecord={AudioStatusHandler} handleAudioSubmit={handleAudioSubmit} Global={Global} setGlobal={setGlobal} />
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
              {/* <div>
                <button className='btn-common px-3 py-2 me-5 rounded' onClick={() => handleImageRef("img2")}>Upload Image</button>
                <img src={!!handWritingImages?.img2 && URL.createObjectURL(handWritingImages?.img2)} height={100} width={200} alt="img" />
              </div>
              <div>
                <button className='btn-common px-3 py-2 me-5 rounded' onClick={() => handleImageRef("img3")}>Upload Image</button>
                <img src={!!handWritingImages?.img3 && URL.createObjectURL(handWritingImages?.img3)} height={100} width={200} alt="img" />
              </div> */}


              <input type="file" ref={imgRef1} onChange={(e) => handleHandwritingImage("img1", e)} className='d-none' />
              {/* <input type="file" ref={imgRef2} onChange={(e) => handleHandwritingImage("img2", e)} className='d-none' />
              <input type="file" ref={imgRef3} onChange={(e) => handleHandwritingImage("img3", e)} className='d-none' /> */}
            </div>

            <div className='d-flex justify-content-end mt-5'>
              {/* && !!handWritingImages.img2 && !!handWritingImages.img3 */}
              {
                (!!handWritingImages.img1) &&
                <button className='btn-common px-3 py-2 mt-3 rounded'
                  onClick={handleImageUpload}
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
              </> :
              ShowForm === 1 ?
                <>
                  <form className='col-4 border p-4 rounded' onSubmit={handleAPiPost}>
                    <div class="form-group mb-3 w-100">
                      <label for="exampleFormControlInput1">Name <span className='text-danger'>*</span></label>
                      <input onChange={HandleInputChange} value={Global?.name} required name="name" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Name" />
                    </div>
                    <div class="form-group mb-3 w-100">
                      <label for="exampleFormControlSelect1">Gender</label>
                      <select class="form-control" name="gender" onChange={HandleInputChange} id="exampleFormControlSelect1">
                        <option className='text-dark'>{!!Global?.gender ? Global?.gender : "Select a Gender"}</option>
                        <option className='text-dark' value="male">Male</option>
                        <option className='text-dark' value="female">Female</option>
                        <option className='text-dark' value="others">Others</option>
                      </select>
                    </div>
                    <div class="form-group mb-3 w-100">
                      <label for="exampleFormControlInput1">Email address <span className='text-danger'>*</span></label>
                      <input onChange={HandleInputChange} name="email" value={Global?.email} required type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />
                    </div>
                    <div class="form-group mb-3 w-100">
                      <label for="exampleFormControlInput1">Profession <span className='text-danger'>*</span></label>
                      <input onChange={HandleInputChange} type="text" value={Global?.profession} required name="profession" class="form-control" id="exampleFormControlInput1" placeholder="Enter Profession" />
                    </div>
                    <div className='d-flex justify-content-center rounded w-100 my-3 mt-2 rounded'>
                      <button type="button" onClick={handleAPiPost} className='btn-common px-4 py-3 rounded'>Submit </button>
                    </div>
                  </form>
                </>
                :
                ShowForm === 2 ?
                  <>
                    <div className="col-6">
                      <img src={finish} className="w-75" alt="finish" />

                      <h1 className='text-center mt-2'>
                        Getting Result ...
                      </h1>
                    </div>
                  </>
                  :
                  ShowForm === 3 ?
                    <Result APIResult={APIResult} showForm={ShowForm} setShowForm={setShowForm} />
                    :
                    ShowForm === 4 ?
                      <FeedbackForm setShowForm={setShowForm} APIResult={APIResult} />
                      :
                      <div className='col-6'>
                        <h3 className='text-center '>The End</h3>
                        <div className='d-flex align-items-center gap-5'>
                          <div className='col-6'>

                            <img src={end} className='w-100' alt="the end" />
                          </div>
                          <div className='col-6'>
                            <button className='btn-common p-2 rounded' onClick={() => setShowForm(3)}>Show results</button>
                          </div>
                        </div>
                      </div>
          }
        </div>
      }

      <Toaster
        position="top-right"

      />
    </div>
  );
}

export default Question;
