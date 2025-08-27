import React from 'react';

import Hero from '../components/Hero';
import AboutProject from '../components/AboutProject';
import AboutUs from '../components/AboutUs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <main>
        {/* 1. DODAJEMY KOTWICĘ DLA "ABOUT PROJECT" */}
        <section id="project">
          <AboutProject />
        </section>

        {/* 2. DODAJEMY KOTWICĘ DLA "ABOUT US" */}
        <section id="about">
          <AboutUs />
        </section>
      </main>
    </>
  );
};

export default HomePage;
