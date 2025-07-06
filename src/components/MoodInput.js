// src/components/MoodInput.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './MoodInput.css';

const emojis = ['😊', '😟', '😡', '😴', '😇', '😎', '😭'];

const moodQuotes = {
  '😊': "Happiness is contagious. Spread it!",
  '😟': "Tough times don’t last, but tough people do.",
  '😡': "Take a breath. Respond with peace, not rage.",
  '😴': "Rest is productive too.",
  '😇': "Peace begins with a smile.",
  '😎': "Confidence is silent. Insecurities are loud.",
  '😭': "It’s okay to cry. You’re healing.",
};

export default function MoodInput({ onSave }) {
  const [selectedMood, setSelectedMood] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    if (!selectedMood) {
      alert('Please select a mood emoji!');
      return;
    }
    const today = new Date().toLocaleDateString();
    onSave({ mood: selectedMood, note, date: today });
    setSelectedMood('');
    setNote('');
  };

  return (
    <motion.div 
      className="mood-input"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>How are you feeling today?</h2>

      <div className="emoji-list">
        {emojis.map((emoji) => (
          <motion.span
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            key={emoji}
            onClick={() => setSelectedMood(emoji)}
            className={`emoji ${selectedMood === emoji ? 'selected' : ''}`}
          >
            {emoji}
          </motion.span>
        ))}
      </div>

      {/* 🌟 Show quote based on selected emoji */}
      {selectedMood && (
        <motion.div 
          className="quote-box"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>"{moodQuotes[selectedMood]}"</p>
        </motion.div>
      )}

      <div className="input-group">
        <input
          type="text"
          placeholder="Write a short note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button onClick={handleSubmit}>Save Mood</button>
      </div>
    </motion.div>
  );
}
