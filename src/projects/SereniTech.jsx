import Navbar from "../components/Navbar";
import "./project.css";
import { useEffect, useState } from 'react';

const SereniTech = () => {
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
    "/Portfolio/p41.jpg",
    "/Portfolio/p42.png",
    "/Portfolio/p43.jpg",
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
      <div className="project42-container">
        <img
          loading="lazy"
          src={images[1]}
          alt="Project Image 2"
          className={loadedImages.includes(1) ? '' : 'blur'}
          onLoad={() => handleImageLoad(1)}
        />
      </div>
      <div className="animationFrame">
        <div className="upper">
          <div className="upperTitle">
            <p>Home & Analysis</p>
            <span>
              The platform offers a range of functionalities enabling users to
              access
            </span>
            <span>
              their prior meditation sessions, schedule new sessions, and
              receive
            </span>
            <span>tips to enhance their meditation practice.</span>
          </div>
          <div className="upperFigma">
            <iframe
              style={{ border: "none" }}
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0WInfi78UOwGxUZaF3tPKs%2FWorkplace%3Fpage-id%3D0%253A1%26node-id%3D1044-8150%26viewport%3D-9560%252C-1704%252C0.42%26t%3D7CGHfJIwNGVZL2eb-1%26scaling%3Dscale-down"
              allowFullScreen
            />
          </div>
        </div>
        <div className="upper">
          <div className="upperFigma">
            <iframe
              style={{ border: "none" }}
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0WInfi78UOwGxUZaF3tPKs%2FWorkplace%3Fpage-id%3D0%253A1%26node-id%3D1044-8741%26viewport%3D-16506%252C-3121%252C0.72%26t%3DQ3nfjJTvCRYWWJLE-1%26scaling%3Dscale-down"
              allowFullScreen
            />
          </div>
          <div className="upperTitle">
            <p>Heart rate & Breathing</p>
            <span>
              Experience the sleek and intuitive onboarding for effortless
            </span>
            <span>navigation through our clean and elegant interface.</span>
          </div>
        </div>
      </div>
      <div className="project4-container">
        <img
          loading="lazy"
          src={images[2]}
          alt="Project Image 3"
          className={loadedImages.includes(2) ? '' : 'blur'}
          onLoad={() => handleImageLoad(2)}
        />
      </div>
      <div className="project1Text-container">
        <img
          loading="lazy"
          src={images[3]}
          alt="Project Image 4"
          className={loadedImages.includes(3) ? '' : 'blur'}
          onLoad={() => handleImageLoad(3)}
        />
      </div>
      <div className="prototype">
        <iframe
          style={{ border: 'none' }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F19nihBQTCvYbfGbpijPcc1%2FEnvisioning%3Fpage-id%3D0%253A1%26node-id%3D1-8958%26viewport%3D1463%252C557%252C0.62%26t%3D8dPCuBRKcOh5t7VU-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A8958"
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

export default SereniTech;
