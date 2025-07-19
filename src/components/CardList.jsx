// filepath: /Users/chelseaezumah/Downloads/github/project 1/web102_project1/src/components/CardList.jsx
import React from 'react';
import Card from './Card';

const CardList = ({ events }) => {
  return (
    <div className="card-list">
      {events.map((event, index) => (
        <Card
          key={index}
          title={event.title}
          description={event.description}
          link={event.link}
          image={event.image}
        />
      ))}
    </div>
  );
};

export default CardList;
