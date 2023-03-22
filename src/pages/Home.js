import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectCom from "../components/ProjectCom";
import { projects } from "../data/projectsData";
import { taslentUrl } from "../images/ImageUrl";

const Home = () => {
    const { unite, respect, knowledge } = taslentUrl.homePage

    return (
        <div>
            <div className="background-image text-center text-white scroll-bg">
                <h1 className=" p-2 size-lg" style={{ fontSize: "65px" }}>Ansuf Yiswen</h1>
                <h3>Taslent</h3>
                <p> is a village in Algeria in the commune of Ighram (Kabylie), located in the Soummam valley ...</p>
                <Link to={"/about"}><Button variant="outline-light" style={{ fontWeight: "bold" }}>Learn more</Button></Link>
                <hr></hr>
                <Link to={"/underConstruction"} ><Button variant="outline-info" style={{ fontWeight: "bold" }} >Donate</Button></Link>
            </div>

            <Container className="my-3 py-2" >
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
            <Container >
                <Link to={"/projects"}><h1 className="text-center ">Projects:</h1></Link>
                <Row xs={1} md={3} className="g-4 py-4 ">
                    {projects.map((project, index) =>
                        <Col className="d-flex align-self-stretch" >
                            <ProjectCom key={index} project={project} />
                        </Col>
                    )}
                </Row>
            </Container>
            <div className="background-image" style={{ height: "30vh" }}>

            </div>
        </div >
    );
}

export default Home;