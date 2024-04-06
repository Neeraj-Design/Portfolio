// Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="logo">
        {/* Update the image src with the base URL */}
        <img src="/Portfolio/NK.svg" alt="Logo" />
      </div>
      <div className="right-it">
        <ul>
          <li>
            <Link to="/Portfolio/work" className={location.pathname === '/Portfolio/work' ? 'active' : ''}>Work</Link>
          </li>
          <li>
            <Link to="/Portfolio/about" className={location.pathname === '/Portfolio/about' ? 'active' : ''}>About</Link>
          </li>
          <li>
            <Link to="/Portfolio/contact" className={location.pathname === '/Portfolio/contact' ? 'active' : ''}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
