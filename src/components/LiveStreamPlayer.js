import React from 'react';
import './LiveStreamPlayer.css';

// !!! WAŻNE: Wstaw tutaj adres IP swojego Raspberry Pi lub link do testowego GIF-a !!!
const STREAM_URL =
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzhucGRiZHBkM3JheTE3ZTh1ZzZ6a25uN3Z6amN6NnN0aWdsZWk4eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSxdQJIoiRXHl6/giphy.gif';

const LiveStreamPlayer = () => {
  const playerRef = React.useRef(null);

  // Funkcja do włączania/wyłączania pełnego ekranu
  const toggleFullscreen = () => {
    const elem = playerRef.current;
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div
      ref={playerRef}
      className="livestream-player"
      onClick={toggleFullscreen}
    >
      <div className="livestream-header">
        <span className="live-dot"></span> LIVE FEED
      </div>
      <img
        src={STREAM_URL}
        alt="Live stream from drone"
        className="livestream-image"
      />
      <div className="fullscreen-hint">Click to toggle fullscreen</div>
    </div>
  );
};

export default LiveStreamPlayer;
