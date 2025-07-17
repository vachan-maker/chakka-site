'use client';
import React, { useState, useRef, useEffect } from 'react';


const VideoPlayer = ({ videoFile, onTimeUpdate, currentTime = 0 }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState(null);

  // Create and cleanup video URL
  useEffect(() => {
    if (videoFile) {
      try {
        // Check if videoFile is a valid File or Blob object
        if (videoFile instanceof File || videoFile instanceof Blob) {
          const url = URL.createObjectURL(videoFile);
          setVideoUrl(url);
          setError(null);
          
          // Cleanup function to revoke object URL
          return () => {
            URL.revokeObjectURL(url);
          };
        } else if (typeof videoFile === 'object' && videoFile?.name && videoFile?.type) {
          // Handle mock data objects - show placeholder instead of trying to create URL
          setVideoUrl('');
          setError(null);
        } else {
          // Handle invalid file objects
          setError('Invalid video file format. Please upload a valid video file.');
          setVideoUrl('');
        }
      } catch (err) {
        setError('Failed to load video file. Please try again.');
        setVideoUrl('');
      }
    } else {
      setVideoUrl('');
      setError(null);
    }
  }, [videoFile]);

  useEffect(() => {
    const video = videoRef.current;
    if (video && currentTime !== video.currentTime) {
      video.currentTime = currentTime;
    }
  }, [currentTime]);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && onTimeUpdate) {
      onTimeUpdate(video.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) {
      setDuration(video.duration);
    }
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    
    if (video) {
      video.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (video) {
      if (!isFullscreen) {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Mock file placeholder state (when videoFile is a mock object)
  const isMockFile = videoFile && !(videoFile instanceof File || videoFile instanceof Blob) && videoFile?.name && videoFile?.type;

  if (isMockFile) {
    return (
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden h-64 md:h-80 flex items-center justify-center">
        <div className="text-center p-6">
          <div className="relative mb-4">
            <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
            </div>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Video Preview</h3>
          <p className="text-sm text-gray-600 mb-1">{videoFile.name}</p>
          <p className="text-xs text-gray-500">
            {videoFile.type} • {(videoFile.size / 1024 / 1024).toFixed(1)} MB
          </p>
          <div className="mt-4 flex items-center justify-center">
            <div className="bg-white/60 px-3 py-1 rounded-full text-xs text-gray-600 flex items-center">
              Upload a real file to preview
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="relative bg-gray-100 rounded-lg overflow-hidden h-64 md:h-80 flex items-center justify-center">
        <div className="text-center p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Video Preview Not Available</h3>
          <p className="text-sm text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  // No video file state
  if (!videoFile || !videoUrl) {
    return (
      <div className="relative bg-gray-100 rounded-lg overflow-hidden h-64 md:h-80 flex items-center justify-center">
        <div className="text-center p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Video File</h3>
          <p className="text-sm text-gray-600">Please upload a video file to preview</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-64 md:h-80 object-contain"
        src={videoUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => setError('Failed to load video. Please check the file format.')}
      />
      
      {/* Video Controls Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        {/* Progress Bar */}
        <div 
          className="w-full h-2 bg-white/20 rounded-full mb-3 cursor-pointer"
          onClick={handleSeek}
        >
          <div 
            className="h-full bg-primary rounded-full transition-all duration-150"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        
        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePlayPause}
              className="flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full transition-smooth"
            >
              {/* <Icon 
                name={isPlaying ? "Pause" : "Play"} 
                size={20} 
                color="white" 
                strokeWidth={2}
              /> */}
            </button>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMute}
                className="flex items-center justify-center w-8 h-8 hover:bg-white/20 rounded transition-smooth"
              >
                {/* <Icon 
                  name={isMuted ? "VolumeX" : "Volume2"} 
                  size={16} 
                  color="white" 
                  strokeWidth={2}
                /> */}
              </button>
              
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-16 h-1 bg-white/20 rounded-lg appearance-none slider"
              />
            </div>
            
            <span className="text-white text-sm font-mono">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
          
          <button
            onClick={toggleFullscreen}
            className="flex items-center justify-center w-8 h-8 hover:bg-white/20 rounded transition-smooth"
          >
            {/* <Icon 
              name={isFullscreen ? "Minimize" : "Maximize"} 
              size={16} 
              color="white" 
              strokeWidth={2}
            /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;