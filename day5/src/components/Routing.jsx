import React, { Component } from 'react'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Main_Page from './Main_Page';
import LoginForm from './Login';
import Contact from './Contact_Us';
import HomePage from './Gif';

import Home from './Home';
import AdminLogin from './AdminLogin';
import Profile from './profile';
import Delete_events from './Loader';
import Footer from './Footer';
import Blog from './benefits';
import AdminHome from './AdminHome';


import Apply_Loan from './ApplyLoan';
import Apply_Loan2 from './ApplyLoan2';
import DashBoard from './Dashboard';
import LoanTracker from './LoanTracker';
import MediaCard from './LoanApplied';
import UserDashBoard from './UserDash';
import AppliedLoans from './LoanApplied';
import LoanDetails from './LoanDetails';
import HomeFooter from './HomeFooter';




function Routing() {
    return ( 
        <>
        
        <Router>
            <Routes>
                <Route path="/" element={<Main_Page/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/contact" element={<Contact/>}/> 
                <Route path="/home" element={<Home/>}/>
                <Route path="/admin" element={<AdminLogin/>}/> 
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/load" element={<Delete_events/>}/>
                <Route path="/adminhome" element={<AdminHome/>}/>
                <Route path="/loan" element={<Apply_Loan/>}/>
                <Route path="/loan2" element={<Apply_Loan2/>}/>
                <Route path="/dash" element={<DashBoard/>}/>
                <Route path="/track" element={<LoanTracker/>}/>
                <Route path="/applied" element={<AppliedLoans/>}/>
                <Route path="/userdash" element={<UserDashBoard/>}/>
                <Route path="/loandetails" element={<LoanDetails/>}/>
                <Route path="/HomeFooter" element={<HomeFooter/>}/>
            </Routes>
        </Router>
        </> 
     );
}

export default Routing;