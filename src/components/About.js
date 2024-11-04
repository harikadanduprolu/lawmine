// src/components/About.js
import React from 'react';
import './About.css'; // Ensure this CSS file is styled for the new layout

const About = () => {
  const teamMembers = [
    {
      name: "Baskula Athik",
      specialization: "Corporate specialization (High Court)",
      image: "https://via.placeholder.com/150" // Replace with actual image path
    },
    {
      name: "P Saidulu",
      specialization: "Criminal practice (High Court)",
      image: "https://via.placeholder.com/150" // Replace with actual image path
    },
    {
      name: "Sapa Naresh",
      specialization: "Civil practice (High Court)",
      image: "https://via.placeholder.com/150" // Replace with actual image path
    },
    {
      name: "T Ravi Kumar",
      specialization: "Legal Adviser (Immigration law)",
      image: "https://via.placeholder.com/150" // Replace with actual image path
    },
    {
      name: "M Rajitha",
      specialization: "Legal Consultant (Family Law, Constitutional Law)",
      image: "https://via.placeholder.com/150" // Replace with actual image path
    },
    {
      name: "Bhargav",
      specialization: "Legal Consultant (All cases)",
      image: "https://via.placeholder.com/150" // Replace with actual image path
    },
  ];

  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Us</h2>
        <p>We are dedicated to providing top legal services with a specialized team of advocates.</p>
        <div className="team">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="about-image">
        <img src="path_to_your_image.jpg" alt="Legal team" />
      </div>
    </section>
  );
};

export default About;
