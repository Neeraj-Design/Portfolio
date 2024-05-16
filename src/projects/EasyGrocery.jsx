import Navbar from '../components/Navbar';
import './project.css'

const EasyGrocery = () => {
  return (
    <>
    <Navbar /> 
     <div className="project5-container">
      <img src="/Portfolio/p5.jpg" alt="" />
    </div>
    <div className="project1Text-container">
        <img src="/Portfolio/p14.jpg" alt="" />
       
      </div>
      <div className="prototype">
<iframe
  style={{ border: 'none' }}
  // width="100%"
  // height="700px"
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0WInfi78UOwGxUZaF3tPKs%2FWorkplace%3Fpage-id%3D8%253A11%26node-id%3D930-4311%26viewport%3D1780%252C-332%252C0.46%26t%3DzKwYqzpzyo6EM4Nq-1%26scaling%3Dscale-down%26starting-point-node-id%3D930%253A4311"
  allowfullscreen
/>
</div>
    </>
  )
}

export default EasyGrocery