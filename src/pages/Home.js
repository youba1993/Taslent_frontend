import { Button, Col, Container, Row } from "react-bootstrap";

import { taslentUrl } from "../images/ImageUrl";



const Home = () => {
    const { unite, respect, knowledge } = taslentUrl.homePage
    return (
        <div>
            <div className="background-image text-center text-white scroll-bg">
                <h1 className=" p-2 size-lg" style={{fontSize: "65px"}}>Ansuf Yiswen</h1>
                <h3>Taslent</h3>
                <p> is a village in Algeria in the commune of Ighram (Kabylie), located in the Soummam valley ...</p>
                <Button variant="outline-light" style={{fontWeight: "bold"}}>Learn more</Button>
                <hr></hr>
                <Button  variant="outline-info" style={{fontWeight: "bold"}} >Donate</Button>
            </div>

            <Container className="my-3 py-4" >
                <Row className='bg-light text-left row-cols-1'>
                    <Col className="col-sm-4" >
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
            <div className="background-image" style={{height: "30vh" }}>

            </div>
        </div>
    );
}

export default Home;