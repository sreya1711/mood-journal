// src/App.js
import React, { useState, useEffect } from 'react';
import MoodInput from './components/MoodInput';
import MoodHistory from './components/MoodHistory';
import MoodChart from './components/MoodChart';

import './App.css';

function App() {
  const [moodHistory, setMoodHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('moods')) || [];
    setMoodHistory(data);
  }, []);

  const saveMood = (entry) => {
    const updated = [entry, ...moodHistory];
    setMoodHistory(updated);
    localStorage.setItem('moods', JSON.stringify(updated));
  };

  const resetJournal = () => {
    localStorage.removeItem('moods');
    setMoodHistory([]);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      {/* Toggle Dark/Light Mode */}
      <div className="toggle-container">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        <button onClick={resetJournal} className="reset-button">🗑️ Reset Journal</button>
      </div>

      {/* App Title */}
      <h1 className="title">Mood Journal <span>😊</span></h1>

      {/* Mood Input */}
      <MoodInput onSave={saveMood} />

      {/* Mood History */}
      <MoodHistory history={moodHistory} />

      {/* Mood Chart */}
      {moodHistory.length > 0 && <MoodChart history={moodHistory} />}

      {/* Floating Emojis Animation */}
      {[...Array(15)].map((_, i) => (
        <span
          key={i}
          className="emoji-float"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            fontSize: `${Math.random() * 20 + 20}px`,
          }}
        >
          😊
        </span>
      ))}
    </div>
  );
}

export default App;
