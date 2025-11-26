import React, { useState, useRef } from 'react';

function VideoRecorder() {
  const [recording, setRecording] = useState(false);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      mediaRecorderRef.current = new MediaRecorder(stream);
      setRecording(true);
    } catch (error) {
      console.error('Fel vid åtkomst till kamera:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  return (
    <div className='video-recorder card'>
      <div className='card-body'>
        <h5 className='card-title'>Spela in video CV</h5>
        <video ref={videoRef} autoPlay muted className='w-100' style={{ maxHeight: '300px' }} />
        <div className='mt-3'>
          {!recording ? (
            <button className='btn btn-primary' onClick={startRecording}>
              Börja spela in
            </button>
          ) : (
            <button className='btn btn-danger' onClick={stopRecording}>
              Stoppa inspelning
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoRecorder;
