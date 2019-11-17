import React from 'react';
import Navbar from "./components/Navbar";
import EngagmentBar from "./components/EngagementBar"
import Overide from './Overide.css';
import Home from "./components/Home";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Upload from "./components/Upload";
import Load from "./components/Load";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import SignMo from "./components/SignMo";
import Information from "./components/Information"






import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";







export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
          <div className='primaryContainer'>
          <Home />
          </div>
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
            <Route path="/signMo">
              <SignMo />
            </Route>
          <Route path="/search">
            <div className="primaryContainer"><Search /></div>
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/information">
            < Information />
          </Route>
          <Route path="/"> {/*must be last !!!*/}
            <Load />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



