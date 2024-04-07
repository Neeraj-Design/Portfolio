import { HashRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Work from './Work.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx'; // Import Home component

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Portfolio/work" element={<Work />} />
      <Route path="/Portfolio/about" element={<About />} />
      <Route path="/Portfolio/contact" element={<Contact />} />
    </Routes>
  </HashRouter>
);
