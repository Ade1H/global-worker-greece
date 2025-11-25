import { useState, useRef } from "react";

function VideoRecorder() {
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const videoStreamRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoStreamRef.current = stream;

      mediaRecorderRef.current = new MediaRecorder(stream);
      const chunks = [];

      mediaRecorderRef.current.ondataavailable = (e) => chunks.push(e.data);

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks, { type: "video/mp4" });
        setVideoURL(URL.createObjectURL(blob));
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (err) {
      alert("Camera access blocked!");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    videoStreamRef.current.getTracks().forEach((track) => track.stop());
    setRecording(false);
  };

  return (
    <div>
      {!recording ? (
        <button onClick={startRecording}>🎥 Start Recording</button>
      ) : (
        <button onClick={stopRecording}>⛔ Stop Recording</button>
      )}

      {videoURL && (
        <div style={{ marginTop: "20px" }}>
          <h4>Your Video:</h4>
          <video src={videoURL} controls width="300" />
        </div>
      )}
    </div>
  );
}

export default VideoRecorder;
