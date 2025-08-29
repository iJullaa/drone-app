import React from 'react';
import './LiveStreamModal.css';
import { FaTimes } from 'react-icons/fa'; // Ikona do zamykania

// !!! WAŻNE: Wstaw tutaj adres IP swojego Raspberry Pi !!!
const RASPBERRY_PI_IP = '192.168.1.100'; // Przykładowy adres IP
const STREAM_URL = `http://${RASPBERRY_PI_IP}:8081`;

const LiveStreamModal = ({ isOpen, onClose }) => {
  // Jeśli modal jest zamknięty, nic nie renderuj
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
