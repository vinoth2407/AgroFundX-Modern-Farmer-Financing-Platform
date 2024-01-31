import React from 'react';
import '../assets/css/AdminLogin.css';
import Main_Page from './Main_Page';
import Login_Nav from './Login_Nav';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
const AdminLogin = () => {
  const navigate = useNavigate('');
  const routeAdminHome = () =>{
      navigate('/adminHome');
  }
  const routeFarmer=()=>{
    navigate('/login');
  }
  const routeAdmin=()=>{
    navigate('/admin');
  }

    return (
      <div id='back'>
      <Login_Nav/>
      <div className="container">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <form className="form">
            <label className='label1' htmlFor="chk" aria-hidden="true">
              Admin
            </label>
            <div>
            <span className='hell' onClick={routeFarmer}>Farmer</span>
            <span>/</span>
            <span className='hell'onClick={routeAdmin}>Admin</span>
            </div>
            <input className="input" type="email" name="email" placeholder="Email" required />
            <input className="input" type="password" name="pswd" placeholder="Password" required />
            <button i onClick={routeAdminHome}>Log in</button>
          </form>
        </div>

        
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AdminLogin;
