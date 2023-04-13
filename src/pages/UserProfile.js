import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './UserProfile.css';

const UserProfile = () => {
  const user = {
    profilePicture: "https://ik.imagekit.io/nvnw6o7ew/youba__L_7yBDW4m.jpg?updatedAt=1667501773862",
    name: "youba",
    bio: "Im the admin",
    email: "youba@talsent.com",
    phone: "1-234-56789",
    location: "California",
    joinedDate: "04/03/2023"
  }
  return (
    <Container className="my-5">
      <Card>
        <Card.Body>
          <Row>
            <Col md={4}>
              <img src={user.profilePicture} alt={user.name} className="profile-picture" />
            </Col>
            <Col md={8}>
              <h2>{user.name}</h2>
              <p className="text-muted">{user.bio}</p>
              <hr />
              <Row>
                <Col md={6}>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone:</strong> {user.phone}</p>
                </Col>
                <Col md={6}>
                  <p><strong>Location:</strong> {user.location}</p>
                  <p><strong>Joined:</strong> {user.joinedDate}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserProfile;
