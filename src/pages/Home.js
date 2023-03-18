import { Col, Container, Row } from "react-bootstrap";
import CarouselPage from "../components/Carrousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { taslentUrl } from "../images/ImageUrl";
import Contact from "./Contact";

const Home = () => {
    const {unite, respect, knowledge} = taslentUrl.homePage
    return (
        <div>

            <Header />
            <CarouselPage />
            <Container className="mt-5 mb-5" >
                <Row className='bg-light text-left '>
                    <Col  className="col-sm-4" >
                        <figure className="mt-3" >
                            <img className="img-thumbnail" src={unite} alt="unity" />
                            <h1 className="mt-2 text-success " >Unity</h1>
                            <blockquote className="blockquote">
                                <p>Coming together is a beginning, staying together is progress, and working together is success.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Henry Ford
                            </figcaption>
                        </figure>
                        <hr className="d-sm-none"></hr>
                    </Col>
                    <Col className="col-sm-4">
                        <figure className="mt-3">
                            <img className="img-thumbnail" src={knowledge} alt="unity" />
                            <h1 className="mt-2 text-danger">knowledge</h1>
                            <blockquote className="blockquote">
                                <p>Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Malcolm X
                            </figcaption>
                        </figure>
                        <hr className="d-sm-none"></hr>
                    </Col>
                    <Col className="col-sm-4">
                        <figure className="mt-3">
                            <img className="img-thumbnail" src={respect} alt="unity" />
                            <h1 className="mt-2 text-primary">Respect</h1>
                            <blockquote className="blockquote">
                                <p>Treat people the way you want to be treated. Talk to people the way you want to be talked to. Respect is earned, not given.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Hussein Nishah
                            </figcaption>
                        </figure>
                        <hr className="d-sm-none"></hr>
                    </Col>
                </Row>
            </Container>

            <Contact />

            <Footer />

        </div>
    );
}

export default Home;