import React, { Component } from 'react';
import Button from "@material-ui/core/Button";


class SignUp extends Component {

  /*signUp = () => {
    return(
    <Router location="/home"/>
    )
  };*/

  render(){

    return(
      <div className="customCenterA">
        <img src={require('../Håbe.svg')}  alt={'none'} style={{width:'220px'}}/>
        <h5 style={{fontFamily: 'Roboto'}}> An easier way to find interesting and relevant content </h5>
        <Button variant="contained" style={{backgroundColor: '#6646EE', color: '#FFFFFF'}} href={"/signMo"}>
          Sign Up
        </Button>
        <h5 style={{fontFamily: 'Roboto'}}> Already have an account? </h5>
        <a style={{fontFamily: 'Roboto'}} href={'/login'}> Sign in </a>
      </div>
    )
  }
}
export default SignUp;
