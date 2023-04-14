import React from 'react'
import { BsCheck } from 'react-icons/bs';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { Flex } from '@chakra-ui/react';

const BookedConsultation = () => {
    const styles = {
        width: '6rem',
        height: '6rem',
        marginLeft: '13vw',
    }
  return (
    <div>
        <Container className=" border border-primary mt-5 pt-4 mb-3  col-xl-10">
                <Flex alignContent={'center'} className="mb-5">
                    <img src="/logo.jpg" alt="logo" style={styles} className="rounded-circle" />
                    <Flex flexDirection={'column'}>
                        <h2 className="text-center mt-2 text-primary ms-5" >Dynamics of Mind Patient Portal </h2>
                        
                    </Flex>
                </Flex>
      <div className="d-flex justify-content-center m-3">
                <Card style={{ width: '30rem' }} className="just ">
                    <div className="d-flex justify-content-center flex-direction-column ">
                        <BsCheck size={32} color="green" className="border border-primary  mt-5 rounded-circle " />

                    </div>
                    <Card.Body>
                        <Card.Title className="text-center text-success mt-4">Your Video Consultation is Booked.</Card.Title>
                        <Card.Text className="pt-3">Your Video Consultation is booked and our team will contact you as soon as possible.</Card.Text>
                        

                        <Table >
                            <tbody>
                                <tr>
                                    <td>Consultation</td>
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
                                    <td>Zoom Link</td>
                                    <td><a href = " ">Zoom link</a></td>
                                </tr>
                                <tr>
                                    <td>Hospital Phone</td>
                                    <td>123456789</td>
                                </tr>
                                <tr>
                                    <td>Dr Phone</td>
                                    <td>123456789</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
            </Container>
    </div>
  )
}

export default BookedConsultation
