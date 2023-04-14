import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import { Flex } from '@chakra-ui/react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Doctors = () => {
    const bgTitle = {
        backgroundColor: '#3182CE',
    }
    const styles = {
        width: '6rem',
        height: '6rem',
        marginLeft: '13vw',
    }
    return (
        <Container className=" border border-primary mb-3 mt-5 pt-4  col-xl-10">
            <Flex alignContent={'center'} className="mb-5">
                <img src="logo.jpg" alt="logo" style={styles} className="rounded-circle" />
                <Flex flexDirection={'column'}>
                    <h2 className="text-center mt-2 text-primary ms-5" >Dynamics of Mind Patient Portal </h2>
                    <h6 className="ms-5 text-center text-primary">Book Appointment from Doctor</h6>
                </Flex>
            </Flex>
            <Card className="mt-5 mb-3" >
                    <Card.Header style={bgTitle} className="text-light"><b>Choose your preferences for doctor</b></Card.Header>
                    <Card.Body>
                        <Form.Label><b>Select Specialist</b></Form.Label>
                        <Form.Select aria-label="Default select example" className='mb-3'>
                            <option>Select Specialist</option>
                            <option value="1">Child Specialist</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>

                        <Form.Label><b>Select Language</b></Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select Specialist</option>
                            <option value="1">Sindhi</option>
                            <option value="2">Punjabi</option>
                            <option value="3">Pushto</option>
                            <option value="3">English</option>
                            <option value="3">Urdu</option>
                        </Form.Select>
                        {/* onClick={() => setNext(true)} */}
                        <Link to = "/Doctors/Doctorslist">
                            <Button variant="primary" className="float-end mt-3" >Next</Button>
                        </Link>


                    </Card.Body>
                </Card>
        </Container>
    )
}

export default Doctors