import React from 'react';
import ReactPlayer from 'react-player';
import './VideoModal.css';

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://vimeo.com/262703415"
            width="100%"
            height="100%"
            playing={false}
            controls={true}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
