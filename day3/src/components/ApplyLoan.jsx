import React from 'react';
import '../assets/css/Apply_Loan1.css'
import { useNavigate } from 'react-router';
import HomeNav from './HomeNav';
import Footer from './Footer';
const Apply_Loan= () => {
    const navigate =useNavigate();
    const hello =() =>{
        navigate('/loan2')
    }
  return (
    <>
    <HomeNav/>
    <div className='body22'>
    <div className="container99">
      <div className="title1">LOAN DETAILS</div>
      <form action="#" onSubmit={hello}>
        <div className="user__details">
          <div className="input__box">
            <span className="details">Applicant Name:</span>
            <input type="text" placeholder="Enter Applicant Name" required />
          </div>
          <div className="input__box">
            <span className="details">Applicant Address:</span>
            <input type="text" placeholder="Enter Applicant Address" required />
          </div>
          <div className="input__box">
            <span className="details">Applicant Email:</span>
            <input type="email" placeholder="Enter email" required />
          </div>
          <div className="input__box">
            <span className="details">Applicant mobile:</span>
            <input
              type="tel"
              pattern="[0-9]{10}"
              placeholder="012-345-6789"
              required
              />
          </div>
          <div className="input__box">
            <span className="details">Applicant Aadhaar:</span>
            <input type="tel"
              pattern="[0-9]{12}" placeholder="Enter Aadhar number" required />
          </div>
          <div className="input__box">
            <span className="details">Applicant PAN NO:</span>
            <input type="text" placeholder="Enter PAN number" required />
          </div>
          {/* <div className="input__box">
            <span className="details">Enter the Time Of the Event</span>
            <input type="time" placeholder="Event Time" required />
        </div> */}
          <div className="input__box">
            <span className="details">Applicant Salary:</span>
            <input type="text" placeholder="Enter Applicant Salary" required />
          </div>
        <div className="input__box">
          <span className="details">Repayment months:</span>
          <input type="text" placeholder="Loan Repayment months" required />
        </div>
        </div>
       
        <div >
            <button type ="submit" className="button33" >Next Page</button>
        </div>
      </form>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Apply_Loan;