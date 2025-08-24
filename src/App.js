import React from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import AboutProject from './components/AboutProject';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Header jest teraz niezależnym elementem na górze */}
      <Header /> 
      
      {/* Wszystkie sekcje strony umieszczamy w <main> */}
      <main>
        <Hero />
        <AboutProject />
      </main>

      <Footer />
    </div>
  );
}

export default App;