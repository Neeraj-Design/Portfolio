import Navbar from '../components/Navbar';
import './project.css';

const AliveSpaces = () => {
  return (
    <>
      <Navbar /> 
      <div className="project3-container">
        <img src="/Portfolio/p31.png" alt="" />
        <video src="/Portfolio/Mockup.mp4" autoPlay loop controls={false}></video>
      </div>
    </>
  );
};

export default AliveSpaces;
