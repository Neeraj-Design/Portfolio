import { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './project.css';

const ModaMuse = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null);

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

  return (
    <>
      <Navbar /> 
      <div className="project1-container">
        <img src="/Portfolio/p11.jpg" alt="" />
      </div>
      <div className="proj1-scrolling" ref={scrollRef}>
        <img className='scrollingimg' src="/Portfolio/p12.jpg" alt="" />
      </div>
      <div className="project1-container">
        <img src="/Portfolio/p13.jpg" alt="" />
      </div>
    </>
  );
};

export default ModaMuse;
