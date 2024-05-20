/* eslint-disable react/no-unescaped-entities */
import './Home.css'
import { Link } from 'react-router-dom'; // Import Link from React Router

const Home = () => {
  return (
    <>
    <div className="container">
        <div className="herotext">
          Hello, I’m <br />
          <span>Neeraj Kumar</span>
        </div>
        <div className="visualtext">Visual & Experience Designer</div>
        <div className="line"></div>

          <Link to="/Portfolio/about" className="link-no-underline">
        <div className="btn">
          <div className="continue">
            Click To Continue
          </div>
        </div>
            </Link>
      </div>
    </>
  )
}

export default Home