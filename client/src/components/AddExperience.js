import React, { useState } from 'react';
import axios from 'axios';

const ExperienceForm = () => {
  const [title, setTitle] = useState('');
  const [dateStart, setDateStart] = useState('');
  // ... other state variables for the form fields

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend API
      const response = await axios.post('/experiences', {
        title,
        dateStart,
        // ... other fields
      });

      // Handle the response
      console.log('New experience added:', response.data);
      // ... handle success feedback or navigation
    } catch (error) {
      console.error('Error adding experience:', error);
      // ... handle error feedback
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="date"
        value={dateStart}
        onChange={(e) => setDateStart(e.target.value)}
        placeholder="Start Date"
      />

      {/* Submit button */}
      <button type="submit">Add Experience</button>
    </form>
  );
};

export default ExperienceForm;
