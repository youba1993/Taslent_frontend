import { Col, Container, Row } from "react-bootstrap";
import CarouselPage from "../components/Carrousel";
import Footer from "../components/Footer";
import Header from "../components/Header";




const Home = () => {
    return (
        <div>

            <Header />
            <CarouselPage />
            <Container className="m-5" >
                <Row className='bg-light text-center me-auto'>
                    <Col>
                        <h3 >Unity</h3>
                    </Col>
                    <Col>
                        <h3>knowledge</h3>
                    </Col>
                    <Col>
                        <h3>Respect</h3>
                    </Col>
                </Row>
            </Container>



            <Footer />

        </div>
    );
}

export default Home;