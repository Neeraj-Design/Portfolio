import Navbar from '../components/Navbar';
import './project.css';
import { useEffect } from 'react';
const AliveSpaces = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar /> 
      <div className="project3-container">
        <img src="/Portfolio/p31.png" alt="" />
        <video src="/Portfolio/Mockup.mp4" autoPlay loop controls={false} playsInline></video>
        <img src="/Portfolio/p3.jpg" alt="" />
      </div>
      <div className="footerStrip">
    <p>Neeraj Kumar - 2024</p>
    <p>neeraj942000@gmail.com</p>
  </div>
    </>
  );
};

export default AliveSpaces;
