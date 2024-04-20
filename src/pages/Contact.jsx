
import Navbar from '../components/Navbar'; // Import your Navbar component

const Contact = () => {
  return (
    <>
      <Navbar /> {/* Render the Navbar component */}
      <div className="contact-content">
        {/* Your Contact page content goes here */}
        <h1>Contact Page</h1>
        <p>This is the Contact page content.</p>
      </div>
    </>
  );
};

export default Contact;
