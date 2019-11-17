import React, { Component } from 'react';
import Button from "@material-ui/core/Button";

class SignMo extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      password: ''
    }
  }

  render(){
    return(
      <div>
        <div style={{display: 'inline-flex',  justifyContent:'center', alignItems:'center', height: '100vh', 'flex-direction': 'column', marginLeft: '10%'}}>
          <img src={require('../undraw_wind_turbine_x2k4.svg')}  alt={'none'} style={{marginBottom: '3%'}} height={'30%'} width={'30%'}/>
          <h1 style={{color: '#595959'}}>Almost there!</h1>
          <input type="text" placeholder="First name" value={this.state.firstName} onChange={(event,newValue) => this.setState({firstName:newValue})} style={{width: '30%', height: '4%', marginBottom: '3%'}} />
          {/*<h6 style={{marginBottom: '3%', color: '#595959'}}> First Name </h6>*/}
          <input type="text" placeholder="Last name" value={this.state.lastName} onChange={(event,newValue) => this.setState({lastName:newValue})} style={{width: '30%', height: '4%', marginBottom: '3%'}}/>
          <input type="text" placeholder="Email" value={this.state.email} onChange={(event,newValue) => this.setState({email:newValue})} style={{width: '30%', height: '4%', marginBottom: '3%'}}/>
          <input type="text" placeholder="User name" value={this.state.userName} onChange={(event,newValue) => this.setState({userName:newValue})} style={{width: '30%', height: '4%', marginBottom: '3%'}}/>
          <input type="password" placeholder="Password" value={this.state.password} onChange={(event,newValue) => this.setState({password:newValue})} style={{width: '30%', height: '4%'}}/>

        </div>
        <div style={{display: 'flex', 'justify-content': 'flex-end', width: '62%'}}>
          <Button variant="contained" style={{backgroundColor: '#6646EE', color: '#FFFFFF' }} href={"/tags"}>
            Sign Up
          </Button>
        </div>
      </div>

    )
  }

}
export default SignMo;
