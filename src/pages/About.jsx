import Navbar from "../components/Navbar";
import "./About.css";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="heroSection">
        <p className="hitext1">
          Hi, I’m Neeraj Kumar, a multidisciplinary designer with a passion for
          Visual design.
        </p>
        <div className="leftSide">
          <img src="/Portfolio/DP.png" alt="" />
        </div>
        <div className="rightSide">
          <p className="hitext">
            Hi, I’m Neeraj Kumar, a multidisciplinary designer with a passion
            for Visual design.
          </p>
          <p className="introFirst">
            As a multidisciplinary visual designer based in Berlin, I am looking
            for work opportunities to hone my skills and knowledge in visual
            design, UI and UX.
          </p>
          <p className="introFirst">
            Currently exploring the realm of Visual Experience Design at UE
            Applied Sciences Potsdam, I am to Position my practice at the
            intersection of design, strategy, and technology.
          </p>
        </div>
      </div>
      <div className="eduSection">
        <div className="education">
          <p className="educationHeading">Education.</p>
          <p className="institution">
            University of Petroleum & Energy Studies
          </p>
          <p className="degree">Transportation & Mobility Design (Bachelors)</p>
          <p className="institution">
            University of Europe for Applied Studies
          </p>
          <p className="degree">Visual & Experience Design (Masters)</p>
        </div>
        <div className="skills">
          <p className="skillsHeading">Skills.</p>
          <div className="skillset1">
            <p className="skillList">Photoshop</p>
            <p className="skillList">Illustrator</p>
            <p className="skillList">Premiere Pro</p>
          </div>
          <div className="skillset2">
            <p className="skillList">Lightroom</p>
            <p className="skillList">Indesign</p>
            <p className="skillList">Figma</p>
            <p className="skillList">Blender 3D</p>
          </div>
        </div>
      </div>
      <div className="horizLine1"></div>

      <div className="foot-container">
        <div className="resume-section">
          <span>I’m thrilled to answer to</span>
          <span>
            your next project{" "}
            <img className="arrowimg" src="/Portfolio/arrow.png" alt="" />
          </span>
          <button className="viewResumebtn">View Resume</button>
        </div>
        <div className="contact-section">
          <p>neeraj942000@gmail.com</p>
          <div className="socials">
            <img src="/Portfolio/linkedin.png" alt="" />
            <img src="/Portfolio/instagram.png" alt="" />
          </div>
        </div>
      </div>
      <p className="neeraj-foot">Neeraj Kumar - 2024</p>
    </>
  );
};

export default About;
