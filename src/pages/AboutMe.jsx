import React from 'react';
import '../pages/AboutMe.css';
import resumeImage from "../assets/chelsea-resume.png";

const AboutMe = () => {
  return (
    <div className="container">
      <img className="poop" src={resumeImage} alt="Chelsea Ezumah Resume" />
      
      <div className="text-content">
        <h1>You can view my resume here. </h1>
        <h3 className='second-text'>Click this button to ensure that you are viewing my most up-to-date resume.</h3>
        <button 
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/1t8Y_cMbuyI8axpBRP7jJqavqjDh_-AIc5d7XvYfzfsA/edit?usp=sharing"
            )
          }
        >
          Visit My Live Resume
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
