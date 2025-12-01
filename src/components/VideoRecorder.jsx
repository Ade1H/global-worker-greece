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

  // Get available video devices
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
        videoBitsPerSecond: 2500000 // 2.5 Mbps
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
      
      // Start recording timer
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

  // Format seconds to MM:SS
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
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
      border: '1px solid #e5e7eb',
      overflow: 'hidden',
      height: '100%'
    }}>
      <div style={{ padding: '2rem' }}>
        {uploaded ? (
          <div style={{
            textAlign: 'center',
            padding: '2rem 1rem'
          }}>
            <div style={{
              width: '4rem',
              height: '4rem',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              color: 'white',
              fontSize: '1.5rem'
            }}>
              ✓
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '0.5rem'
            }}>
              Video CV skickat!
            </h3>
            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
              Din video har skickats till Johan Karlsson.
            </p>
            <button 
              onClick={resetRecorder}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Spela in ny video
            </button>
          </div>
        ) : (
          <>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.25rem'
              }}>
                🎬
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#111827',
                  margin: 0
                }}>
                  Video CV
                </h3>
                <p style={{ color: '#6b7280', margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>
                  Spela in ett personligt video CV
                </p>
              </div>
            </div>

            {/* Video Preview */}
            <div style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '1.5rem',
              backgroundColor: '#000'
            }}>
              <video 
                ref={videoRef} 
                autoPlay 
                muted 
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              
              {recording && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(239, 68, 68, 0.9)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  backdropFilter: 'blur(4px)'
                }}>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: 'white',
                    animation: 'pulse 1.5s infinite'
                  }}></div>
                  <span style={{ fontWeight: '600' }}>Inspelar {formatTime(recordingTime)}</span>
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
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(2px)'
                }}>
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    fontSize: '1.5rem'
                  }}>
                    📹
                  </div>
                  <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>
                    Kameran är redo för inspelning
                  </p>
                </div>
              )}
            </div>

            {/* Camera Selector */}
            {videoDevices.length > 1 && !recording && !recordedVideo && (
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Välj kamera:
                </label>
                <select
                  value={selectedDevice}
                  onChange={(e) => setSelectedDevice(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    background: 'white',
                    fontSize: '0.9rem'
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
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1rem',
                fontSize: '0.9rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <i className="bi bi-exclamation-triangle"></i>
                  <strong>Kameraåtkomst krävs</strong>
                </div>
                <p style={{ margin: 0 }}>{streamError}</p>
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
                        padding: '0.875rem',
                        background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '10px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 20px rgba(239, 68, 68, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <i className="bi bi-record-circle"></i>
                      Börja spela in video CV
                    </button>
                  ) : (
                    <button 
                      onClick={stopRecording}
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        background: 'white',
                        color: '#dc2626',
                        border: '2px solid #dc2626',
                        borderRadius: '10px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#fee2e2';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'white';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      <i className="bi bi-stop-circle"></i>
                      Stoppa inspelning
                    </button>
                  )}
                </div>
              ) : (
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button 
                    onClick={uploadVideo}
                    disabled={uploading}
                    style={{
                      flex: 1,
                      padding: '0.875rem',
                      background: uploading 
                        ? '#9ca3af' 
                        : 'linear-gradient(135deg, #10b981, #059669)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontWeight: '600',
                      cursor: uploading ? 'not-allowed' : 'pointer',
                      fontSize: '1rem',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                      if (!uploading) {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!uploading) {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                  >
                    {uploading ? (
                      <>
                        <div style={{
                          width: '16px',
                          height: '16px',
                          border: '2px solid white',
                          borderTop: '2px solid transparent',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite'
                        }}></div>
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
                    style={{
                      padding: '0.875rem 1.5rem',
                      background: '#f3f4f6',
                      color: '#374151',
                      border: 'none',
                      borderRadius: '10px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#e5e7eb';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#f3f4f6';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <i className="bi bi-arrow-clockwise"></i>
                    Spela om
                  </button>
                </div>
              )}
            </div>

            {/* Instructions */}
            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
              <p style={{
                color: '#6b7280',
                fontSize: '0.85rem',
                margin: 0,
                lineHeight: '1.5'
              }}>
                <i className="bi bi-lightbulb" style={{ marginRight: '0.5rem', color: '#f59e0b' }}></i>
                {!recordedVideo 
                  ? 'Tips: Ha god belysning, titta in i kameran och var dig själv.' 
                  : 'Tips: Lyssna på din inspelning innan du skickar.'}
              </p>
            </div>

            {/* Recording Timer */}
            {recording && (
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600',
                backdropFilter: 'blur(4px)'
              }}>
                {formatTime(recordingTime)}
              </div>
            )}
          </>
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        video {
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
}

export default VideoRecorder;