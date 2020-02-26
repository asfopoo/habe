import React from 'react';
import Home from "./Screens/Home";
import Notifications from "./Screens/Notifications";
import Profile from "./Screens/Profile";
import Search from "./Screens/Search";
import Upload from "./Screens/Upload";
import Load from "./Screens/Load";
import SignUp from "./Screens/SignUp";
import Login from "./Screens/Login";
import SignMo from "./Screens/SignMo";
import Tags from "./Screens/Tags";
import Information from "./Screens/Information"
import EngagementBar from "./components/EngagementBar"






import {
  BrowserRouter as Router,
  Switch,
  Route,
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
          <EngagementBar/>
          <Home />
          </div>
          </Route>
          <Route path="/SignUp">
            <SignUp className="centerSignUp" />
          </Route>
          <Route path="/Tags">
            <Tags />
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



