
import Navbar from '../components/Navbar'; // Import your Navbar component

const About = () => {
  return (
    <>
      <Navbar /> {/* Render the Navbar component */}
      <div className="about-content">
        {/* Your About page content goes here */}
        <h1>About Page</h1>
        <p>This is the About page content.</p>
      </div>
    </>
  );
};

export default About;
