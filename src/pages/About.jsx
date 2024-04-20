import Navbar from '../components/Navbar'; // Import your Navbar component
import './About.css'
const About = () => {
  return (
    <>
      <Navbar /> {/* Render the Navbar component */}
     <div className="heroSection">
      <div className="leftSide">
        <img src="/Portfolio/DP.png" alt="" />
      </div>
      <div className="rightSide">
        <p className='hitext'>Hi, I’m Neeraj Kumar, a multidisciplinary designer with a passion for Visual design.</p>
        <p className='introFirst'>As a multidisciplinary visual designer based in Berlin, I am looking for work opportunities to hone my skills and knowledge in visual design, UI and UX.</p>
        <p className='introFirst' >Currently exploring the realm of Visual Experience Design at UE Applied Sciences Potsdam, I am to Position my practice at the intersection of design, strategy, and technology.</p>
      </div>
     </div>
     <div className="eduSection">
      <div className="education">
        <p className='educationHeading'>Education.</p>
        <p className='institution'>University of Petroleum & Energy Studies</p>
        <p className='degree'>Transportation & Mobility Design (Bachelors)</p>
        <p className='institution'>University of Europe for Applied Studies</p>
        <p className='degree'>Visual & Experience Design (Masters)</p>
      </div>
      <div className="skills">
        <p className='skillsHeading'>Skills.</p>
        <div className="skillset1">
        <p className='skillList'>Photoshop</p>
        <p className='skillList'>Illustrator</p>
        <p className='skillList'>Premiere Pro</p>
        </div>
         <div className="skillset2">
        <p className='skillList'>Lightroom</p>
        <p className='skillList'>Indesign</p>
        <p className='skillList'>Figma</p>
        <p className='skillList'>Blender 3D</p>
        </div>
      </div>
     </div>
     <div className="horizLine1"></div>
    </>
  );
};

export default About;
