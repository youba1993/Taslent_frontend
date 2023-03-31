import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectCom from "../components/ProjectCom";
import { projects } from "../data/projectsData";
import { taslentUrl } from "../images/ImageUrl";
import { useSpring, animated } from 'react-spring';


const Home = () => {
    const { unite, respect, knowledge } = taslentUrl.homePage;
    // Define animations for hero section
    const heroAnimation = useSpring({
        opacity: 1,
        transform: 'translateY(0px)',
        from: { opacity: 0, transform: 'translateY(-50px)' },
        delay: 500
    });

    // Define animations for features section
    const featuresAnimation = useSpring({
        opacity: 1,
        transform: 'translateX(0px)',
        from: { opacity: 0, transform: 'translateX(-50px)' },
        delay: 800
    });

    return (
        <div>
            {/* Hero Section */}
            <animated.div className="background-image text-center text-white scroll-bg pb-2" style={heroAnimation}>
                <div className="background-image text-center text-white scroll-bg pb-5">
                    <h1 className=" p-2 size-lg" style={{ fontSize: "65px" }}>Ansuf Yiswen</h1>
                    <h3>Taslent</h3>
                    <p> is a village in Algeria in the commune of Ighram (Kabylie), located in the Soummam valley ...</p>
                    <div className="d-flex justify-content-center">
                        <Link to={"/about"}><Button size="lg" className="me-2" variant="outline-light" >Learn more</Button></Link>
                        <Link to={"https://buy.stripe.com/test_6oEdS17frfOagw0000"} ><Button size="lg" className="me-2" variant="outline-info" style={{ fontWeight: "bold" }} >Donate</Button></Link>
                    </div>
                </div>
            </animated.div>

            {/* Values Section */}
            <Container className="my-5">
                <animated.h2 className="text-center mb-5" style={featuresAnimation}>Our Values</animated.h2>
                <Row className="row-cols-1 row-cols-md-3 g-4 ">
                    <Col className="align-self-stretch">
                        <animated.div className="text-center feature-card" style={featuresAnimation}>
                            <img className="img-thumbnail mb-3" src={unite} alt="unity" />
                            <h3 className="text-info mb-3">Unity</h3>
                            <p className="mb-3">
                                "Coming together is a beginning, staying together is progress, and working together is success."
                            </p>
                            <p className="blockquote-footer mb-0">Henry Ford</p>
                        </animated.div>
                    </Col>
                    <Col className="align-self-stretch">
                        <animated.div className="text-center feature-card" style={featuresAnimation}>
                            <img className="img-thumbnail mb-3" src={knowledge} alt="knowledge" />
                            <h3 className="text-info mb-3">Knowledge</h3>
                            <p className="mb-3">
                                "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
                            </p>
                            <p className="blockquote-footer mb-0">Malcolm X</p>
                        </animated.div>
                    </Col>
                    <Col className="align-self-stretch">
                        <animated.div className="text-center feature-card" style={featuresAnimation}>
                            <img className="img-thumbnail mb-3" src={respect} alt="respect" />
                            <h3 className="text-info mb-3">Respect</h3>
                            <p className="mb-3">
                                "Treat people the way you want to be treated. Talk to people the way you want to be talked to. Respect is earned, not given."
                            </p>
                            <p className="blockquote-footer mb-0">Hussein Nishah</p>
                        </animated.div>
                    </Col>
                </Row>
            </Container>

             {/* Our Mission Section */}
             <Container className="my-5" id="our-mission-section">
                <animated.h2 className="text-center mb-5" style={featuresAnimation}>
                    Our Mission
                </animated.h2>
                <p>At Taslent, we are dedicated to building a strong and inclusive community where everyone feels welcomed and valued.
                    Our mission is to:
                </p>
                <ul>
                    <li>Promote a sense of belonging and togetherness among community members</li>
                    <li>Foster an environment of respect, empathy, and understanding</li>
                    <li>Encourage collaboration and cooperation towards shared goals</li>
                    <li>Celebrate diversity and promote cultural exchange</li>
                    <li>Support the well-being and development of all community members</li>
                </ul>
                <p>We believe that by working together, we can create a better future for ourselves and future generations.</p>
            </Container>

            {/* Projects Section */}
            <div className="bg-light py-5">
                <Container className="my-5">
                    <h2 className="text-center mb-5">Our Projects</h2>
                    <Row className="row-cols-1 row-cols-md-3 g-4" >
                        {projects.slice(0, 3).map((project) => (

                            <React.Fragment key={project.id}>
                                <Col className="d-flex align-self-stretch" >
                                    <ProjectCom project={project} />
                                </Col>
                            </React.Fragment>
                        ))}
                    </Row>
                </Container>



            </div >
        </div>
    );
}

export default Home;