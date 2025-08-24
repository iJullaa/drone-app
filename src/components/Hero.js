import React, { useState } from 'react';
import './Hero.css';
import VideoModal from './VideoModal'; // Importujemy nasz nowy komponent


const PlayIcon = () => <span className="play-icon"></span>;
const ArrowIcon = () => <span className="arrow-icon">→</span>;

const Hero = () => {
  // Stan do zarządzania widocznością modala
  const [isModalOpen, setModalOpen] = useState(false);

  // Funkcje do otwierania i zamykania
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Drone-based Building Inspection</h1>
            <p> Automated surface crack detection powered by YOLOv8</p>
          <div className="cta-buttons">
            {/* Dodajemy onClick do przycisku */}
            <button onClick={openModal} className="cta-button primary">
              Watch video <PlayIcon />
            </button>
            <a href="#project" className="cta-button secondary">
              More about project <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Renderujemy nasz modal i przekazujemy mu stan oraz funkcję zamykania */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Hero;