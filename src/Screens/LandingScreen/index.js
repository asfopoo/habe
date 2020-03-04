import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import styles from './styles';


class SignUp extends Component {

  render(){
    return(
      <div style={styles.mainContainer}>
        <img src={require('../../Assets/Images/Håbe.svg')} alt={'none'} style={styles.image}/>
        <h5 style={styles.text}> An easier way to find interesting and relevant content </h5>
        <Button variant="contained" style={styles.button} href={"/SignUp"}>
          Sign Up
        </Button>
        <h5 style={styles.text}> Already have an account? </h5>
        <a style={styles.text} href={'/login'}> Sign in </a>
      </div>
    )
  }
}
export default SignUp;
