import Carousel from 'react-bootstrap/Carousel';
import village from '../images/Village-taslent.jpg';

function CarouselPage() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={village}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Ansuf Yiswen</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default CarouselPage;