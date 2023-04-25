import React, { useState, useRef } from "react";
import '../Styles/Audio.css'
import { BsPlayFill } from 'react-icons/bs'
import { BsPauseFill } from 'react-icons/bs'
import { BsStopFill } from 'react-icons/bs'
import { BsDownload } from 'react-icons/bs'
import { RxResume } from 'react-icons/rx'
const AudioRecorder = ({ Audiorecord, Global, setGlobal }) => {
  const [recording, setRecording] = useState(false);
  const [paused, setPaused] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);

  const mediaRecorder = useRef(null);
  const chunks = useRef([]);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      mediaRecorder.current = new MediaRecorder(stream);

      mediaRecorder.current.addEventListener("dataavailable", (event) => {
        chunks.current.push(event.data);
      });

      mediaRecorder.current.addEventListener("stop", () => {
        const audioBlob = new Blob(chunks.current, { type: "audio/webm" });
        setGlobal({ ...Global, media: { ...Global?.media, audioURL: audioBlob } })

        setAudioBlob(audioBlob);
        chunks.current = [];
        setDownloadLink(URL.createObjectURL(audioBlob));
      });

      mediaRecorder.current.start();
      setRecording(true);
    });
  };

  const pauseRecording = () => {
    mediaRecorder.current?.pause();
    setPaused(true);
  };

  const resumeRecording = () => {
    mediaRecorder.current?.resume();
    setPaused(false);
  };

  const stopRecording = () => {
    // setGlobal({ ...Global, media: { ...Global?.media, audioURL: audioBlob } })
    mediaRecorder.current?.stop();
    setRecording(false);
    Audiorecord(true)
    const now = new Date();
    const fileName = `audio-recording-${now.toISOString()}.webm`;
    localStorage.setItem(fileName, audioBlob);
    // handleAudioSubmit(audioBlob)
  };

  const handleDownloadClick = () => {
    const a = document.createElement("a");
    a.href = downloadLink;
    a.download = "recorded-audio.webm";
    a.click();
  };

  const handlePlaybackClick = () => {
    const audioElement = document.getElementById("recorded-audio");
    audioElement.src = downloadLink;
    audioElement.play();
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-start align-items-start mt-4">
        <div className="d-flex justify-content-start flex-wrap">
          <button className={`btn-audio  rounded ${recording && `btn-audio-disabled`}`} onClick={startRecording} disabled={recording}>
            <span><BsPlayFill style={{ color: "white" }} fontSize={28} /></span> <span>Start Recording</span>
          </button>
          {/* <button className={`btn-audio rounded ${!recording || paused && `btn-audio-disabled`}`} onClick={pauseRecording} disabled={!recording || paused} >
            <BsPauseFill style={{ color: "white" }} fontSize={28} />Pause Recording
          </button>
          <button className={`btn-audio rounded ${!recording || paused && `btn-audio-disabled`}`} onClick={resumeRecording} disabled={!recording || !paused}>
            <RxResume fontSize={28} style={{ marginRight: "5px", fontWeight: 600 }} /> Resume Recording
          </button> */}
          <button className={`btn-audio rounded ${!recording && `btn-audio-disabled`}`} onClick={stopRecording} >
            <BsStopFill style={{ color: "white" }} fontSize={28} /> Stop Recording
          </button>
          {downloadLink && (
            <>
              <button className="btn-audio rounded" onClick={handleDownloadClick}>Download Audio</button>
              <button className="btn-audio rounded" onClick={handlePlaybackClick}>Play Recorded Audio</button>

            </>
          )}
        </div>
        <div>
          <audio id="recorded-audio" controls></audio>
        </div>
      </div>
    </>
  );
};

export default AudioRecorder;
