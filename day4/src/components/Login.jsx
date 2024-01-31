import React from 'react';
import '../assets/css/Login.css';
import Main_Page from './Main_Page';
import Login_Nav from './Login_Nav';
import { useNavigate } from 'react-router-dom';
import Delete_events from './Loader';
import Footer from './Footer';
const LoginForm = () => {
  const navigate = useNavigate('');
  const routeHome = () =>{
      navigate('/home');
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
           
            <label htmlFor="chk" aria-hidden="true">
              SignIn
            </label>
            <div id="fle">
            <span className='hell' onClick={routeFarmer}>Farmer</span>
            <span>/</span>
            <span className='hell'onClick={routeAdmin}>Admin</span>
            </div>
            <input className="input" type="email" name="email" placeholder="Email" required />
            <input className="input" type="password" name="pswd" placeholder="Password" required />
            <button i onClick={routeHome}>Log in</button>
          </form>
        </div>

        <div className="register">
          
          <form className="form">
            <label htmlFor="chk" aria-hidden="true">
              SignUp
            </label>
            <input className="input" type="text" name="txt" placeholder="Username" required />
            <input className="input" type="email" name="email" placeholder="Email" required />
            <input className="input" type="password" name="pswd" placeholder="Password" required />
            <input className="input" type="password" name="pswd" placeholder="Confirm Password" required />

            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default LoginForm;
