import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmptyLayout from "./layouts/EmptyLayout";
import HomeLayout from "./layouts/HomeLayout";
import Navigation from "./layouts/Navigation";

import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link,
  Redirect,
  useHistory, 
  useLocation
} from "react-router-dom";

function App() {
 
  return (
    <Router>
      <div className="App"> 
      <Navigation />
        <Switch>
          <Route exact path="/">
              <HomeLayout />
          </Route>
          <Route exact path="/empty">
              <EmptyLayout />
          </Route>
        </Switch>    
      </div>
    </Router>
  );
}

export default App;
