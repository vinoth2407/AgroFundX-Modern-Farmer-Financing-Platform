import React, { Component } from 'react'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Main_Page from './Main_Page';
import LoginForm from './Login';
import Contact from './Contact_Us';
import Slideshow from './imageSlider';
function Routing() {
    return ( 
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Main_Page/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/contact" element={<Contact/>}/> 
                <Route path="/Slider" element={<Slideshow/>}/> 
            </Routes>
        </Router>
        </>
     );
}

export default Routing;