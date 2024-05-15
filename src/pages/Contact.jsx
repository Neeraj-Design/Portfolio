import Navbar from '../components/Navbar'; 
import './Contact.css'
const Contact = () => {
  return (
    <>
      <Navbar /> 
      <div className="contact-content">
        <div className="foot-container">
      <div className="resume-section">
        <span>I’m thrilled to answer to</span>
        <span>your next project <img className='arrowimg' src="/Portfolio/arrow.png" alt="" /></span>
        <button className='viewResumebtn'>View Resume</button>
      </div>
      <div className="contact-section">
        <p>neeraj942000@gmail.com</p>
        <div className="socials">
          <img src="/Portfolio/linkedin.png" alt="" />
          <img src="/Portfolio/instagram.png" alt="" />
        </div>
      </div>
      </div>
      <p className='neeraj-foot'>Neeraj Kumar - 2024</p>
      </div>
    </>
  );
};

export default Contact;
