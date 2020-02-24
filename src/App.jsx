import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Public from "./Public";
import Private from "./Private";
import Callback from "./Callback";
import Login from "./Login";
import List from "./List";
import Map from "./Map";

import { AuthProvider } from "./Auth";
import { PrivateRoute } from "./PrivateRoute";
import { Nav, NavLink } from "./Components";


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Nav >
         <ul>
         <li>
          <NavLink to="/" component={NavLink}>
            Public
          </NavLink></li>
          <li>
              <NavLink to="/private">Private</NavLink></li>
              <li>
          <NavLink to="/list">List</NavLink></li>
         <li> <NavLink to="/map">Map</NavLink></li>
          </ul>
        </Nav>

        <Switch>
          <Route path="/public" component={Public} />
          <Route path="/callback" component={Callback} />
          <Route path="/list" component={List} />
          <Route path="/login" component={Login} />
          <Route path="/map" component={Map} />
          <PrivateRoute path="/private" component={Private} />
          <Redirect to="/public" />
        </Switch>
      </AuthProvider>
        
        
        
        
        
        
    );
  }
}

export default App;
