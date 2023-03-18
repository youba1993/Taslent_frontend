import { Container } from 'react-bootstrap';
import { taslentUrl } from '../images/ImageUrl';
function UnderConstruction() {
  const {PageUnderConstruction} = taslentUrl.underConstruction
  return (
    <Container className=" my-5 d-flex flex-column justify-content-center align-items-center">
     <img className='img-fluid' src={PageUnderConstruction} alt="Under Construction" />
    </Container>
  );
}

export default UnderConstruction;
