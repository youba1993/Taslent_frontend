import ProjectCom from "../components/ProjectCom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import { projects } from "../data/projectsData";
import React from "react";

const Projects = () => {
    return (
        <Container>
            <Row className="g-4 py-4">
                {projects.map((project) =>
                    <React.Fragment key={project.id}>
                        <Col className="d-flex align-self-stretch" >
                            <ProjectCom  project={project} />
                        </Col>
                    </React.Fragment>
                )}
            </Row>

        </Container>
    );
}

export default Projects;