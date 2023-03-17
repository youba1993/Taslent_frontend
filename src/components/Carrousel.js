import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import village from '../images/Village-taslent.png';

function CarouselPage() {
  return (
    
    <Carousel fade >
      <Carousel.Item>
        <Container >
        <img
          className="d-block w-100 "
          src={village}
          alt="First slide"
        />
        </Container>
        <Carousel.Caption>
          <h3>Ansuf Yiswen</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  
  );
}

export default CarouselPage;