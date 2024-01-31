import React from "react"
import "../assets/css/HomeFooter.css";
import {AiFillFacebook, AiOutlineTwitter,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai';



const HomeFooter = () => {
  
  return (
    <>
    
    <footer className="site-footer1">
      <div className="container1">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">We do not store passwords you employ when accessing third-party services. When you permit us to connect with any third-party service, for example, a social media account or another comparable one, you allow us to access and store your email address(es), current location, profile photo, URL, and other information the third-party service gives us access to. You also authorize us to use and disclose it in accordance with their privacy policy. So, we recommend you check your privacy settings on these third-party services to understand the information sent to us through these services and change those privacy setting if needed. We transmit and sometimes store, such account data, only if we must, to get in touch with you, and only as the policies and terms of the third-party services allow.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>COMPANY</h6>
            <ul className="footer-links">
              <li><a href="/about">About AgroFundX</a></li>
              <li><a href="Security">Security</a></li>
              <li><a href="Careers">Careers</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container1">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by AgroFundX Inc
         
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><AiFillFacebook/></a></li>
              <li><a className="twitter" href="#"><AiOutlineTwitter/></a></li>
              <li><a className="Instagram" href="#"><AiFillInstagram/></a></li>
              <li><a className="linkedin" href="#"><AiFillLinkedin/></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </>
  );
}
export default HomeFooter;