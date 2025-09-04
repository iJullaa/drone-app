import React from 'react';

import Hero from '../components/Hero';
import AboutProject from '../components/AboutProject';
import AboutUs from '../components/AboutUs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <main>
        <section id="project">
          <AboutProject />
        </section>

        <section id="about">
          <AboutUs />
        </section>
      </main>
    </>
  );
};

export default HomePage;
