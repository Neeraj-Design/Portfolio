import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import Work from './Work.jsx'; // Import your Work component
import About from './About.jsx'; // Import your About component
import Contact from './Contact.jsx'; // Import your Contact component
import { createRoot } from 'react-dom/client';
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>
      <Route path="/portfolio/" element={<App />} />
      <Route path="/portfolio/work" element={<Work />} />
      <Route path="/portfolio/about" element={<About />} />
      <Route path="/portfolio/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
