/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom'; // Import Link from React Router
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <div className="herotext">
          Hello, I’m <br />
          <span>Neeraj Kumar</span>
        </div>
        <div className="visualtext">Visual & Experience Designer</div>
        <div className="line"></div>
        <div className="btn">
          <div className="continue">
          <Link to="/about" >Click To Continue</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
