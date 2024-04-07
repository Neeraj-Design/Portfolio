import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Work from './Work.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Portfolio">
    <Routes>
      <Route path="/" element={<App />} /> {/* This route corresponds to "/Portfolio/" */}
      <Route path="/work" element={<Work />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
