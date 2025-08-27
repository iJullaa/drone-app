import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import useHashScroll from './hooks/useHashScroll';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LiveDemoPage from './pages/LiveDemoPage';

const AppContent = () => {
  useHashScroll();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<LiveDemoPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
