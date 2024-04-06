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
      <Route path="/Portfolio/" element={<App />} />
      <Route path="/Portfolio/work" element={<Work />} />
      <Route path="/Portfolio/about" element={<About />} />
      <Route path="/Portfolio/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
