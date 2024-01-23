import React from "react"
import "../assets/css/contact.css";
import { useNavigate } from "react-router-dom";
import Login_Nav from "./Login_Nav";

const Contact = () => {
  const navigate=useNavigate('');
  const routeMain=()=>{
      navigate('/');
  }
  return (
    <>
    <Login_Nav/>
    <body className="con">
     <div class="container2">
    <div class="content2">
      <div class="left-side2">
        <div class="address details2">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">123 Main Street,chennai</div>
          <div class="text-two">Tamil Nadu</div>
        </div>
        <div class="phone details2">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">1800 200 6668</div>
          <div class="text-two">1900 100 6769</div>
        </div>
        <div class="email details2">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">AgroFundX123@gmail.com</div>
          <div class="text-two">Admin@gmail.com</div>
        </div>
      </div>
      <div class="right-side2">
        <div class="topic-text">Send us a message</div>
        <p>ArgoFundX  PVT  LTD</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="input-box message-box">
        <input className="vino3" type="text" placeholder="Message"/>
        </div>
        <div class="button">
          <input type="button" onClick={routeMain} value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
  </body>
    </>
  );
}
export default Contact;