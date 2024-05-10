import { HashRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Work from './pages/Work.jsx';
import About from './pages/About.jsx';
// import Graphics from './components/Graphics.jsx';
// import Ui from './components/Ui.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx'; // Import Home component
import ModaMuse from './projects/ModaMuse.jsx';
import HomeHive from './projects/HomeHive.jsx';
import AliveSpaces from './projects/AliveSpaces.jsx';
import SereniTech from './projects/SereniTech.jsx';
import EasyGrocery from './projects/EasyGrocery.jsx';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Portfolio/work" element={<Work />} />
      <Route path="/Portfolio/about" element={<About />} />
      <Route path="/Portfolio/contact" element={<Contact />} />
      <Route path="/Portfolio/modaMuse" element={<ModaMuse />} />
      <Route path="/Portfolio/homeHive" element={<HomeHive />} />
      <Route path="/Portfolio/aliveSpaces" element={<AliveSpaces />} />
      <Route path="/Portfolio/sereniTech" element={<SereniTech />} />
      <Route path="/Portfolio/easyGrocery" element={<EasyGrocery />} />
      {/* <Route path="/Portfolio/graphics" element={<Graphics />} />
      <Route path="/Portfolio/ui" element={<Ui />} /> */}
    </Routes>
  </HashRouter>
);
