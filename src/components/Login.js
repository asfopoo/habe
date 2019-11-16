import React, { Component } from 'react';

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
  }


  render(){
    return(
      <div>
        <div>
          <input type="text" placeholder="Email" value={this.state.email} onChange={(event,newValue) => this.setState({email:newValue})}  />
        </div>
        <div>
          <input type="text" placeholder="Password" value={this.state.password} onChange={(event,newValue) => this.setState({password:newValue})}  />
        </div>
        <h1>login button</h1>
        <h1>Forgot Password</h1>
      </div>
    )
  }

}
export default Login;
