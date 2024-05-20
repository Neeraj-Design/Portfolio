import "./Ui.css";
import { Link } from "react-router-dom";
const Ui = () => {
  return (
    <>
    <div className="uicomp">
      {/* 1 */}
      <div className="project-container">
        <div className="project-overview">
          <p className="project-name">Moda Muse</p>
          <div className="project-detail">   
           <span>Vogue Voyage is a revolutionary platform bridging the</span>
           <span>dynamic world the dynamic world of fashion with</span>
           <span>data analytics. Leveraging data from social media</span>
           <span>and online shopping platform.</span>
          </div>
           <Link to="/Portfolio/modaMuse" className="link-no-underline">
          <div className="View-Project-btn">
            <div className="View-Project">
                View Project
            </div>
          </div>
                </Link>
        </div>
        <div className="project-img">
          <img src="/Portfolio/Moda Muse.png" alt="" />
        </div>
      </div>

      {/* 2 */}

      <div className="project-container">
        <div className="project-img">
          <img src="/Portfolio/Home Hive.png" alt="" />
        </div>
        <div className="project-overview">
          <p className="project-name">Home Hive</p>
          <div className="project-detail">   
           <span>Living Hub is a groundbreaking platform designed </span>
           <span>exclusively for international students, addressing</span>
           <span>the challenges of finding suitable housing and </span>
           <span>building community abroad.</span>
          </div>
            <Link to="/Portfolio/homeHive" className="link-no-underline">
          <div className="View-Project-btn">
            <div className="View-Project">
                View Project
            </div>
          </div>
                </Link>
        </div>
        
      </div>

      {/* 3 */}

     <div className="project-container">
        <div className="project-overview">
          <p className="project-name">Alive Spaces</p>
          <div className="project-detail">   
           <span>Alive Spaces aim to provide an interactive user</span>
           <span>experience display for a futuristic luxury vehicle</span>
           <span>that aims at creating the riding experience and the</span>
           <span>vessel as alive as possible for the users.</span>
          </div>
              <Link to="/Portfolio/aliveSpaces" className="link-no-underline">
          <div className="View-Project-btn">
            <div className="View-Project">
                View Project
            </div>
          </div>
                </Link>
        </div>
        <div className="project-img">
          <img src="/Portfolio/Alive Spaces.png" alt="" />
        </div>
      </div>

      {/* 4 */}

     <div className="project-container">
        <div className="project-img">
          <img src="/Portfolio/Sereni Tech.png" alt="" />
        </div>
        <div className="project-overview">
          <p className="project-name">Zenify</p>
          <div className="project-detail">   
           <span>Zenify aims to help busy individuals of the modern</span>
           <span>age take a moment for themselves and improve</span>
           <span>their meditation practice using personalized</span>
           <span>biofeedback data.</span>
          </div>
           <Link to="/Portfolio/sereniTech" className="link-no-underline">
          <div className="View-Project-btn">
            <div className="View-Project">
                View Project
            </div>
          </div>
                </Link>
        </div>
        
      </div>

      {/* 5 */}

      <div className="project-container">
        <div className="project-overview">
          <p className="project-name">Easy Grocery</p>
          <div className="project-detail">   
           <span>Platform in which people can buy groceries. The</span>
           <span>platform enables local retail shops to sell their </span>
           <span>products online. This platform enables  </span>
           <span>consumers to buy their daily grocery needs </span>
           <span>using this platform.  </span>
          </div>
           <Link to="/Portfolio/easyGrocery" className="link-no-underline">
          <div className="View-Project-btn">
            <div className="View-Project">
                View Project
            </div>
          </div>
                </Link>
        </div>
        <div className="project-img">
          <img src="/Portfolio/Easy Grocery.png" alt="" />
        </div>
      </div>
      </div>
    </>
  );
};

export default Ui;
