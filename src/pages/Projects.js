import ProjectCom from "../components/ProjectCom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import { projects } from "../data/projectsData";
import React from "react";

const Projects = () => {
    return (
        <Container className="container py-5">
            <h1 className="text-center mb-5">Projects</h1>
            <p className="lead text-center">Welcome to the Taslent community, where members work together to create positive change and make their village a better place. Here are a few examples of the projects our community has undertaken:</p>
           
                <Row className="g-4 py-4 row-cols-md-3">
                    {projects.map((project) =>
                        <React.Fragment key={project.id}>
                            <Col className="d-flex align-self-stretch" >
                                <ProjectCom project={project} />
                            </Col>
                        </React.Fragment>
                    )}
                </Row>
            
            <p className="text-center mt-5">These are just a few examples of the many projects our community has undertaken. We're always looking for new members who share our vision and want to contribute to the betterment of our village. If you're interested in getting involved, please don't hesitate to reach out to us!</p>
        </Container>
    );
}

export default Projects;