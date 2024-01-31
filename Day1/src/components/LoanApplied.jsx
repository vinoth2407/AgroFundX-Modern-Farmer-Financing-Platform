import React from 'react';
import '../assets/css/LoanApplied.css';
import AdminNav from './AdminNav';
import Footer from './Footer';
const AppliedLoans = () => {
  const cardsData = [
    {  name: 'Applicant Name : Suhaas', id: 'Application Loan Id : 4829274', phone: 'Applicant Phone No : 9080847433'
,address: 'Application Address : XXXXXX', email: 'Application Email : XXXXXX@gmail.com',loan: 'Loan Amount : 400000'},
    {  name: 'Applicant Name : Gopal', id: 'Application Loan Id : 1833270', phone: 'Applicant Phone No : 957577433'
,address: 'Application Address : XXXXXX', email: 'Application Email : XXXXXX@gmail.com',loan: 'Loan Amount : 800000'},
    {  name: 'Applicant Name : Shekar', id: 'Application Loan Id : 2344291', phone: 'Applicant Phone No : 919847433'
,address: 'Application Address : XXXXXX', email: 'Application Email : XXXXXX@gmail.com',loan: 'Loan Amount : 100000'},
  ];

  return (
    <div>
        <AdminNav/>
      <h1 style={{textAlign:"center",paddingTop:"50px",color:"#bd2130"}}>Applied Loans</h1>
      <div className="card-list">
        {cardsData.map((card, index) => (
          <div key={index} className="card3">
            <p className="card-title">{card.name}</p>
            <p className="card-title">{card.id}</p>
            <p className="card-title">{card.phone}</p>
            <p className="card-title">{card.address}</p>
            <p className="card-title">{card.email}</p>
            <p className="card-title">{card.loan}</p>
            <div style={{display:"flex",paddingLeft:"70px",paddingTop:"20px"}}>
                <div style={{paddingRight:"50px"}}>
                <button style={{color:"white",backgroundColor:"red",width:"140px",borderRadius:"6px",borderColor:"green"}}>Reject</button>
                </div>
                <div>
                <button style={{color:"white",backgroundColor:"green",width:"140px",borderRadius:"6px",borderColor:"red"}}>Approve for Loan</button>
                </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default AppliedLoans;