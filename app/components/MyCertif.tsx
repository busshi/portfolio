import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
 
const MyCertif = () => {
  return (
    <section className="my-32">
      <h2 className="mt-16 mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        My certifications
      </h2>
      <AwesomeSlider animation="cubeAnimation">
        <div data-src="/assets/certif/ejpt.png" />
        <div data-src="/assets/certif/uni_qualif.png" />
        <div data-src="/assets/certif/santa.png" />
      </AwesomeSlider>
    </section>
    
  )
}

export default MyCertif
