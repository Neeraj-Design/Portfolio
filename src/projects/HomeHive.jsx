import Navbar from '../components/Navbar';
import './project.css';
import { useEffect, useState } from 'react';

const HomeHive = () => {
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
    "/Portfolio/p2.jpg",
    "/Portfolio/p14.jpg"
  ];

  return (
    <>
      <Navbar />
      <div className="project4-container">
        <img
          loading="lazy"
          src={images[0]}
          alt="Project Image 1"
          className={loadedImages.includes(0) ? '' : 'blur'}
          onLoad={() => handleImageLoad(0)}
        />
      </div>
      <div className="project1Text-container">
        <img
          loading="lazy"
          src={images[1]}
          alt="Project Image 2"
          className={loadedImages.includes(1) ? '' : 'blur'}
          onLoad={() => handleImageLoad(1)}
        />
      </div>
      <div className="prototype">
        <iframe
          style={{ border: 'none' }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FPNkCetUH31G0pkGz9orhyB%2FHome-Hive%3Fpage-id%3D121%253A626%26node-id%3D313-1299%26viewport%3D677%252C476%252C0.15%26t%3DpQ2rvoT6dLgd93Zd-1%26scaling%3Dscale-down%26starting-point-node-id%3D313%253A1299"
          allowFullScreen
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

export default HomeHive;
