// filepath: /Users/chelseaezumah/Downloads/github/project 1/web102_project1/src/components/Card.jsx
import React from 'react';

const Card = ({ title, description, link, image}) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} className="card-link">GitHub Repo</a>
    </div>
  );
};

export default Card;