import Navbar from '../components/Navbar';
import './project.css';
import { useEffect, useState } from 'react';

const AliveSpaces = () => {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageLoad = (index) => {
    setLoadedImages(prev => [...prev, index]);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const images = [
    "/Portfolio/p31.png",
    "/Portfolio/p3.jpg"
  ];

  return (
    <>
      <Navbar /> 
      <div className="project3-container">
        <img
          loading="lazy"
          src={images[0]}
          alt="Project Image 1"
          className={loadedImages.includes(0) ? '' : 'blur'}
          onLoad={() => handleImageLoad(0)}
        />
        <video src="/Portfolio/Mockup.mp4" autoPlay loop controls={false} playsInline></video>
        <img
          loading="lazy"
          src={images[1]}
          alt="Project Image 2"
          className={loadedImages.includes(1) ? '' : 'blur'}
          onLoad={() => handleImageLoad(1)}
        />
      </div>
      <div className="footerStrip">
        <p>Neeraj Kumar - 2024</p>
        <p>neeraj942000@gmail.com</p>
      </div>
      <button className="scrollToTop" onClick={scrollToTop}>▲</button>
    </>
  );
};

export default AliveSpaces;
