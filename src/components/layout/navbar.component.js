import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar" style={{ backgroundColor: '#000000' }}>
              <span className="text-white mx-auto" style={{ fontSize: "1.8rem" }}>
                  FRONTEND
              </span>
        </nav>
      </div>
    );
  }
}

export default Navbar;