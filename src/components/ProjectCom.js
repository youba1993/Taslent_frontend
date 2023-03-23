import Card from 'react-bootstrap/Card';
import { AiOutlineComment, AiOutlineLike } from "react-icons/ai";


const ProjectCom = ({ project }) => {
    const { title, image, description } = project;

    return (
        <Card className="project-card">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title className="project-title">{title}</Card.Title>
                <Card.Text className="project-description">
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="project-footer">
                <div className="d-flex justify-content-start">
                    <div className='d-flex align-items-center me-3'>
                        <i className="me-2"><AiOutlineLike /></i>
                        <p className="mb-0 small">Like</p>
                    </div>
                    <div className='d-flex align-items-center me-3'>
                        <i className="me-2"><AiOutlineComment /></i>
                        <p className="mb-0 small">Comment</p>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    );
}

export default ProjectCom;
