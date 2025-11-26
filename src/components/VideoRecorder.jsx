import { useState, useRef } from "react";

function VideoRecorder({ formData }) {
  // formData = { name, email, phone, message, cvFile }
  const [recording, setRecording] = useState(false);
  const [videoBlob, setVideoBlob] = useState(null);
  const mediaRecorderRef = useRef(null);
  const videoStreamRef = useRef(null);

  // Start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      videoStreamRef.current = stream;

      mediaRecorderRef.current = new MediaRecorder(stream);
      const chunks = [];

      mediaRecorderRef.current.ondataavailable = (e) => chunks.push(e.data);

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks, { type: "video/mp4" });
        setVideoBlob(blob);
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (err) {
      alert("Kameråtkomst blockerad!");
      console.error(err);
    }
  };

  // Stop recording
  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    videoStreamRef.current.getTracks().forEach((track) => track.stop());
    setRecording(false);
  };

  // Send video + CV form to backend
  const sendVideoAndCV = async () => {
    if (!videoBlob) return alert("Inget video inspelat!");

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("message", formData.message);

    if (formData.cvFile) form.append("cv", formData.cvFile);
    form.append("video", videoBlob, "cv-video.mp4");

    try {
      const response = await fetch("http://localhost:5000/api/request", {
        method: "POST",
        body: form,
      });

      const result = await response.json();
      if (result.success) alert("Ansökan skickad!");
      else alert("Kunde inte skicka ansökan: " + result.message);
    } catch (err) {
      console.error(err);
      alert("Fel vid skickande av video.");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {!recording ? (
        <button onClick={startRecording}>🎥 Start</button>
      ) : (
        <button onClick={stopRecording}>⛔ Stoppa inspelning</button>
      )}

      {videoBlob && (
        <div style={{ marginTop: "20px" }}>
          <h4>Förhandsgranska din video:</h4>
          <video src={URL.createObjectURL(videoBlob)} controls width="400" />
          <br />
          <button onClick={sendVideoAndCV} style={{ marginTop: "10px" }}>
            📧 Skicka CV + Video
          </button>
        </div>
      )}
    </div>
  );
}

export default VideoRecorder;
