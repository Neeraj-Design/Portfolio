import Navbar from '../components/Navbar'; 
import './Work.css';
import { Link } from 'react-router-dom';
// import Ui from '../components/Ui'
const Work = () => {
  return (
    <>
      <Navbar /> 
      <div className="work-container">
        <div className="work-content">
          <div className="graphics">
            {/* <Link to="/Portfolio/graphics"> */}
              <img src="/Portfolio/graphics.png" alt="" />
            
            {/* </Link> */}
          </div>


          <div className="ui-ux">
            <Link to="/Portfolio/ui">
              <img className='ui-uximg' src="/Portfolio/uiux.png" alt="" />
            </Link>
          </div>


        </div>
      </div>
      <div className="contactFoot">
      
      <div className="contactFootL"><p>Neeraj Kumar - 2024</p></div>
      
      <div className="contactFootR"> 
      <div className="socials">
            <a target="_blank" href="https://www.behance.net/000nr1118c21NKR"><img src="/Portfolio/behance.png" alt="" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/neeraj-kumar-002118283/"><img src="/Portfolio/linkedin.png" alt="" /></a>
           <a target="_blank" href="https://www.instagram.com/_the_neeeraj/?igsh=NHQzdWNzd3o0Zmpy&utm_source=qr"> <img src="/Portfolio/instagram.png" alt="" /></a>
          </div>
          
          </div>
     </div>
      {/* <Ui /> */}
    </>
  );
};

export default Work;
