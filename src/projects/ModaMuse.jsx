import { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './project.css';

const ModaMuse = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleMouseDown = (event) => {
      setIsDragging(true);
      setStartX(event.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (event) => {
      if (!isDragging) return;
      event.preventDefault();
      const x = event.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2; 
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const scrollContainer = scrollRef.current;

    scrollContainer.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      scrollContainer.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging, scrollLeft, startX]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Navbar /> 
      <div className="project1-container">
        <img className="loading" src="/Portfolio/p11.jpg" alt="Project Image 1" loading="lazy" onLoad={(e) => e.target.classList.remove('loading')} />
      </div>
      <div className="proj1-scrolling" ref={scrollRef}>
        <img className="scrollingimg loading" src="/Portfolio/p12.jpg" alt="Project Image 2" loading="lazy" onLoad={(e) => e.target.classList.remove('loading')} />
      </div>
      <div className="project1-container">
        <img className="loading" src="/Portfolio/p13.jpg" alt="Project Image 3" loading="lazy" onLoad={(e) => e.target.classList.remove('loading')} />
      </div>
      <div className="project1Text-container">
        <img className="loading" src="/Portfolio/p14.jpg" alt="Project Image 4" loading="lazy" onLoad={(e) => e.target.classList.remove('loading')} />
      </div>
      <div className="prototype">
        <iframe
          style={{ border: 'none' }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9dKygcDsjdHOswNWW4U3pB%2FTrend-Analyzer%3Fpage-id%3D257%253A198%26node-id%3D357-499%26viewport%3D628%252C-47%252C0.13%26t%3De3uQQm3drRFu9X8g-1%26scaling%3Dscale-down"
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

export default ModaMuse;
