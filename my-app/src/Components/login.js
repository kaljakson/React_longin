import React, { Component } from 'react';
import './login.css';



export default class Login extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="login">
          <div className="login-header">
            <h1>Login</h1>
          </div>
          <div className="login-form">
            <div className="user-pwd">
              <input type="text" placeholder="Email" />
              <hr />
              <input type="password" placeholder="Password" />
            </div>
            <input type="button" value="Login" className="login-button" />
            <p><b>Sign up</b> for a new account</p>
          </div>
        </div>
      </div>
    );
  }
}
