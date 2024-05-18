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
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fo3EfHC1BGLJwMhgNgjhOdL%2Feasy-grocery%3Fpage-id%3D21%253A696%26node-id%3D541-1210%26viewport%3D451%252C267%252C0.21%26t%3DTptKVBptcGKB4uCR-1%26scaling%3Dscale-down"
  allowfullscreen
/>
</div>
    </>
  )
}

export default EasyGrocery