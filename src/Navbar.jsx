// Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="logo">
        {/* Update the image src with the base URL */}
        <img src="/NK.svg" alt="Logo" />
      </div>
      <div className="right-it">
        <ul>
          <li>
            <Link to="/work" className={location.pathname === '/work' ? 'active' : ''}>Work</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
