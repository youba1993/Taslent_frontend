import React, { useState } from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { events, news } from '../data/projectsData';
import EventCard from '../components/EventCard';
import NewsCard from '../components/NewsCard';

const NewsAndEvents = () => {
    const [key, setKey] = useState('UpcomingEvents');

    return (
        <Container className="my-5">
            <h1 className="text-center mb-5">News and Events</h1>
            <Tabs
                id="newsEvents-tabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-5"
            >
                <Tab eventKey="UpcomingEvents" title="Upcoming Events">
                    <Row className="mt-5">
                        <Col>
                            <hr className="mt-0 mb-4" />
                            {events.length > 0 ? (
                                events.map((event) => (
                                    <EventCard key={event.id} event={event} />
                                ))
                            ) : (
                                <p className="text-center mb-0">No upcoming events found.</p>
                            )}
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="LatestNews" title="Latest News">
                    <Row className="mt-5">
                        <Col>
                            <hr className="mt-0 mb-4" />
                            {news.length > 0 ? (
                                news.map((n) => <NewsCard key={n.id} news={n} />)
                            ) : (
                                <p className="text-center mb-0">No news articles found.</p>
                            )}
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default NewsAndEvents;
