import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { taslentUrl } from '../images/ImageUrl';

function CarouselPage() {
  const { villageTaslent, villageTaslent1, villageTaslent2 } = taslentUrl.carroussel
  return (

    <Carousel fade interval={2500} className='text-white' >
      <Carousel.Item>
        <Container>
          <img
            className="d-block w-100 "
            src={villageTaslent}
            alt="First slide"
          />
        </Container>
        <Carousel.Caption>
          <h2>Gallery</h2>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Container >
          <img
            className="d-block w-100 "
            src={villageTaslent1}
            alt="Second slide"
          />
        </Container>
       
      </Carousel.Item>

      <Carousel.Item>
        <Container >
          <img
            className="d-block w-100 "
            src={villageTaslent2}
            alt="third slide"
          />
        </Container>
       
      </Carousel.Item>

    </Carousel>

  );
}

export default CarouselPage;