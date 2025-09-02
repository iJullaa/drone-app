import React from 'react';
import './LiveStreamModal.css';
import { FaTimes } from 'react-icons/fa';

// !!! IMPORTANT: Insert your Raspberry Pi's IP address here!!!
const RASPBERRY_PI_IP = '192.168.30.1';
const STREAM_URL = `http://${RASPBERRY_PI_IP}:8081`;
//const STREAM_URL = `https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzhucGRiZHBkM3JheTE3ZTh1ZzZ6a25uN3Z6amN6NnN0aWdsZWk4eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSxdQJIoiRXHl6/giphy.gif`;
const LiveStreamModal = ({ isOpen, onClose }) => {
  // If the modal is closed, don't render anything
  if (!isOpen) {
    return null;
  }

  return (
    <div className="livestream-modal-overlay" onClick={onClose}>
      <div
        className="livestream-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="livestream-close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="livestream-header">
          <span className="live-dot"></span> LIVE FEED
        </div>
        <img
          src={STREAM_URL}
          width="640"
          height="480"
          alt="Live stream from drone"
          className="livestream-image"
        />
      </div>
    </div>
  );
};

export default LiveStreamModal;
