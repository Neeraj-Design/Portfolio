import Navbar from '../components/Navbar'; 
import './Contact.css'
const Contact = () => {
  return (
    <>
    <div className="contactContainer">
      <Navbar /> 
     <div className="contactFirst">
      <div className="contactList">
        <p>Email:</p>
        <p>neeraj942000@gmail.com</p>
      </div>

       <div className="contactList">
        <p>Phone:</p>
        <p>+49 15213505913</p>
      </div>

       <div className="contactList">
        <p>Place:</p>
        <p>Berlin, DE</p>
      </div>
     </div>

     <div className="contactMid">
     {/* <span> I look forward to</span>
     <span>hearing from you!</span> */}
     <img src="/Portfolio/contactimg.png" alt="" />
     </div>

     <div className="contactFoot">
      <div className="contactFootL"><p>Neeraj Kumar - 2024</p></div>
      
      <div className="contactFootR"> <div className="socials">
            <a target="_blank" href="https://www.behance.net/000nr1118c21NKR"><img src="/Portfolio/behance.png" alt="" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/neeraj-kumar-002118283/"><img src="/Portfolio/linkedin.png" alt="" /></a>
           <a target="_blank" href="https://www.instagram.com/_the_neeeraj/?igsh=NHQzdWNzd3o0Zmpy&utm_source=qr"> <img src="/Portfolio/instagram.png" alt="" /></a>
          </div></div>
      
     </div>
     </div>
    </>
  );
};

export default Contact;
