import React, { useEffect, useRef } from 'react';
import './VideoModal.css';

import myDroneVideo from '../assets/dron_video.mp4';

const VideoModal = ({ isOpen, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.warn(
          'Autoplay was prevented. This is normal if video has sound and is not muted.',
          error
        );
      });
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="player-wrapper">
          <video
            ref={videoRef}
            src={myDroneVideo}
            width="100%"
            height="100%"
            controls
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
