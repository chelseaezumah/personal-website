import React from 'react';
import './App.css';
import Projects from './pages/Projects';
import { useRoutes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Timeline from './pages/Timeline';



function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    {path: "/aboutme", element: <AboutMe /> },
    {path: "/projects", element: <Projects /> },
    {path: "/timeline", element: <Timeline /> },

  ]);

  return (
    <>
    <NavBar />
   
    
      {routes} {/* Render the routed content */}
    </>
  );
}

export default App;