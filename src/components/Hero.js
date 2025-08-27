import React, { useState } from 'react';
import './Hero.css';
import VideoModal from './VideoModal';

import Button from './common/Button/Button';

const PlayIcon = () => <span className="play-icon"></span>;
const ArrowIcon = () => <span className="arrow-icon">→</span>;

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Drone-based Building Inspection</h1>
          <p>Automated surface crack detection powered by YOLOv8</p>
          <div className="cta-buttons">
            <Button onClick={openModal} variant="primary">
              Watch video <PlayIcon />
            </Button>

            <a href="/#project" style={{ textDecoration: 'none' }}>
              <Button variant="secondary">
                More about project <ArrowIcon />
              </Button>
            </a>
          </div>
        </div>
      </section>
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Hero;
