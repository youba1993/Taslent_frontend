import { Container } from 'react-bootstrap';
import pageConstruction from '../images/under-construction.png'
function UnderConstruction() {
  return (
    <Container className=" my-5 d-flex flex-column justify-content-center align-items-center">
     <img className='img-fluid' src={pageConstruction} alt="Under Construction" />
    </Container>
  );
}

export default UnderConstruction;
