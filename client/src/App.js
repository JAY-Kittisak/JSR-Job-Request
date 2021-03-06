import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import NavbarTEST from './components/NavbarTEST'
import SidebarData from './components/SidebarData'
import Footer from "./components/Footer";
import Landing from './components/Landing'
import Login from "./components/Login";
import Register from './components/Register'
import Profile from './components/Profile'
import JobIt from './pages/Job_it'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <NavbarTEST />
          <Switch>
            <Route path='/pages/Job_it' component={JobIt} />
          </Switch>
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App
