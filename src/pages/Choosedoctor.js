import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Choosedoctor = () => {
    const bgTitle = {
        backgroundColor: '#3182CE',
    }
    function handleClick() {
        <Link to = "/Doctors/Doctorslist"/>
      }
  return (
    <div>
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
                            <Button variant="primary" className="float-end mt-3" onClick = {handleClick} >Next</Button>


                    </Card.Body>
                </Card>
    </div>
  )
}

export default Choosedoctor;