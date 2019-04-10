import React, { Component } from 'react';
import './App.css';
import Login from './Components/login';
import Home from './Components/homepage';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';


class App extends Component {
  constructor(props){
    super();
    this.state = {
      loginInfo: true
    }
  }
  render() {
    return (
      <div>
        {this.state.loginInfo?<Login />:<Home />}
      </div>
    );
  }
}

export default App;
