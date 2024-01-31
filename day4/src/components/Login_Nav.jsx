import React from 'react'
import '../assets/css/Main_Page.css'
import { useNavigate } from 'react-router-dom';
function Login_Nav() { 
    const navigate = useNavigate('');
    const routeHome = () =>{
        navigate('/');
    }
    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg">
  <a class="navbar-brand" href="/">AgroFundX</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    <li class="nav-item active move">
        <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
      </li>
    <li class="nav-item active move1">
        <a class="nav-link" href="#">About Us<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active move1">
        <a class="nav-link" href="/contact">Contact Us</a>
      </li>
     
    </ul>
    </div>
    

    </nav>
    );
}

export default Login_Nav;