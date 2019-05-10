import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import Navbar from '../layout/navbar.component';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
      hasBeenCreated: false
    };
  }

renderRedirect(){
  if(this.state.hasBeenCreated){
    return <Redirect to='/login' />
  }
}

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
  const newUser = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
      };
  axios.post('/signup', newUser)
  .then(res => {
    if(res.data.error){
      window.alert(res.data.error)
    } 
    else{
      window.alert("User Created");
      this.setState({ hasBeenCreated: true });
    }
  })
  .catch(err => {
    console.log("ERROR!!")
    console.log(err)
  })
};

render() {
    const { errors } = this.state;
return (
    <div style={{ width: '100vw' }}>
      <Navbar />
      <div className="container h-75">
         <div className="row p-2 h-100">
          <div className="col-xl-3 col-lg-2 col-md-12"></div>
          <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 col-xs-12 my-auto mx-auto">
            <Link to="/" className="btn btn-link text-dark">
              <i className="material-icons">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col-sm-12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="text-secondary">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate className="form-group" onSubmit={this.onSubmit}>
              <div className="col-xs-12 lg-w-75 xs-w-100 p-2">
                <input
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.name}
                  placeholder="Username"
                  id="username"
                  type="text"
                  className="p-2 form-control"
                />
              </div>
              <div className="col-xs-12 lg-w-75 xs-w-100 p-2">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  placeholder="Email"
                  id="email"
                  type="email"
                  className="p-2 form-control"
                />
              </div>
              <div className="col-xs-12 lg-w-75 xs-w-100 p-2">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  placeholder="Password"
                  id="password"
                  type="password"
                  className="p-2 form-control"
                />
              </div>
              <div className="col-xs-12 lg-w-75 xs-w-100 p-2">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  placeholder="Retype Password"
                  id="password2"
                  type="password"
                  className="p-2 form-control"
                />
              </div>
              <div style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-primary btn-outline-primary btn-lg"
                >
                  Sign up
                </button>
                {this.renderRedirect()}
              </div>
            </form>
          </div>
          <div className="col-xl-3 col-lg-2 col-md-12"></div>
        </div>
      </div>
    </div>
    );
  }
}
export default Register;
