import React from 'react';
import Home from "./Screens/HomeScreen";
import Notifications from "./Screens/NotificationsScreen";
import Profile from "./Screens/ProfileScreen";
import Search from "./Screens/SearchScreen";
import Upload from "./Screens/UploadScreen";
import Load from "./Screens/Load";
import SignUp from "./Screens/SignUpScreen";
import Login from "./Screens/LoginScreen";
import SignMo from "./Screens/SignMo";
import Tags from "./Screens/Tags";
import Information from "./Screens/Information"
import EngagementBar from "./components/EngagementBar"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from "./store";






export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
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
    </Provider>
  );
}



