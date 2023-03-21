import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const ProjectCom = () => {
    return (
        <Container >
            <Card style={{ width: '23rem' }}>
                <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.tw74t63fT3e7NHveaPvTxAHaE7?pid=ImgDet&w=2000&h=1333&rs=1" />
                <Card.Body>
                    <Card.Title>Project title</Card.Title>
                    <Card.Text>
                        This is the description of the project and the requirments.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">this is the difficulty of the project</small>
                </Card.Footer>
            </Card>
        </Container>
    );
}

export default ProjectCom;