// src/components/Join.js
import React from 'react';

const Join = () => {
  return (
    <div className="section">
      <h2>Join As Advocate</h2>
      <form>
        <label>Name of the Advocate:</label>
        <input type="text" required />

        <label>Phone No:</label>
        <input type="tel" required />

        <label>Email ID:</label>
        <input type="email" required />

        <label>Location:</label>
        <input type="text" required />

        <label>Total Legal Experience:</label>
        <input type="text" required />

        <label>Enrollment No:</label>
        <input type="text" required />

        <label>Resume in PDF Format:</label>
        <input type="file" accept="application/pdf" required />

        <label>Message:</label>
        <textarea required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Join;
