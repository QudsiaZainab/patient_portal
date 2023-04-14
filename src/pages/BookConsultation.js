import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Flex } from '@chakra-ui/react';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookConsultation = () => {
    const styles = {
        width: '6rem',
        height: '6rem',
        marginLeft: '13vw',
    }
  return (
    <div>
        <Container className=" border border-primary mb-3 mt-5 pt-4  col-xl-10">
                <Flex alignContent={'center'} className="mb-5">
                    <img src="/logo.jpg" alt="logo" style={styles} className="rounded-circle" />
                    <Flex flexDirection={'column'}>
                        <h2 className="text-center mt-2 text-primary ms-5" >Dynamics of Mind Patient Portal </h2>
                        <h6 className="ms-5 text-center text-primary">Book Appointment from Doctor</h6>
                    </Flex>
                </Flex>
      <div className="d-flex justify-content-center">
                <Card style={{ width: '18rem' }} className="just">
                    <div className="d-flex justify-content-center flex-direction-column">
                        <Card.Img variant="top" src="/logo.jpg" className='mt-2' style={{ width: '7rem', height: '7rem' }} />

                    </div>
                    <Card.Body>
                        <h6 className="text-center">Dr. ABC</h6>
                        <Card.Title className="text-center mt-4">Book Video Consultation</Card.Title>
                        <Form className="border-primary p-2">
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Patient Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter patient name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicContact">
                                <Form.Label>Contact No</Form.Label>
                                <Form.Control type="contact" placeholder="Phone No" />
                            </Form.Group>
                            <Link to = "/Doctors/Doctorslist/Bookconsultation/BookedConsultation">
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                </Link>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
            </Container>
    </div>
  )
}

export default BookConsultation
