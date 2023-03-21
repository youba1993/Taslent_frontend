import ProjectCom from "../components/ProjectCom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container, Nav } from "react-bootstrap";

const Projects = () => {
    return (
        <Container>
            <Row className="g-4">

                <Nav id="sidebar">
                   
                        <h3>Category:</h3>
                    
                    
                </Nav>

                {Array.from({ length: 10 }).map((_, idx) => (
                    <Col >
                        <ProjectCom />
                    </Col>
                ))}
            </Row>

        </Container>
    );
}

export default Projects;