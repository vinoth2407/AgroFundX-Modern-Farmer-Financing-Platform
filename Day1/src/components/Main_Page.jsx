import React from 'react'
import '../assets/css/Main_Page.css'
import { useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../assets/images/Slider1.jpeg";
import image2 from "../assets/images/Slider2.jpeg";
import image3 from "../assets/images/Slider3.jpeg";
import logo from '../assets/images/Logo.png'
import HomePage from './Gif';
import HomeFooter from './HomeFooter';
const images = [image1, image2, image3];
function Main_Page() { 
    const navigate = useNavigate('');
    const routeLogin = () =>{
        navigate('/login');
    }
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg">
            <img className='logox navbar-brand' src={logo}/>
            <a class="navbar-brand" href="#">AgroFundX</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active move">
                  <a class="nav-link" href="#">About Us<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active move1">
                  <a class="nav-link" href="/contact">Contact Us</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-outline my-2 my-sm-0" onClick={routeLogin} type="button">Login/SignUp</button>
              </form>
              </div>
          </nav>
          <HomePage/>
            <div className='sliderc'>
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              interval={2800}
              showThumbs={false}
              showStatus={false}
              stopOnHover={false}
              className="hover-pointer"
            >
              {images.map((image, i) => (
                <div key={i}>
                  <img src={image} alt="Slider" />
                  
                </div>
              ))}
            </Carousel>
            </div>
            <HomeFooter/>
            </div>
    );
}

export default Main_Page;