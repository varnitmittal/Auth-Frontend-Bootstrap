import React from "react";
import Navbar from './navbar.component';

class Landing extends React.Component {
  render() {
    return (
      <div>
         <Navbar />
        <div style={{ height: "75vh" }} className="container">
          <div className="row h-100">
            <div className="col-xm-12 my-auto mx-auto" style={{ textAlign: 'center'}}>
              <h4>
                <b>Welcome</b> to the {" "}
                <span style={{ fontFamily: "monospace" }}>FRONTEND</span>
              </h4>
              <h5 className="text-dark text-muted">
                The minimal React Frontend for full-stack MERN applications with user authentication
                and interactive dashboard. 
              </h5>
              <br />
              <a
                href="/register"
                style={{
                  width: "135px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-lg btn-outline-primary"
              >
                Register
              </a>
              <a
              href="/login"
                style={{
                  marginLeft: "1.5rem",
                  width: "135px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-lg btn-outline-secondary"
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;