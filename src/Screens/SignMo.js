import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField'
import axios from 'axios';



const styleA =
{
 display: 'Flex',
 flexDirection: 'column',
 maxWidth: '400px',
 minWidth: 'auto',
 alignSelf: 'Center'
}


const styleB =
{
 display: 'Flex',
 flexDirection: 'column',
 justifyContent: 'Center',
 alignContent: 'Center',
 justifyItems: 'Center',
 margin:  '0 auto'
}

const styleC=
{
  alignSelf: 'Center'

}


class SignMo extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: ''
    }
  }

  handleChangeFirstName = (e) => {
    this.setState({firstName: e.target.value});
  };

  handleChangeLastName = (e) => {
    this.setState({lastName: e.target.value});
  };

  handleChangeEmail = (e) => {
    this.setState({email: e.target.value});
  }

  handleChangeUsername = (e) => {
    this.setState({username: e.target.value});
  };

  handleChangePassword = (e) => {
    this.setState({password: e.target.value});
  }

  handleSignUp = () => {

    console.log('clicked')
    axios.post('http://localhost:3333/createUser', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
    })
      .then(function (response) {
        console.log(response);
        window.location = '/search';
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //href={"/search"}


  render(){
    return(
      <div className="moParent" style={styleB}>
          <img style={styleC} src={require('../Assets/Images/windmills.svg')} alt={'Windmills'} width="300px"/>
          <h2 style={{fontFamily: 'Roboto', alignSelf: 'Center'}}>Almost There!</h2>
          <div className="moFormGroup" style={styleA}>
          <TextField
          required
          id="filled-required"
          label="First Name"
          margin="normal"
          variant="outlined"
          onChange={this.handleChangeFirstName}
        />

<TextField
          required
          id="filled-required"
          label="Last Name"
          margin="normal"
          variant="outlined"
          onChange={this.handleChangeLastName}
        />

<TextField
          required
          id="filled-required"
          label="E-mail Address"
          margin="normal"
          variant="outlined"
          onChange={this.handleChangeEmail}
        />

<TextField
          required
          id="filled-required"
          label="Username"
          margin="normal"
          variant="outlined"
          onChange={this.handleChangeUsername}
        />
<TextField
        required
        id="filled-required"
        label="Password"
        margin="normal"
        variant="outlined"
        type="Password"
        onChange={this.handleChangePassword}
        />

<Button className="mt-20" variant="contained" style={{marginTop:'20px', backgroundColor: '#6646EE', color: '#FFFFFF', marginBottom: '4%'}}  onClick={this.handleSignUp}>
            Beam Me Up, Scotty!
          </Button>
          </div>
      </div>
    )
  }

}
export default SignMo;
