import Navbar from '../components/Navbar'; 
import './Work.css';
// import { Link } from 'react-router-dom';
import Ui from '../components/Ui'
const Work = () => {
  return (
    <>
      <Navbar /> 
      {/* <div className="work-container">
        <div className="work-content">
          <div className="graphics">
            <Link to="/Portfolio/graphics">
              <img src="/Portfolio/graphics.png" alt="" />
              <p>Graphics</p>
            </Link>
          </div>
          <div className="ui-ux">
            <Link to="/Portfolio/ui">
              <img className='ui-uximg' src="/Portfolio/uiux.png" alt="" />
              <p>UI/UX</p>
            </Link>
          </div>
        </div>
      </div> */}
      <Ui />
    </>
  );
};

export default Work;
