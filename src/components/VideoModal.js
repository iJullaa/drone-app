import React from 'react';
import ReactPlayer from 'react-player';
import './VideoModal.css';

const VideoModal = ({ isOpen, onClose }) => {
  // Jeśli modal nie jest otwarty, nie renderuj niczego
  if (!isOpen) {
    return null;
  }

  // Funkcja, która zamyka modal, ale zapobiega zamknięciu po kliknięciu na wideo
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    // Tło (overlay), które zamyka modal po kliknięciu
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://vimeo.com/262703415" // Przykładowe wideo z dronem z Vimeo
            width="100%"
            height="100%"
            playing={false} // Automatycznie odtwarzaj po otwarciu
            controls={true} // Pokaż kontrolki odtwarzacza
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;