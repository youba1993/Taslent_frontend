import { Col, Container, Row } from "react-bootstrap";
import CarouselPage from "../components/Carrousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import unity from '../images/Unite.png';
import knowledge from '../images/Knowledge.png';
import respect from '../images/Respect.png';

const Home = () => {
    return (
        <div>

            <Header />
            <CarouselPage />
            <Container className="mt-5 mb-5" >
                <Row className='bg-light text-center '>
                    <Col >
                        <figure className="mt-3" >
                            <img className="img-thumbnail" src={unity} alt="unity" />
                            <h1 className="mt-2 text-success " >Unity</h1>
                            <blockquote class="blockquote">
                                <p>Coming together is a beginning, staying together is progress, and working together is success.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Henry Ford
                            </figcaption>
                        </figure>
                    </Col>
                    <Col>
                        <figure className="mt-3">
                            <img className="img-thumbnail" src={knowledge} alt="unity" />
                            <h1 className="mt-2 text-danger">knowledge</h1>
                            <blockquote class="blockquote">
                                <p>Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Malcolm X
                            </figcaption>
                        </figure>
                    </Col>
                    <Col>
                        <figure className="mt-3">
                            <img className="img-thumbnail" src={respect} alt="unity" />
                            <h1 className="mt-2 text-primary">Respect</h1>
                            <blockquote class="blockquote">
                                <p>Treat people the way you want to be treated. Talk to people the way you want to be talked to. Respect is earned, not given.</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                Hussein Nishah
                            </figcaption>
                        </figure>
                    </Col>
                </Row>
            </Container>



            <Footer />

        </div>
    );
}

export default Home;