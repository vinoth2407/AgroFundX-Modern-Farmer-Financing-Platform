import React from 'react';
import '../assets/css/Login.css';
import Main_Page from './Main_Page';
import Login_Nav from './Login_Nav';

const LoginForm = () => {
    return (
      <div id='back'>
      <Login_Nav/>
      <div className="container">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <form className="form">
            <label htmlFor="chk" aria-hidden="true">
              SingIn
            </label>
            <input className="input" type="email" name="email" placeholder="Email" required />
            <input className="input" type="password" name="pswd" placeholder="Password" required />
            <button i>Log in</button>
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
    </div>
  );
};

export default LoginForm;
