import React, { useState, useEffect, useCallback } from 'react';
import './LiveDemoPage.css';
import flyingDrone from '../assets/flying-drone.png';
import Button from '../components/common/Button/Button';
import LiveStreamPlayer from '../components/LiveStreamPlayer';

const BACKEND_URL = 'http://localhost:8000';

const LiveDemoPage = () => {
  const [isInspecting, setIsInspecting] = useState(false);
  const [reportReady, setReportReady] = useState(false);
  const [runs, setRuns] = useState([]);
  const [selectedRun, setSelectedRun] = useState('');

  const fetchRuns = useCallback(async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/runs`);
      const data = await response.json();
      setRuns(data);
      if (data.length > 0 && !selectedRun) {
        setSelectedRun(data[0].run_id);
      }
    } catch (error) {
      console.error('Failed to fetch runs:', error);
    }
  }, [selectedRun]);

  useEffect(() => {
    fetchRuns();
  }, [fetchRuns]);

  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:8000/ws`);

    ws.onopen = () => console.log('WebSocket Connected');
    ws.onclose = () => console.log('WebSocket Disconnected');

    ws.onmessage = (event) => {
      if (event.data === 'START_MISSION') {
        setIsInspecting(true);
        setReportReady(false);
      } else if (event.data === 'STOP_MISSION') {
        setIsInspecting(false);
        setReportReady(true);
      } else if (event.data === 'RUNS_UPDATED') {
        console.log('Received runs update from server, refetching...');
        fetchRuns();
      }
    };

    return () => {
      ws.close();
    };
  }, [fetchRuns]);

  const handleToggleInspection = async () => {
    const endpoint = isInspecting ? '/stop-mission' : '/start-mission';
    try {
      await fetch(`${BACKEND_URL}${endpoint}`);
    } catch (error) {
      console.error(`Failed to send ${endpoint} command:`, error);
    }
  };

  const handleReportDownload = () => {
    if (!selectedRun) {
      alert('Please select a run to download.');
      return;
    }
    window.open(`${BACKEND_URL}/report/${selectedRun}`, '_blank');
  };

  const handleVideoDownload = () => {
    if (!selectedRun) {
      alert('Please select a run to download the video for.');
      return;
    }
    window.open(`${BACKEND_URL}/video/${selectedRun}`, '_blank');
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

        <div className="dynamic-content-container">
          {isInspecting && <LiveStreamPlayer />}

          {reportReady && (
            <div className="report-card">
              <h2>Generate Report</h2>
              <p className="card-subtitle">
                The inspection is complete. Please select a run to download the
                report or video.
              </p>
              <div className="report-controls">
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
                <Button onClick={handleVideoDownload} variant="secondary">
                  Download Video
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveDemoPage;
