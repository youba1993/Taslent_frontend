import Card from 'react-bootstrap/Card';
import { AiOutlineComment, AiOutlineLike } from "react-icons/ai";

const ProjectCom = (project) => {
    const { title, image, description, difficulty } = project.project

    return (

        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                    <hr/>
                    <p>{difficulty} project</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <div className="d-flex justify-content-start">
                    <div className='d-flex align-items-center me-3'>
                        <i className="me-2"><AiOutlineLike /></i>
                        <p class="mb-0 small">Like</p>
                    </div>
                    <div className='d-flex align-items-center me-3'>
                        <i className="me-2"><AiOutlineComment /></i>
                        <p class="mb-0 small">Comment</p>
                    </div>
                    
                </div>

            </Card.Footer>
        </Card>
    );
}

export default ProjectCom;