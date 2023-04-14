import React from 'react'
import Navigation from './Components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import Doctors from './pages/Doctors'
import Doctorslist from './pages/Doctorslist';
import Bookappointment from './pages/Bookappointment'
import BookConsultation from './pages/BookConsultation'
import BookedConsultation from './pages/BookedConsultation'
import Bookedappointment from './pages/Bookedappointment'
import Home from './pages/Home'
import Requestsent from './pages/Requestsent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Changepassword from './pages/Changepassword';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Doctors' element={<Doctors />} />
        <Route path='/Doctors/Doctorslist' element={<Doctorslist/>} />
        <Route path='/Doctors/Doctorslist/Bookappointment' element={<Bookappointment/>} />
        <Route path='/Doctors/Doctorslist/Bookappointment/Bookedappointment' element={<Bookedappointment/>} />

        <Route path='/Doctors/Doctorslist/Bookconsultation' element={<BookConsultation/>} />
        <Route path='/Doctors/Doctorslist/Bookconsultation/BookedConsultation' element={<BookedConsultation/>} />
        <Route path='/Doctors/requestappointment/bookedappointment' element={<Bookedappointment/>} />
        <Route path='/requestsent' element={<Requestsent/>}/>
        <Route path='/changepassword' element={<Changepassword/>}/>
      </Routes>
    </Router>
  )
}

export default App