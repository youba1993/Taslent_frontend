import Card from 'react-bootstrap/Card';


const ProjectCom = (project) => {
    const {title, image, description, difficulty} = project.project

    return (
        
            <Card  style={{ width: '20rem' }}>
                <Card.Img  variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">difficulty of the project {difficulty}</small>
                </Card.Footer>
            </Card>
    );
}

export default ProjectCom;