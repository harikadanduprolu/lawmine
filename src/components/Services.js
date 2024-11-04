// src/components/Services.js
import React from 'react';
import './Services.css';
import { FaGavel, FaBalanceScale, FaLandmark, FaRegBuilding } from 'react-icons/fa';

const Services = () => {
  const servicesList = [
    {
      title: "Trial Court Services/Cases",
      icon: <FaGavel />,
      categories: [
        {
          title: "Criminal Law",
          items: ["Metropolitan Magistrate - JFCM", "Metropolitan Sessions Court Services/Cases"]
        },
        {
          title: "Civil Law",
          items: ["Junior Civil Judge Court Services", "District Civil Judge Court Services"]
        },
        {
          title: "Family Law",
          items: ["Family Court Services"]
        }
      ]
    },
    {
      title: "High Court Services/Cases",
      description: "Dedicated legal services for high-stakes cases handled in High Courts across the country.",
      icon: <FaBalanceScale />
    },
    {
      title: "State Govt Tribunal Services/Cases",
      description: "Specialized legal expertise for cases involving state government tribunals, including appeals and petitions.",
      icon: <FaLandmark />
    },
    {
      title: "Central Govt Tribunal Services/Cases",
      description: "Professional legal assistance for central government tribunal cases, ensuring thorough and reliable advocacy.",
      icon: <FaRegBuilding />
    },
  ];

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <p>Explore our extensive legal services and solutions tailored to meet your unique needs.</p>
      <div className="services-list">
        {servicesList.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="icon-wrapper">{service.icon}</div>
            <h3>{service.title}</h3>
            {service.categories ? (
              <div className="service-categories">
                {service.categories.map((category, catIndex) => (
                  <div className="category-item" key={catIndex}>
                    <h4>{category.title}</h4>
                    <ul>
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p>{service.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
