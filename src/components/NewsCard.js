import { Card } from "react-bootstrap";
import { AiOutlineComment, AiOutlineLike } from "react-icons/ai";


const NewsCard = ({news}) => {
    const { newsImageURL, newsDate, newsTitle, newsDescription } = news;
    return (
        <Card className="mb-3 event-card">
            <Card.Img
                variant="top"
                src={newsImageURL}
            />
            <Card.Body>
                <Card.Title className="event-title">{newsTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {newsDate}
                </Card.Subtitle>
                <Card.Text>
                    {newsDescription}                 
                </Card.Text>
                <Card.Footer >
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
            </Card.Body>
        </Card>
    );
}

export default NewsCard;