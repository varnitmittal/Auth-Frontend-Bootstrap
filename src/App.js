import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/layout/landing.component";
import Register from "./components/auth/register.component";
import Login from "./components/auth/login.component";
import Dashboard from "./dashboard.component";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard}/>
        </div>
      </Router>
    );
  }
}
export default App;