import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Container } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Requestsent = () => {
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
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Doctor Name</th>
              <th>Consultation</th>
              <th>Data</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dr. ABC</td>
              <td>5:00 pm</td>
              <td>April 12</td>
              <td><Link to="/Doctors/requestappointment/bookedappointment" >View</Link></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Dr. ABC</td>
              <td>5:00 pm</td>
              <td>April 12</td>
              <td><Link to="/Doctors/requestappointment/bookedappointment" >View</Link></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Dr. ABC</td>
              <td>5:00 pm</td>
              <td>April 12</td>
              <td><Link to="/Doctors/requestappointment/bookedappointment" >View</Link></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default Requestsent
