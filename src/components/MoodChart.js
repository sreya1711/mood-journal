// src/components/MoodChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const MoodChart = ({ history }) => {
  const moodCount = {};

  history.forEach(({ mood }) => {
    moodCount[mood] = (moodCount[mood] || 0) + 1;
  });

  const data = {
    labels: Object.keys(moodCount),
    datasets: [
      {
        label: 'Mood Frequency',
        data: Object.values(moodCount),
        backgroundColor: '#00bcd4',
        borderRadius: 6,
      },
    ],
  };
return (
  <div style={{
    marginTop: '2rem',
    padding: '1rem',
    background: 'white',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    backdropFilter: 'blur(8px)'
  }}>
    <h2 style={{ textAlign: 'center' }}>📊 Mood Chart</h2>
    <Bar data={data} />
  </div>
);

  
};

export default MoodChart;
