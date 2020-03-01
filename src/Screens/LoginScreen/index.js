import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField'
import axios from "axios";
import styles from "./styles";
import config from '../../config';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      username: '',
      password: ''
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.login = this.login.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  async login () {
    await axios.post('http://localhost:3333/login', {
      UUID : config.UUID,
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        localStorage.setItem("token", response.data.token);
        window.location = '/home';
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  render(){
    localStorage.removeItem("token");
    return(
      <div style={styles.mainContainer}>
        <div style={styles.container}>
          <img src={require('../../Assets/Images/Håbe.svg')} alt={'none'} style={styles.image}/>
          <h5 style={styles.text}> An easier way to find interesting and relevant content </h5>
          <TextField
            required
            id="standard-required"
            label="Username"
            margin="normal"
            value={this.state.username}
            onChange={this.handleChangeUsername}
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            value={this.state.password} onChange={this.handleChangePassword}
          />
            <Button className="mt-20" variant="contained" style={styles.button} onClick={this.login}>
              Login
            </Button>
          <a href={'/login'} className="mt-20" style={styles.text}> Forgot Password </a>
        </div>
      </div>
    )
  }
}
export default Login;
