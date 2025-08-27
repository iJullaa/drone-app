import React, { useState } from 'react';
import './LiveDemoPage.css';
// 1. Importujemy nasz nowy, reużywalny komponent Button
import Button from '../components/common/Button/Button';
import flyingDrone from '../assets/flying-drone.png';

const LiveDemoPage = () => {
  const [isInspecting, setIsInspecting] = useState(false);
  const [reportReady, setReportReady] = useState(false);
  const [selectedRun, setSelectedRun] = useState('run1');

  const handleToggleInspection = () => {
    setIsInspecting(!isInspecting);
    setReportReady(!isInspecting);
  };

  const handleReportDownload = () => {
    // ... (funkcja pobierania pozostaje bez zmian) ...
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
      <img
        src={flyingDrone}
        alt="Flying drone animation"
        className="flying-drone-across"
      />

      <div className="main-content">
        <h1>Live Drone Inspection</h1>
        <p>Start the simulation to begin automated crack detection.</p>
        <div className="demo-controls">
          {/* 2. Zastępujemy stary przycisk */}
          <Button
            onClick={handleToggleInspection}
            variant={isInspecting ? 'stop' : 'start'} // Dynamicznie zmieniamy wariant
          >
            {isInspecting ? 'Stop Inspection' : 'Start Inspection'}
          </Button>
        </div>
        <div className="demo-status">
          {isInspecting && (
            <div className="status-indicator">
              <div className="spinner"></div>
              <span>Inspection in progress...</span>
            </div>
          )}
        </div>
        {reportReady && (
          <div className="report-card">
            <h2>Generate Report</h2>
            <p className="card-subtitle">
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
              {/* 3. Zastępujemy drugi przycisk */}
              <Button onClick={handleReportDownload} variant="primary">
                Download Report
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveDemoPage;
