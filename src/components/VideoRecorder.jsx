import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoRecorder.css'; // Vi skapar en separat CSS-fil

function VideoRecorder() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [recording, setRecording] = useState(false);
  const [recordedVideo, setRecordedVideo] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [streamError, setStreamError] = useState(null);
  const [videoDevices, setVideoDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState('');
  const [hovered, setHovered] = useState(false);
  
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const timerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    getVideoDevices();
    
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      clearInterval(timerRef.current);
    };
  }, []);

  const getVideoDevices = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      setVideoDevices(videoDevices);
      if (videoDevices.length > 0) {
        setSelectedDevice(videoDevices[0].deviceId);
      }
    } catch (error) {
      console.error('Error getting video devices:', error);
    }
  };

  const startRecording = async () => {
    try {
      setStreamError(null);
      const constraints = {
        video: { 
          deviceId: selectedDevice ? { exact: selectedDevice } : undefined,
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }, 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        }
      };
      
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      streamRef.current = stream;
      recordedChunksRef.current = [];
      
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'video/webm;codecs=vp9,opus',
        videoBitsPerSecond: 2500000
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
        
        if (videoRef.current) {
          videoRef.current.srcObject = null;
          videoRef.current.src = videoURL;
          videoRef.current.controls = true;
        }
        
        clearInterval(timerRef.current);
        setRecordingTime(0);
      };
      
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start(1000);
      setRecording(true);
      
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
      
    } catch (error) {
      console.error('Error accessing camera:', error);
      setStreamError(
        error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError'
          ? 'Kameraåtkomst nekad. Kontrollera att du har gett tillstånd.'
          : 'Kunde inte komma åt kameran. Kontrollera att kameran är ansluten.'
      );
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      setRecording(false);
      clearInterval(timerRef.current);
    }
  };

  const uploadVideo = async () => {
    if (!recordedVideo) return;
    
    setUploading(true);
    
    const formData = new FormData();
    formData.append('video', recordedVideo, `video-cv-${Date.now()}.webm`);
    formData.append('name', 'Video CV');
    formData.append('email', 'video@example.com');
    formData.append('message', 'Video CV skickat från webbplatsen');
    formData.append('timestamp', new Date().toISOString());

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
    setRecordingTime(0);
    setStreamError(null);
    if (videoRef.current) {
      videoRef.current.srcObject = null;
      videoRef.current.src = '';
      videoRef.current.controls = false;
    }
    clearInterval(timerRef.current);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`video-recorder-container ${isVisible ? 'visible' : ''}`}>
      <div className="container">
    
        {/* Main Recorder Card - exakt samma stil som jobbkort */}
        <div className="recorder-card">
          {/* Top Color Bar - exakt som jobbkort */}
          <div className="recorder-card-bar"></div>
          
          <div className="recorder-card-content">
            {/* Header med ikon - samma stil */}
            <div className="recorder-header">
              <div className="recorder-icon">
                <i className="bi bi-camera-video"></i>
              </div>
              <div>
                <h3 className="recorder-title">Spela in Video CV</h3>
                <div className="recorder-subtitle">
                  <i className="bi bi-info-circle"></i>
                  <span>Maximal längd: 5 minuter</span>
                </div>
              </div>
            </div>

            {/* Video Preview Container */}
            <div className="video-preview-container">
              <video 
                ref={videoRef} 
                autoPlay 
                muted 
                className="video-preview"
              />
              
              {recording && (
                <div className="recording-indicator">
                  <div className="recording-dot"></div>
                  <span className="recording-time">{formatTime(recordingTime)}</span>
                </div>
              )}

              {!recordedVideo && !recording && (
                <div className="video-placeholder">
                  <div className="placeholder-icon">
                    <i className="bi bi-camera"></i>
                  </div>
                  <p className="placeholder-text">Kameran är redo för inspelning</p>
                </div>
              )}

              {recordedVideo && !recording && (
                <div className="video-playback-controls">
                  <button 
                    className="playback-button"
                    onClick={() => videoRef.current?.play()}
                  >
                    <i className="bi bi-play-fill"></i>
                    Spela upp
                  </button>
                </div>
              )}
            </div>

            {/* Camera Selector - med samma stil som dropdowns */}
            {videoDevices.length > 1 && !recording && !recordedVideo && (
              <div className="camera-selector">
                <label className="selector-label">
                  <i className="bi bi-camera"></i>
                  Välj kamera:
                </label>
                <select
                  value={selectedDevice}
                  onChange={(e) => setSelectedDevice(e.target.value)}
                  className="device-select"
                >
                  {videoDevices.map(device => (
                    <option key={device.deviceId} value={device.deviceId}>
                      {device.label || `Kamera ${videoDevices.indexOf(device) + 1}`}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Error Message - med samma stil */}
            {streamError && (
              <div className="error-message">
                <div className="error-header">
                  <i className="bi bi-exclamation-triangle"></i>
                  <strong>Kameraåtkomst krävs</strong>
                </div>
                <p>{streamError}</p>
              </div>
            )}

            {/* Main Controls - med samma knappstil */}
            <div className="recorder-controls">
              {!recordedVideo ? (
                <div className="recording-controls">
                  {!recording ? (
                    <button 
                      onClick={startRecording}
                      className="start-button"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                    >
                      {hovered ? (
                        <>
                          Börja spela in <i className="bi bi-arrow-right"></i>
                        </>
                      ) : (
                        <>
                          <i className="bi bi-record-circle"></i>
                          Börja spela in video CV
                        </>
                      )}
                    </button>
                  ) : (
                    <button 
                      onClick={stopRecording}
                      className="stop-button"
                    >
                      <i className="bi bi-stop-circle"></i>
                      Stoppa inspelning
                    </button>
                  )}
                </div>
              ) : (
                <div className="upload-controls">
                  <button 
                    onClick={uploadVideo}
                    disabled={uploading}
                    className="upload-button"
                  >
                    {uploading ? (
                      <>
                        <div className="upload-spinner"></div>
                        Skickar...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-cloud-upload"></i>
                        Skicka video CV
                      </>
                    )}
                  </button>
                  <button 
                    onClick={resetRecorder}
                    className="reset-button"
                  >
                    <i className="bi bi-arrow-clockwise"></i>
                    Spela om
                  </button>
                </div>
              )}
            </div>

            {/* Instructions - samma stil som tips */}
            <div className="recorder-instructions">
              <div className="instruction-icon">
                <i className="bi bi-lightbulb"></i>
              </div>
              <p className="instruction-text">
                {!recordedVideo 
                  ? 'Tips: Ha god belysning, titta in i kameran, var professionell och prata tydligt.' 
                  : 'Tips: Lyssna på din inspelning och se till att ljudet är tydligt innan du skickar.'}
              </p>
            </div>
          </div>
        </div>

        {/* Success State - samma stil som spontanansökan CTA */}
        {uploaded && (
          <div className={`success-cta ${isVisible ? 'visible' : ''}`}>
            <div className="success-icon">
              <i className="bi bi-check-circle"></i>
            </div>
            
            <h3 className="success-title">Video CV skickat!</h3>
            
            <p className="success-description">
              Ditt video CV har skickats till vår rekryteringsteam. Vi återkommer inom 48 timmar med feedback.
            </p>
            
            <div className="success-actions">
              <button 
                className="success-button primary"
                onClick={resetRecorder}
              >
                <i className="bi bi-camera-video"></i>
                Spela in ny video
              </button>
              
              <button 
                className="success-button secondary"
                onClick={() => navigate('/tjanster')}
              >
                <i className="bi bi-briefcase"></i>
                Se lediga tjänster
              </button>
            </div>
            
            <p className="success-note">
              <i className="bi bi-clock"></i>
              Återkoppling inom 48 timmar
            </p>
          </div>
        )}

        {/* Stats Bar - exakt samma som i Tjänster */}
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-icon-wrapper">
              <i className="bi bi-camera-video"></i>
            </div>
            <div className="stat-number">HD</div>
            <div className="stat-label">Video Kvalitet</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon-wrapper">
              <i className="bi bi-clock-history"></i>
            </div>
            <div className="stat-number">5 min</div>
            <div className="stat-label">Max Längd</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon-wrapper">
              <i className="bi bi-shield-check"></i>
            </div>
            <div className="stat-number">100%</div>
            <div className="stat-label">Säkerhet</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon-wrapper">
              <i className="bi bi-chat-dots"></i>
            </div>
            <div className="stat-number">48h</div>
            <div className="stat-label">Respons</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoRecorder;