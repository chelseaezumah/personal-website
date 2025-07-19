import React from 'react';
import logo from "../assets/IMG_0822.png";
import '../pages/Home.css'; // Adjust the path as necessary

const Home = () => {
  return (
    <div className="content-container">
      <div className="image-side">
    <img src={logo} alt="Logo" className="image" />
  </div>
      <div className="text-container">
        <h1>Welcome!</h1>
        <h2>My name is Chelsea Ezumah, and this is my personal website.</h2>
        <p>I am a student attending the University at Albany. I intend on graduating in May of 2027.
            I am currently pursuing a degree in Computer Science. 
        </p>
        <p>I’m actively involved in learning more about full-stack development, data science, machine learning, & AI.
            Feel free to explore my website and learn more about me and my background.
            If you have any questions or would like to connect, don't hesitate to reach out!
        </p>
       
        <button onClick={() => window.open("https://www.linkedin.com/in/chelseaezumah00/", "_blank")}>LinkedIn</button>
        <button onClick={() => window.open("https://github.com/chelseaezumah", "_blank")}>GitHub</button> 
        <button onClick={() => window.open("mailto:chelseaezumah@gmail.com", "_blank")}>Email</button> 
      </div>
    </div>
    
  );
};

export default Home;
