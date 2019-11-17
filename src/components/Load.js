import React, { Component } from 'react';
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter, Route, Redirect } from 'react-router-dom'


class Load extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      loggedIn: false,
      loading: false
    }
  }

  /*logIn = () => {
    this.setState({loggedIn: true}, () => {
      this.setState({loading:false});
    })
  };*/

  componentDidMount() {
    console.log("hit the load");
    //this.logIn();
}

  render(){
    if  (this.state.loading){

    }
    else {
      return (
       <div className="center-home">
          <div>
          {this.state.loggedIn ? (
            <Redirect to="/home"/>
          ) : (
            <Redirect to="/signUp"/>
          )}
        </div>
       </div>
      )
    }
  }

}


export default Load;
