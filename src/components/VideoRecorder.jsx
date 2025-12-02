import React, { useState, useRef } from 'react';

function VideoRecorder() {
  const [recording, setRecording] = useState(false);
  const [recordedVideo, setRecordedVideo] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [streamError, setStreamError] = useState(null);
  const [videoDevices, setVideoDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState('');
  
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const timerRef = useRef(null);

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

  React.useEffect(() => {
    getVideoDevices();
    
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div style={{
      background: 'white',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      height: '100%'
    }}>
      <div style={{ 
        padding: '1.5rem',
        borderLeft: '4px solid #ef4444'
      }}>
        {uploaded ? (
          <div style={{
            textAlign: 'center',
            padding: '1rem'
          }}>
            <div style={{
              width: '3rem',
              height: '3rem',
              borderRadius: '6px',
              background: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              color: 'white',
              fontSize: '1.25rem'
            }}>
              ✓
            </div>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '0.5rem'
            }}>
              Video CV skickat!
            </h3>
            <p style={{ 
              color: '#6b7280', 
              marginBottom: '1rem',
              fontSize: '0.875rem'
            }}>
              Din video har skickats.
            </p>
            <button 
              onClick={resetRecorder}
              style={{
                padding: '0.625rem 1.25rem',
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '0.875rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '1';
              }}
            >
              Spela in ny video
            </button>
          </div>
        ) : (
          <>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '6px',
                background: '#fee2e2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ef4444',
                fontSize: '1rem',
                flexShrink: 0
              }}>
                🎬
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.25rem'
                }}>
                  Video CV
                </h3>
                <p style={{ 
                  color: '#6b7280', 
                  fontSize: '0.875rem'
                }}>
                  Spela in ett personligt video CV
                </p>
              </div>
            </div>

            {/* Video Preview */}
            <div style={{
              position: 'relative',
              borderRadius: '6px',
              overflow: 'hidden',
              marginBottom: '1rem',
              backgroundColor: '#000',
              border: '1px solid #e5e7eb'
            }}>
              <video 
                ref={videoRef} 
                autoPlay 
                muted 
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              
              {recording && (
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  left: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#ef4444',
                  color: 'white',
                  padding: '0.375rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'white'
                  }}></div>
                  <span>{formatTime(recordingTime)}</span>
                </div>
              )}

              {!recordedVideo && !recording && (
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  color: 'white',
                  background: 'rgba(0, 0, 0, 0.2)'
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.75rem',
                    fontSize: '1.25rem'
                  }}>
                    📹
                  </div>
                  <p style={{ 
                    margin: 0, 
                    fontSize: '0.75rem', 
                    opacity: 0.9,
                    fontWeight: '500'
                  }}>
                    Kameran är redo
                  </p>
                </div>
              )}
            </div>

            {/* Camera Selector */}
            {videoDevices.length > 1 && !recording && !recordedVideo && (
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  color: '#4b5563',
                  marginBottom: '0.375rem'
                }}>
                  Välj kamera:
                </label>
                <select
                  value={selectedDevice}
                  onChange={(e) => setSelectedDevice(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    borderRadius: '6px',
                    border: '1px solid #d1d5db',
                    background: 'white',
                    fontSize: '0.875rem',
                    outline: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                  }}
                >
                  {videoDevices.map(device => (
                    <option key={device.deviceId} value={device.deviceId}>
                      {device.label || `Kamera ${videoDevices.indexOf(device) + 1}`}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Error Message */}
            {streamError && (
              <div style={{
                background: '#fee2e2',
                border: '1px solid #fecaca',
                color: '#991b1b',
                padding: '0.75rem',
                borderRadius: '6px',
                marginBottom: '1rem',
                fontSize: '0.75rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '0.875rem' }}>⚠️</span>
                  <strong>Kameraåtkomst krävs</strong>
                </div>
                <p style={{ margin: 0, fontSize: '0.75rem' }}>{streamError}</p>
              </div>
            )}

            {/* Controls */}
            <div style={{ marginBottom: '1rem' }}>
              {!recordedVideo ? (
                <div>
                  {!recording ? (
                    <button 
                      onClick={startRecording}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: '#ef4444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.opacity = '0.9';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.opacity = '1';
                      }}
                    >
                      <span style={{ fontSize: '0.875rem' }}>●</span>
                      Börja spela in video CV
                    </button>
                  ) : (
                    <button 
                      onClick={stopRecording}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: 'white',
                        color: '#ef4444',
                        border: '1px solid #ef4444',
                        borderRadius: '6px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#fee2e2';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'white';
                      }}
                    >
                      <span style={{ fontSize: '0.875rem' }}>■</span>
                      Stoppa inspelning
                    </button>
                  )}
                </div>
              ) : (
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button 
                    onClick={uploadVideo}
                    disabled={uploading}
                    style={{
                      flex: 1,
                      padding: '0.75rem',
                      background: uploading ? '#9ca3af' : '#10b981',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: '600',
                      cursor: uploading ? 'not-allowed' : 'pointer',
                      fontSize: '0.875rem',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                      if (!uploading) {
                        e.target.style.opacity = '0.9';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!uploading) {
                        e.target.style.opacity = '1';
                      }
                    }}
                  >
                    {uploading ? (
                      <>
                        <div style={{
                          width: '12px',
                          height: '12px',
                          border: '2px solid white',
                          borderTop: '2px solid transparent',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite'
                        }}></div>
                        Skickar...
                      </>
                    ) : (
                      <>
                        <span style={{ fontSize: '0.875rem' }}>📤</span>
                        Skicka video CV
                      </>
                    )}
                  </button>
                  <button 
                    onClick={resetRecorder}
                    style={{
                      padding: '0.75rem 1rem',
                      background: '#f3f4f6',
                      color: '#4b5563',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#e5e7eb';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#f3f4f6';
                    }}
                  >
                    <span style={{ fontSize: '0.75rem' }}>🔄</span>
                    Spela om
                  </button>
                </div>
              )}
            </div>

            {/* Instructions */}
            <div style={{ 
              marginTop: '1rem', 
              paddingTop: '0.75rem', 
              borderTop: '1px solid #e5e7eb' 
            }}>
              <p style={{
                color: '#6b7280',
                fontSize: '0.75rem',
                margin: 0,
                lineHeight: '1.5',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '0.875rem', color: '#f59e0b' }}>💡</span>
                {!recordedVideo 
                  ? 'Tips: Ha god belysning, titta in i kameran och var dig själv.' 
                  : 'Tips: Lyssna på din inspelning innan du skickar.'}
              </p>
            </div>
          </>
        )}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        video {
          border-radius: 6px;
        }
        
        select:focus {
          border-color: #3b82f6;
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}

export default VideoRecorder;