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
      <div style={{display: 'inline-flex',  justifyContent:'center', alignItems:'center', height: '100vh', 'flex-direction': 'column', marginLeft: '40%'}}>
        <img src={require('../Håbe.svg')}  alt={'none'} style={{marginBottom: '3%'}}/>
        <h5> An easier way to find interesting and relevant content </h5>
        <Button variant="contained" style={{backgroundColor: '#6646EE', color: '#FFFFFF'}} href={"/signMo"}>
          Sign Up
        </Button>
        <h5> Already have an account? </h5>
        <a href={'/login'}> Sign in </a>
      </div>
    )
  }
}
export default SignUp;
