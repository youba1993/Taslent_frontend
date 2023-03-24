import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const QandA = () => {
    return (
        <Container className='my-5'>
            <h1 className='text-center mb-5'>Q&A</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is Taslent Village?</Accordion.Header>
                    <Accordion.Body>
                        Taslent Village is a community-based organization focused on improving the quality of life in the village.
                        We work on various projects related to education, healthcare, infrastructure, and environmental sustainability.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> How can I get involved with Taslent Village?</Accordion.Header>
                    <Accordion.Body>
                        We are always looking for volunteers who are passionate about our mission.
                        You can contact us through our website or social media pages to learn more about
                        our current projects and how you can contribute.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> What kind of projects has the Taslent community undertaken?</Accordion.Header>
                    <Accordion.Body>
                        The Taslent community has undertaken a variety of projects, including building a community garden,
                        constructing a new community center, and organizing educational workshops for youth.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header> How is Taslent Village funded?</Accordion.Header>
                    <Accordion.Body>
                        We rely on donations from individuals and organizations to fund our projects.
                        We also organize fundraising events throughout the year to generate additional support.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header> What are the future goals of the Taslent community?</Accordion.Header>
                    <Accordion.Body>
                        The Taslent community aims to continue building a stronger and more sustainable village,
                        while also fostering greater connections with neighboring communities and promoting the rich cultural heritage of the region.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default QandA;

