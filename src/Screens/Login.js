import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      email: '',
      password: ''
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  badCreds = () => {
    alert("Bad Credentials");
  }


  render(){
    return(
      <div style={{ textAlign: 'center'}}>
      <div style={{display: 'inline-flex',  justifyContent:'center', alignItems:'center', height: '100vh', 'flex-direction': 'column'}}>
        <img src={require('../Assets/Images/Håbe.svg')} alt={'none'} style={{marginBottom: '3%'}}/>
        <h5 style={{fontFamily: 'Roboto'}}> An easier way to find interesting and relevant content </h5>
        <TextField
          required
          id="standard-required"
          label="E-mail"
          defaultValue="Hello World"
          margin="normal"
          value={this.state.email}
          onChange={this.handleChangeEmail}
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          value={this.state.password} onChange={this.handleChangePassword}
        />
        {this.state.email === 'mo@motanveer.com' && this.state.password === 'applesauce' ? (
          <Button className="mt-20" variant="contained" style={{marginTop:'20px', backgroundColor: '#6646EE', color: '#FFFFFF', marginBottom: '4%'}} href={"/home"}>
            Login
          </Button>
        ) : (
          <Button  className="mt-20" variant="contained" style={{marginTop:'20px', backgroundColor: '#6646EE', color: '#FFFFFF', marginBottom: '4%'}} onClick={this.badCreds}>
            Login
          </Button>
          )}

        <a href={'/login'} className="mt-20" style={{fontFamily: 'Roboto'}}> Forgot Password </a>
      </div>
      </div>
    )
  }

}
export default Login;
