import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Doctorslist = () => {
    const bgTitle = {
        backgroundColor: '#3182CE',
    }
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
                <Card className="mt-5 mb-3" >
                    <Card.Header style={bgTitle} className="text-light"><b>Doctors List</b></Card.Header>
                    <Card.Body>
                        <Container fluid className="d-flex flex-wrap">
                            <Card style={{ width: '15rem' }} className="m-3">
                                <Card.Img variant="top" src="/logo.jpg" />
                                <Card.Body>
                                    <Card.Title><b>Dr. ABC</b></Card.Title>
                                    <Card.Text>
                                        Child Specialist
                                        <p>Languages: English, Urdu</p>
                                    </Card.Text>
                                    <Link to="/Doctors/Doctorslist/Bookconsultation">
                                        <Button variant="primary" className="mb-2">Video Consultation</Button>
                                    </Link>
                                    <Link to="/Doctors/Doctorslist/Bookappointment">
                                        <Button variant="primary" className="mb-2">Book Appointment</Button>
                                    </Link>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '15rem' }} className="m-3">
                                <Card.Img variant="top" src="/logo.jpg" />
                                <Card.Body>
                                    <Card.Title><b>Dr. ABC</b></Card.Title>
                                    <Card.Text>
                                        Child Specialist
                                        <p>Languages: English, Urdu</p>
                                    </Card.Text>
                                    <Link to="/Doctors/Doctorslist/Bookconsultation">
                                        <Button variant="primary" className="mb-2">Video Consultation</Button>
                                    </Link>
                                    <Link to="/Doctors/Doctorslist/Bookappointment">
                                        <Button variant="primary" className="mb-2">Book Appointment</Button>
                                    </Link>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '15rem' }} className="m-3">
                                <Card.Img variant="top" src="/logo.jpg" />
                                <Card.Body>
                                    <Card.Title><b>Dr. ABC</b></Card.Title>
                                    <Card.Text>
                                        Child Specialist
                                        <p>Languages: English, Urdu</p>
                                    </Card.Text>
                                    <Link to="/Doctors/Doctorslist/Bookconsultation">
                                        <Button variant="primary" className="mb-2">Video Consultation</Button>
                                    </Link>
                                    <Link to="/Doctors/Doctorslist/Bookappointment">
                                        <Button variant="primary" className="mb-2">Book Appointment</Button>
                                    </Link>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '15rem' }} className="m-3">
                                <Card.Img variant="top" src="/logo.jpg" />
                                <Card.Body>
                                    <Card.Title><b>Dr. ABC</b></Card.Title>
                                    <Card.Text>
                                        Child Specialist
                                        <p>Languages: English, Urdu</p>
                                    </Card.Text>
                                    <Link to="/Doctors/Doctorslist/Bookconsultation">
                                        <Button variant="primary" className="mb-2">Video Consultation</Button>
                                    </Link>
                                    <Link to="/Doctors/Doctorslist/Bookappointment">
                                        <Button variant="primary" className="mb-2">Book Appointment</Button>
                                    </Link>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '15rem' }} className="m-3">
                                <Card.Img variant="top" src="/logo.jpg" />
                                <Card.Body>
                                    <Card.Title><b>Dr. ABC</b></Card.Title>
                                    <Card.Text>
                                        Child Specialist
                                        <p>Languages: English, Urdu</p>
                                    </Card.Text>
                                    <Link to="/Doctors/Doctorslist/Bookconsultation">
                                        <Button variant="primary" className="mb-2">Video Consultation</Button>
                                    </Link>
                                    <Link to="/Doctors/Doctorslist/Bookappointment">
                                        <Button variant="primary" className="mb-2">Book Appointment</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Container>



                    </Card.Body>
                </Card>
            </Container>

        </div>
    )
}

export default Doctorslist
