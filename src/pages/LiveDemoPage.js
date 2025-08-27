import React, { useState } from 'react';
import './LiveDemoPage.css';

// Importujemy obrazek drona
import droneImage from '../assets/flying-drone.png';

const LiveDemoPage = () => {
  const [isInspecting, setIsInspecting] = useState(false);
  const [reportReady, setReportReady] = useState(false);
  const [selectedRun, setSelectedRun] = useState('run1');

  const handleToggleInspection = () => {
    const nextState = !isInspecting;
    setIsInspecting(nextState);
    setReportReady(!nextState);
  };

  const handleReportDownload = () => {
    const reportData = {
      runId: selectedRun,
      timestamp: new Date().toISOString(),
      status: 'Completed',
      cracksDetected: Math.floor(Math.random() * 10) + 1,
      summary: 'Automated inspection completed successfully.',
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `report-${selectedRun}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="demo-page-container">
      <h1>Live Drone Inspection</h1>
      <p>Start the simulation to begin automated crack detection.</p>

      {/* --- Sekcja Kontrolna --- */}
      <div className="demo-controls">
        <button
          onClick={handleToggleInspection}
          className={`demo-button ${isInspecting ? 'stop' : 'start'}`}
        >
          {isInspecting ? 'Stop Inspection' : 'Start Inspection'}
        </button>
      </div>

      {/* --- Sekcja Statusu --- */}
      <div className="demo-status">
        {isInspecting && (
          <div className="status-indicator">
            <div className="spinner"></div>
            <span>Inspection in progress...</span>
          </div>
        )}
      </div>

      {/* --- Sekcja Raportu --- */}
      {reportReady && (
        <div className="report-section">
          <h2>Generate Report</h2>
          <p>
            The inspection is complete. Please select a run to download the
            report.
          </p>
          <div className="report-controls">
            <select
              className="report-select"
              value={selectedRun}
              onChange={(e) => setSelectedRun(e.target.value)}
            >
              <option value="run1">Run 1</option>
              <option value="run2">Run 2</option>
              <option value="run3">Run 3</option>
            </select>
            <button
              onClick={handleReportDownload}
              className="report-download-button"
            >
              Download Report
            </button>
          </div>
        </div>
      )}

      {/* --- Animowany Dron w Tle --- */}
      <img
        src={droneImage}
        alt="Flying drone background animation"
        className="demo-flying-drone"
      />
    </div>
  );
};

export default LiveDemoPage;
