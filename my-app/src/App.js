import React, { Component } from 'react';
import './App.css';
import Login from './Components/login';
import Home from './Components/homepage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';


class App extends Component {
  constructor(props){
    super();
    this.state = {
      loginInfo: false
    }
  }
  render() {
    return (
      // <div>
      //   {this.state.loginInfo?<Home />:<Login />}
      // </div>
      // <Router>
      //   <div>
      //     <ul>
      //       <li><Link to={'/'}>Home</Link></li>
      //       <li><Link to={'/login'}>Login</Link></li>
      //     </ul>
      //     <hr/>
      //       <Route exact path='/' Component={Home}/>
      //       <Route exact path='/login' Component={Login}/>
      //   </div>
      // </Router>
      <Router>
      <div>
        <nav>
          <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/login'}>Login</Link></li>            
          </ul>
        </nav>

        <Route exact path='/' Component={Home}/>
        <Route exact path='/login' Component={Login}/>
      </div>
    </Router>
    );
  }
}

export default App;
