import React from 'react';
import CardList from '../components/CardList';
import '../pages/Projects.css';
import image1 from '../assets/img/solfege.jpg';
import image2 from '../assets/img/itinerary.png';
import image3 from '../assets/img/date-difference-calculator-d94-1200-calenup.webp';
import image4 from '../assets/img/date-difference-calculator-d94-1200-calenup.webp';
import image5 from '../assets/img/Components-1-1024x482.png';
import image6 from '../assets/img/ChatGPT Image Jul 2, 2025, 12_53_13 AM.png';
import image7 from '../assets/img/samosa.png';
import image8 from '../assets/img/build.png';

// sort prokects into language / field 
const events = [
  {
    title: 'Solfege Note Memory Game',
    description: 'An interactive memory game designed to play a pattern of tones and recognize the user-selected tone as correct or incorrect. Obtained 3rd place in a 24-hour coding competition, where the theme was to create a game that can help with studying. Created with HTML, CSS, and JavaScript.',
    link: 'https://github.com/chelseaezumah/Solfege-Note-Memory-Game',
    image: image1
  },
  {
    title: 'Itinerary Calendar App',
    description: 'A digital tool designed to help users plan, organize, and track events, tasks, or trips over a specific period—typically in calendar format. It combines features of a calendar and itinerary planner, making it ideal for personal use, team coordination, or travel. Created with React & CSS.',
    link: 'https://github.com/chelseaezumah/Itinerary-Calendar-App',
    image: image2
  },
  {
    title: 'Date Difference Calculator',
    description: 'An employee payroll system in C. The system calculates employee pay based on hourly wages, overtime, and bonuses, and stores employee data such as names, IDs, and hours worked using structures and arrays. I implemented file I/O to allow persistent storage and retrieval of payroll records and included input validation and error handling to ensure a smooth and user-friendly experience.',
    link: 'https://github.com/chelseaezumah/Date-Difference-Calculator',
    image: image3
  },
  {
    title: 'Decimal to Radix-r Number Converter',
    description: 'A C program that accepts two decimal integers, and converts the first decimal integer d into its representation in radix r.',
    link: 'https://github.com/chelseaezumah/Decimal-to-Radix-r-Number-Converter',
    image: image4
  },
  {
    title: 'Interactive Linked List Command Processor',
    description: 'An interactive C program that prompts the user for commands, accepts commands from the keyboard (stdin) and executes the commands. This program deals with linked lists.',
    link: 'https://github.com/chelseaezumah/Interactive-Linked-List-Command-Processor',
    image: image5
  },
  {
    title: 'RM Language Interpreter with Line-by-Line Execution and Error Reporting',
    description: 'A C program whose input is an RM language program and whose output is a listing of the RM program with line numbers and either the final values of the registers after executing the RM program or a listing of errors with their corresponding line numbers.',
    link: 'https://github.com/chelseaezumah/RM-Language-Interpreter-with-Line-by-Line-Execution-and-Error-Reporting',
    image: image6
  },
  {
    title: 'Samosa Selector',
    description: 'A clicker-style game where users earn samosas by clicking on a Big Samosa, starting with 1 samosa per click. As the user accumulates samosas, they can unlock and purchase upgrades to increase the number of samosas gained per click. Coding features involved include event listeners for clicks, conditional logic for unlocking upgrades, and variables to track samosa count and upgrade levels.',
    link: 'https://github.com/chelseaezumah/Samosa-Selector',
    image: image7
  },
  {
    title: 'Build Your Own Screenshot',
    description: 'This app uses the ApiFlash API to take screenshots of a given website with a variety of user-entered parameters. This was created with JavaScript and React features such as useState().',
    link: 'https://github.com/chelseaezumah/Build-Your-Screenshot',
    image: image8
  },
  // {
  //   title: 'Crypto Currency Tracker',
  //   description: 'An employee payroll system in C. The system calculates employee pay based on hourly wages, overtime, and bonuses, and stores employee data such as names, IDs, and hours worked using structures and arrays. I implemented file I/O to allow persistent storage and retrieval of payroll records and included input validation and error handling to ensure a smooth and user-friendly experience.',
  //   link: 'https://github.com/chelseaezumah/Date-Difference-Calculator',
  //   image: image9
  // }
]

const Projects = () => {
  return (
    <div>
      <CardList events={events} />
    </div>
  );
};

export default Projects;
