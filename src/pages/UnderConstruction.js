import { Container } from 'react-bootstrap';
import { taslentUrl } from '../images/ImageUrl';
function UnderConstruction() {
  const {pageUnderConstruction} = taslentUrl.pageUnderConstruction
  return (
    <Container className=" my-5 d-flex flex-column justify-content-center align-items-center">
     <img className='img-fluid' src={pageUnderConstruction} alt="Under Construction" />
    </Container>
  );
}

export default UnderConstruction;
