import React from 'react';
import jwtDecode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";
import "./components/auth-css/auth.css";

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       isLoggedIn: false,
      didLogOut: false
    }
    this.logout = this.logout.bind(this);
  }
  componentDidMount(){
     axios.get('/checkToken')
    .then(res => {
    })
    .catch(err => {
    }) 

    //checking if already logged in using jwt Token
    const lsToken = localStorage.getItem('token');
    if(lsToken){
      //decoding token to extract payload data
      const decoded = jwtDecode(lsToken);
      this.setState({
        username: decoded.username,
        email: decoded.email,
        id: decoded.id,
        isLoggedIn: true
      });
    }
  }

  logout(){
    //removing local storage token
    localStorage.removeItem('token');    
    this.setState({ didLogOut: true })
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? 
          <div>
            <h3>{this.state.username}, welcome to your dashboard!!</h3>
            <button onClick={this.logout}>Logout</button>
          </div> :
          <div>
            <h5> You're not Logged in. Please login first...</h5>
          </div>
        }
        {this.state.didLogOut ? <Redirect to="/" /> : null}
       <div>
    </div> 
      </div> 
    )
  }
}

export default Dashboard;