import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Upload from "./components/Upload";


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
          <Route path="/search">
            <Search />
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
          {/*<Route path="/users">
            <Users />
          </Route>*/}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

/*function Home() {
  return  <div>
    <Navbar> </Navbar>
    <h2>Home</h2>
  </div>;
}

function Notifications() {
  return <Notifications/>;
}

function Users() {
  return <Users/>;
}

function Search() {
  return <Search/>;
}

function Profile() {
  return <Profile/>;
}

function Upload() {
  return <Upload/>;
}*/
