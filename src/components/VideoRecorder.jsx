import React, { useState, useRef } from 'react';

function VideoRecorder() {
  const [recording, setRecording] = useState(false);
  const [recordedVideo, setRecordedVideo] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const recordedChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 1280, height: 720 }, 
        audio: true 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      streamRef.current = stream;
      recordedChunksRef.current = [];
      
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'video/webm;codecs=vp9,opus'
      });
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
        const videoURL = URL.createObjectURL(blob);
        setRecordedVideo(blob);
        
        // Create a video element to show the recorded video
        if (videoRef.current) {
          videoRef.current.srcObject = null;
          videoRef.current.src = videoURL;
          videoRef.current.controls = true;
        }
      };
      
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start(1000); // Collect data every second
      setRecording(true);
      
    } catch (error) {
      console.error('Fel vid åtkomst till kamera:', error);
      alert('Kunde inte komma åt kameran. Kontrollera att du har gett tillstånd.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      setRecording(false);
    }
  };

  const uploadVideo = async () => {
    if (!recordedVideo) return;
    
    setUploading(true);
    
    const formData = new FormData();
    formData.append('video', recordedVideo, 'video-cv.webm');
    formData.append('name', 'Video CV');
    formData.append('email', 'video@example.com');
    formData.append('message', 'Video CV skickat från webbplatsen');

    try {
      const response = await fetch('http://localhost:5000/api/send-video', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setUploaded(true);
      } else {
        alert('Kunde inte skicka video: ' + result.message);
      }
    } catch (err) {
      console.error('Upload error:', err);
      alert('Kunde inte skicka video. Kontrollera att backend körs.');
    } finally {
      setUploading(false);
    }
  };

  const resetRecorder = () => {
    setRecording(false);
    setRecordedVideo(null);
    setUploaded(false);
    if (videoRef.current) {
      videoRef.current.srcObject = null;
      videoRef.current.src = '';
      videoRef.current.controls = false;
    }
  };

  return (
    <div className='video-recorder card'>
      <div className='card-body'>
        <h5 className='card-title'>Spela in video CV</h5>
        
        {uploaded ? (
          <div className='alert alert-success'>
            <h6>✅ Video CV skickat!</h6>
            <p>Din video har skickats till Johan Karlsson.</p>
            <button 
              className='btn btn-secondary'
              onClick={resetRecorder}
            >
              Spela in ny video
            </button>
          </div>
        ) : (
          <>
            <video 
              ref={videoRef} 
              autoPlay 
              muted 
              className='w-100 rounded border' 
              style={{ maxHeight: '300px', backgroundColor: '#000' }}
            />
            
            <div className='mt-3'>
              {!recordedVideo ? (
                <div>
                  {!recording ? (
                    <button 
                      className='btn btn-primary me-2'
                      onClick={startRecording}
                    >
                      🎥 Börja spela in
                    </button>
                  ) : (
                    <button 
                      className='btn btn-danger'
                      onClick={stopRecording}
                    >
                      ⏹️ Stoppa inspelning
                    </button>
                  )}
                </div>
              ) : (
                <div>
                  <button 
                    className='btn btn-success me-2'
                    onClick={uploadVideo}
                    disabled={uploading}
                  >
                    {uploading ? 'Skickar...' : '📤 Skicka video CV'}
                  </button>
                  <button 
                    className='btn btn-outline-secondary'
                    onClick={resetRecorder}
                  >
                    🔄 Spela om
                  </button>
                </div>
              )}
            </div>
            
            <div className='mt-2'>
              <small className='text-muted'>
                {!recordedVideo 
                  ? 'Klicka "Börja spela in" för att starta videoinspelning' 
                  : 'Granska din video och klicka "Skicka video CV"'}
              </small>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default VideoRecorder;
