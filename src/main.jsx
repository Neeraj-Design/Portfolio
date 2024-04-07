import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Work from './Work.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx'; // Import Home component

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Portfolio">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
