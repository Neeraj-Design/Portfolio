import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import './project.css';

const EasyGrocery = () => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Navbar />
      <div className="project5-container">
        <img 
          src="/Portfolio/p5N.jpg" 
          alt="Project Image 1" 
          className={isImageLoaded ? 'loaded' : 'loading'} 
          onLoad={() => setImageLoaded(true)} 
        />
      </div>
      <div className="project1Text-container">
        <img 
          src="/Portfolio/p14.jpg" 
          alt="Project Image 2" 
          className={isImageLoaded ? 'loaded' : 'loading'} 
          onLoad={() => setImageLoaded(true)} 
        />
      </div>
      <div className="prototype">
        <iframe
          style={{ border: 'none' }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fo3EfHC1BGLJwMhgNgjhOdL%2Feasy-grocery%3Fpage-id%3D21%253A696%26node-id%3D541-1210%26viewport%3D451%252C267%252C0.21%26t%3DTptKVBptcGKB4uCR-1%26scaling%3Dscale-down"
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

export default EasyGrocery;
