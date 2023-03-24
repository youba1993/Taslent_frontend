import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const NewsAndEvents = () => {
    return (
        <div>
            <Container >
                <h1 className="my-5 text-center">News and Events</h1>

                <Row className="mb-5">
                    <Col>
                        <h2>Upcoming Events</h2>
                        <hr />
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>Spring Festival</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    April 15, 2023
                                </Card.Subtitle>
                                <Card.Text>
                                    Join us for our annual Spring Festival, featuring live music,
                                    food vendors, and a craft fair.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Community Clean-Up Day</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    May 1, 2023
                                </Card.Subtitle>
                                <Card.Text>
                                    Help us keep our village clean by volunteering for our
                                    community clean-up day.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h2>Latest News</h2>
                        <hr />
                        <Card className="mb-3">
                            <Card.Img
                                variant="top"
                                src="https://ik.imagekit.io/nvnw6o7ew/Taslent/projects/announcement_lmsYRQzYi.jpg?updatedAt=1679637109349"
                            />
                            <Card.Body>
                                <Card.Title>Announcing our New Village Council Members</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    March 1, 2023
                                </Card.Subtitle>
                                <Card.Text>
                                    We are excited to welcome our newly elected village council
                                    members, who will be working hard to make our village an even
                                    better place to live.
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>

                        <Card className="mb-3">
                            <Card.Img
                                variant="top"
                                src="https://ik.imagekit.io/nvnw6o7ew/Taslent/projects/FoodAid_scPbPXM-I.jpg?updatedAt=1679636254416"
                            />
                            <Card.Body>
                                <Card.Title>Food Aid Distribution</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    March 22, 2023
                                </Card.Subtitle>
                                <Card.Text>
                                    Thanks to the generosity of our community members and local
                                    businesses, we have collected enough food to distribute to over 30
                                    families in need. We will continue to organize food aid distribution
                                    throughout the year to ensure that no one in our village goes
                                    hungry. 
                                    <br></br>
                                    <strong>If you or someone you know needs assistance, please contact us at: * *** *** ***</strong>
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NewsAndEvents;