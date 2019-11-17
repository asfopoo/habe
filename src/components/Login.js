import React, { Component } from 'react';
import Button from "@material-ui/core/Button";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      email: '',
      password: ''
    }
  }

  login = () => {
    console.log('I login');
  };


  render(){
    return(
      <div style={{display: 'inline-flex',  justifyContent:'center', alignItems:'center', height: '100vh', 'flex-direction': 'column',  marginLeft: '40%'}}>
        <img src={require('../Håbe.svg')}  alt={'none'} style={{marginBottom: '3%'}}/>
        <h5> An easier way to find interesting and relevant content </h5>
        <input type="text" placeholder="Email" value={this.state.email} onChange={(event,newValue) => this.setState({email:newValue})} style={{marginBottom: '4%'}}  />
        <input type="text" placeholder="Password" value={this.state.password} onChange={(event,newValue) => this.setState({password:newValue})} style={{marginBottom: '7%'}}  />
        <Button variant="contained" style={{backgroundColor: '#6646EE', color: '#FFFFFF', marginBottom: '4%'}} onClick={this.login}>
          Login
        </Button>
        <a href={'/login'}> Forgot Password </a>
      </div>
    )
  }

}
export default Login;
