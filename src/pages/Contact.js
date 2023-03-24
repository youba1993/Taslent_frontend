import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <Container className='my-5'>
      <h1 className='text-center'>Contact Us</h1>
      <p className='text-center'>
        We'd love to hear from you! Please fill out the form below to get in touch with us.
      </p>

      <div className='d-flex justify-content-center mt-5'>
        <div className='me-5'>
          <div className='d-flex align-items-center'>
            <AiOutlineMail size={28} className='me-2' />
            <div>
              <div className='fw-bold'>Email</div>
              <a href='mailto:info@taslentvillage.com' className='text-decoration-none'>
                info@taslentvillage.com
              </a>
            </div>
          </div>
          <div className='d-flex align-items-center mt-4'>
            <FaPhoneAlt size={28} className='me-2' />
            <div>
              <div className='fw-bold'>Phone</div>
              <a href='tel:+213123456789' className='text-decoration-none'>
                +213 (123) 456-789
              </a>
            </div>
          </div>
          <div className='d-flex align-items-center mt-4'>
            <FaMapMarkerAlt size={28} className='me-2' />
            <div>
              <div className='fw-bold'>Address</div>
              <div>Taslent Village, Akbou, Bejaia, Algeria</div>
            </div>
          </div>
        </div>

        <div className='border-start px-4'>
          <Form>
            <Form.Group controlId='formBasicName'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' placeholder='Enter your name' />
            </Form.Group>

            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter your email' />
            </Form.Group>

            <Form.Group controlId='formBasicMessage'>
              <Form.Label>Message</Form.Label>
              <Form.Control as='textarea' placeholder='Enter your message' rows={4} />
            </Form.Group>

            <Button className='my-3' variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
