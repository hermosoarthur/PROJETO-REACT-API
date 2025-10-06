import React from 'react';
import { Link } from 'react-router-dom';
import './Developers.css';

const Developers = () => {
  const developers = [
    {
      name: "Arthur Hermoso",
      avatar: "",
      github: "https://github.com/hermosoarthur",
      linkedin: "https://linkedin.com/in/arthurhermoso"
    },
    {
      name: "",
      avatar: "",
      github: "",
      linkedin: ""
    },
    {
      name: "",
      avatar: "",
      github: "",
      linkedin: ""
    },
    {
      name: "",
      avatar: "",
      github: "",
      linkedin: ""
    },
    {
      name: "",
      avatar: "",
      github: "",
      linkedin: ""
    },
    {
      name: "",
      avatar: "",
      github: "",
      linkedin: ""
    }
  ];

  return (
    <div className="developers-page">
      <div className="container">
        <div className="page-header">
          <h1>Desenvolvedores</h1>
          <Link to="/" className="back-button">← Voltar para Home</Link>
        </div>

        <div className="developers-grid">
          {developers.map((dev, index) => (
            <div key={index} className="developer-card">
              <div className="developer-avatar">
                <img src={dev.avatar} alt={dev.name} />
              </div>
              <div className="developer-info">
                <h3>{dev.name}</h3>
                <p className="developer-role">{dev.role}</p>
                <div className="developer-links">
                  <a href={dev.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={dev.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developers;