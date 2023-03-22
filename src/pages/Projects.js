import ProjectCom from "../components/ProjectCom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import { projects } from "../data/projectsData";

const Projects = () => {
    return (
        <Container>
            <Row className="g-4 py-4">
                {projects.map((project, index) =>
                    <Col className="d-flex align-self-stretch" >
                        <ProjectCom key={index} project={project} />
                    </Col>
                )}
            </Row>

        </Container>
    );
}

export default Projects;