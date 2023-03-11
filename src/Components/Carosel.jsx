import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/about.css'
import photo1 from "../Assets/photo1.jpeg";
import photo2 from "../Assets/photo2.jpeg";
import photo3 from "../Assets/photo3.jpeg";
import photo4 from "../Assets/photo4.jpeg";

function DarkVariantExample() {
  return (
    <Carousel variant="dark" className='carosel' controls={false} indicators={false} interval={1000}>
      <Carousel.Item className='carosel-item'>
        <img
          className="d-block w-75 h-100"
          src={photo1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carosel-item'>
        <img
           className="d-block w-75 h-100"
          src={photo2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carosel-item'>
        <img
           className="d-block w-75 h-100"
          src={photo3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;