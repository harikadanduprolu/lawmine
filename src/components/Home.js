// src/components/Home.js
import React from 'react';
import './Home.css'; // We'll create this CSS file next
import { FaMapMarkerAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">
      {/* Welcome Animation */}
      <section className="welcome-section">
        <h1 className="welcome-text">Welcome to Law Mine</h1>
        <p className="welcome-subtext">Your trusted legal partner</p>
      </section>

      {/* Locations */}
      <section className="locations-section">
        <h2>Our Locations</h2>
        <ul className="locations-list">
          <li><FaMapMarkerAlt /> Hyderabad</li>
          <li><FaMapMarkerAlt /> Amaravathi</li>
          <li><FaMapMarkerAlt /> Bengaluru</li>
          <li><FaMapMarkerAlt /> Chennai</li>
          <li><FaMapMarkerAlt /> Mumbai</li>
          <li><FaMapMarkerAlt /> Delhi</li>
        </ul>
      </section>

      {/* Description */}
      <section className="description-section">
        <p>
          At Law Mine, we are dedicated to providing top-notch legal services across various domains. 
          Our team of experienced advocates and legal experts ensures that you receive the best 
          representation and advice tailored to your specific needs. Whether you're seeking 
          corporate legal services, personal legal advice, or representation in court, Law Mine 
          is here to assist you every step of the way.
        </p>
      </section>
    </div>
  );
};

export default Home;
