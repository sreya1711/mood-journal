// src/components/MoodHistory.js
import React from 'react';
import { motion } from 'framer-motion';
import './MoodHistory.css';

export default function MoodHistory({ history }) {
  return (
    <motion.div 
      className="mood-history"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <h2>📅 Mood History</h2>
      {history.length === 0 && <p>No entries yet. Start tracking today!</p>}
      <ul>
        {history.map((entry, idx) => (
          <motion.li 
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="history-item"
          >
            <span className="date">{entry.date}</span> — <span className="mood">{entry.mood}</span> <span className="note">({entry.note})</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
