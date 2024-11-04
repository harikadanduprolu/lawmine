// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="section">
      <h2>Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" required />

        <label>Email:</label>
        <input type="email" required />

        <label>Phone Number:</label>
        <input type="tel" required />

        <label>Location:</label>
        <input type="text" required />

        <label>Type of Case:</label>
        <select required>
          <option value="">Select a case type</option>
          <option value="criminal">Criminal</option>
          <option value="civil">Civil</option>
          <option value="family">Family</option>
          <option value="corporate">Corporate</option>
          {/* Add more options as needed */}
        </select>

        <label>Message:</label>
        <textarea required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
