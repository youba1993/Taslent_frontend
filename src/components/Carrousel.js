import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { taslentUrl } from '../images/ImageUrl';

function CarouselPage() {
  const {villageTaslent} = taslentUrl.carroussel
  return (
    
    <Carousel fade >
      <Carousel.Item>
        <Container >
        <img
          className="d-block w-100 "
          src={villageTaslent}
          alt="First slide"
        />
        </Container>
        <Carousel.Caption>
          <h3 className='text-warning'>Ansuf Yiswen</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  
  );
}

export default CarouselPage;