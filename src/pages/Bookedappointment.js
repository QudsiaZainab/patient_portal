import React from 'react'
import { BsCheck } from 'react-icons/bs';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { Flex } from '@chakra-ui/react';

const Bookedappointment = () => {
    const styles = {
        width: '6rem',
        height: '6rem',
        marginLeft: '13vw',
    }
  return (
    <Container className=" border border-primary mb-3 mt-5 pt-4  col-xl-10">
                <Flex alignContent={'center'} className="mb-5">
                    <img src="/logo.jpg" alt="logo" style={styles} className="rounded-circle" />
                    <Flex flexDirection={'column'}>
                        <h2 className="text-center mt-2 text-primary ms-5" >Dynamics of Mind Patient Portal </h2>
                        
                    </Flex>
                </Flex>
    <div>
      <div className="d-flex justify-content-center m-3">
                <Card style={{ width: '30rem' }} className="just ">
                    <div className="d-flex justify-content-center flex-direction-column ">
                        <BsCheck size={32} color="green" className="border border-primary  mt-5 rounded-circle " />

                    </div>
                    <Card.Body>
                        <Card.Title className="text-center text-success mt-4">Your Appointment is Booked.</Card.Title>
                        <Card.Text className="pt-3">Your appointment is booked and our team will contact you as soon as possible.</Card.Text>
                        

                        <Table >
                            <tbody>
                                <tr>
                                    <td>Appointment</td>
                                    <td>5:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Date</td>
                                    <td>April 12</td>
                                </tr>
                                <tr>
                                    <td>Child Specialist</td>
                                    <td>Dr. ABC</td>
                                </tr>
                                <tr>
                                    <td>Hospital</td>
                                    <td>Maroof Hospital</td>
                                </tr>
                                <tr>
                                    <td>Hospital Address</td>
                                    <td>F-10</td>
                                </tr>
                                <tr>
                                    <td>Hospital Phone</td>
                                    <td>123</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
    </div>
    </Container>
  )
}

export default Bookedappointment
