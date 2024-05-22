import Navbar from '../components/Navbar'; 
import './Work.css';
import { Link } from 'react-router-dom';
// import Ui from '../components/Ui'
const Work = () => {
  return (
    <>
      <Navbar /> 
      {/* 1 */}
      <div className="workelement">

      
      <div className="work-container">
        <div className="project-overview">
          <p className="project-name">UI/UX</p>
         
           <Link to="/Portfolio/ui" className="link-no-underline">
          <div className="View-Project-btn">
            <div className="View-Projects">
                View All Projects
            </div>
          </div>
                </Link>
        </div>
        <div className="project-img">
          <img src="/Portfolio/uiux.png" alt="" />
        </div>
      </div>

      {/* 2 */}

      <div className="work-container">
        <div className="project-img">
          <img src="/Portfolio/graphics.png" alt="" />
        </div>
        <div className="project-overview">
          <p className="project-name">GRAPHICS</p>
          <div className="project-detail">   
           <span>Work in progress, will update soon!</span>
           
          </div>
            {/* <Link to="/Portfolio/graphics" className="link-no-underline"> */}
          <div className="View-Project-btn">
            <div className="View-Projects">
                View All Projects
            </div>
          </div>
                {/* </Link> */}
        </div>
        
      </div>
      {/* <div className="work-container">
        <div className="work-content">
          <div className="graphics">
            <Link to="/Portfolio/graphics">
              <img src="/Portfolio/graphics.png" alt="" />
            
            </Link>
          </div>


          <div className="ui-ux">
            <Link to="/Portfolio/ui">
              <img className='ui-uximg' src="/Portfolio/uiux.png" alt="" />
            </Link>
          </div>


        </div>
      </div> */}

      {/* <div className="workFoot">
      
      <div className="workFootL"><p>Neeraj Kumar - 2024</p></div>
      
      <div className="workFootR"> 
      <div className="socials">
            <a target="_blank" href="https://www.behance.net/000nr1118c21NKR"><img src="/Portfolio/behance.png" alt="" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/neeraj-kumar-002118283/"><img src="/Portfolio/linkedin.png" alt="" /></a>
           <a target="_blank" href="https://www.instagram.com/_the_neeeraj/?igsh=NHQzdWNzd3o0Zmpy&utm_source=qr"> <img src="/Portfolio/instagram.png" alt="" /></a>
          </div>
          
          </div>
     </div> */}
      {/* <Ui /> */}
      </div>
    </>
  );
};

export default Work;
