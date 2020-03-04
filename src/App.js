import React from 'react';
import Home from "./Screens/HomeScreen";
import Notifications from "./Screens/NotificationsScreen";
import Profile from "./Screens/ProfileScreen";
import Interests from "./Screens/InterestsScreen";
import Upload from "./Screens/UploadScreen";
import Load from "./Screens/Load";
import Landing from "./Screens/LandingScreen";
import Login from "./Screens/LoginScreen";
import SignUp from "./Screens/SignUpScreen";
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
            <Route path="/Landing">
              <Landing className="centerSignUp" />
            </Route>
            <Route path="/Tags">
              <Tags />
            </Route>
              <Route path="/SignUp">
                <SignUp />
              </Route>
            <Route path="/Interests">
              <div className="primaryContainer"><Interests /></div>
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/upload">
              <Upload />
            </Route>
            <Route path="/Notifications">
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



