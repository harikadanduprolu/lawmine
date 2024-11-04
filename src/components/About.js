// src/components/About.js
import React from 'react';
import './About.css';

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
        <p>
          Welcome to <strong>lawmine.in</strong>. Since 2014, our team of advocates has been providing legal services across India. 
          With a principal office in Hyderabad and branches in Delhi, Mumbai, Bangalore, Chennai, and Kolkata, we support our clients in various legal matters. 
          Our advocates are skilled in drafting, filing, and arguing cases in trial courts, tribunals, competent authorities, commissions, High Courts, and the Supreme Court. 
          We keep our clients informed on case updates and address any questions on case proceedings. Our team has successfully handled civil, criminal, corporate cases, 
          public interest cases, and some cases have been landmark judgments for public welfare.
        </p>
      </div>
      <div className="team">
      <h2>Our Advocates</h2>
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
      <div className="about-image">
        <img src="path_to_your_image.jpg" alt="Legal team" />
      </div>
    </section>
  );
};

export default About;
