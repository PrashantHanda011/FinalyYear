import React, { useState, useRef } from 'react';

const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [paused, setPaused] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);

  const mediaRecorder = useRef(null);
  const chunks = useRef([]);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        mediaRecorder.current = new MediaRecorder(stream);

        mediaRecorder.current.addEventListener('dataavailable', event => {
          chunks.current.push(event.data);
        });

        mediaRecorder.current.addEventListener('stop', () => {
          const audioBlob = new Blob(chunks.current, { type: 'audio/webm' });
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
    mediaRecorder.current?.stop();
    setRecording(false);
    const now = new Date();
    const fileName = `audio-recording-${now.toISOString()}.webm`;
    localStorage.setItem(fileName, audioBlob);
  };

  const handleDownloadClick = () => {
    const a = document.createElement('a');
    a.href = downloadLink;
    a.download = 'recorded-audio.webm';
    a.click();
  };

  

  const handlePlaybackClick = () => {
    const audioElement = document.getElementById('recorded-audio');
    audioElement.src = downloadLink;
    audioElement.play();
  };

  return (
    <div>
      <button onClick={startRecording} disabled={recording}>Start Recording</button>
      {/* <button onClick={pauseRecording} disabled={!recording || paused}>Pause Recording</button>
      <button onClick={resumeRecording} disabled={!recording || !paused}>Resume Recording</button> */}
      <button onClick={stopRecording} disabled={!recording}>Stop Recording</button>
      {downloadLink && (
        <>
          <button onClick={handleDownloadClick}>Download Audio</button>
          {/* <button onClick={handleSaveClick}>Save to Local Storage</button> */}
          <button onClick={handlePlaybackClick}>Play Recorded Audio</button>
          <audio id="recorded-audio" controls></audio>
        </>
      )}
    </div>
  );
};

export default AudioRecorder;
