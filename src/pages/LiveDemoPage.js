import React, { useState, useEffect } from 'react';
import './LiveDemoPage.css';
import flyingDrone from '../assets/flying-drone.png';
import Button from '../components/common/Button/Button';

// Our backend address
const BACKEND_URL = 'http://localhost:8000';

const LiveDemoPage = () => {
  const [isInspecting, setIsInspecting] = useState(false);
  const [reportReady, setReportReady] = useState(false);
  const [runs, setRuns] = useState([]); // State for the list of available "runs"
  const [selectedRun, setSelectedRun] = useState(''); // State for the selected "run"

  // Effect to fetch the list of "runs" on the initial page load
  useEffect(() => {
    const fetchRuns = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/runs`);
        const data = await response.json();
        setRuns(data);
        // Set the default selected run to the first in the list
        if (data.length > 0) {
          setSelectedRun(data[0].run_id);
        }
      } catch (error) {
        console.error('Failed to fetch runs:', error);
      }
    };
    fetchRuns();
  }, []);

  // Effect to handle real-time WebSocket communication
  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:8000/ws`);

    ws.onopen = () => console.log('WebSocket Connected');
    ws.onclose = () => console.log('WebSocket Disconnected');

    // Listen for messages from the server
    ws.onmessage = (event) => {
      if (event.data === 'START_MISSION') {
        setIsInspecting(true);
        setReportReady(false);
      } else if (event.data === 'STOP_MISSION') {
        setIsInspecting(false);
        setReportReady(true);
      }
    };

    // Cleanup: close the connection when the component unmounts
    return () => {
      ws.close();
    };
  }, []);

  // Function to send start/stop commands
  const handleToggleInspection = async () => {
    const endpoint = isInspecting ? '/stop-mission' : '/start-mission';
    try {
      await fetch(`${BACKEND_URL}${endpoint}`);
    } catch (error) {
      console.error(`Failed to send ${endpoint} command:`, error);
    }
  };

  // Function to download the report
  const handleReportDownload = () => {
    if (!selectedRun) {
      alert('Please select a run to download.');
      return;
    }
    // Open the report URL in a new tab - the browser will handle the download
    window.open(`${BACKEND_URL}/report/${selectedRun}`, '_blank');
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
          <Button
            onClick={handleToggleInspection}
            variant={isInspecting ? 'stop' : 'start'}
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
              {/* Dynamically generated list of "runs" */}
              <select
                className="report-select"
                value={selectedRun}
                onChange={(e) => setSelectedRun(e.target.value)}
              >
                {runs.map((run) => (
                  <option key={run.run_id} value={run.run_id}>
                    {run.name}
                  </option>
                ))}
              </select>
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
