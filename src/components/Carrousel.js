import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { taslentUrl } from '../images/ImageUrl';

function CarouselPage() {
  const { villageTaslent, villageTaslent1, villageTaslent2 } = taslentUrl.carroussel
  return (

    <Carousel fade interval={2500} >
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

      <Carousel.Item>
        <Container >
          <img
            className="d-block w-100 "
            src={villageTaslent1}
            alt="Second slide"
          />
        </Container>
        <Carousel.Caption>
          <h3 className='text-warning'>Welcome</h3>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Container >
          <img
            className="d-block w-100 "
            src={villageTaslent2}
            alt="third slide"
          />
        </Container>
        <Carousel.Caption>
          <h3 className='text-warning'>Bienvenue</h3>

        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>

  );
}

export default CarouselPage;