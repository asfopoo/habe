import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'


class Load extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      loggedIn: false,
      loading: true
    }
  }

  logIn = () => {
    let token = localStorage.getItem("token");
    if(token){ //token exits therefor logged in
      this.setState({loggedIn: true});
      this.setState({loading:false});
    }
    else {
      this.setState({loading:false});
    }
  };

  componentDidMount() {
    console.log("hit the load");
    this.logIn();
}

  render(){
    if  (this.state.loading){
      return(
        <h1>Loading</h1>
      )
    }
    else {
      return (
       <div className="center-home">
          <div>
          {this.state.loggedIn ? (
            <Redirect to="/home"/>
          ) : (
            <Redirect to="/Landing"/>
          )}
        </div>
       </div>
      )
    }
  }

}


export default Load;
