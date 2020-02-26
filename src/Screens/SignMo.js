import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField'



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
      userName: '',
      password: ''
    }
  }



  render(){
    return(
      <div className="moParent" style={styleB}>
          <img style={styleC} src={require('../Assets/Images/windmills.svg')} alt={'Windmills'}width="300px"></img>
          <h2 style={{fontFamily: 'Roboto', alignSelf: 'Center'}}>Almost There!</h2>
          <div className="moFormGroup" style={styleA}>
          <TextField
          required
          id="filled-required"
          label="First Name"
          defaultValue="Hermoine"
          margin="normal"
          variant="outlined"
        />

<TextField
          required
          id="filled-required"
          label="Last Name"
          defaultValue="Granger"
          margin="normal"
          variant="outlined"
        />

<TextField
          required
          id="filled-required"
          label="E-mail Address"
          defaultValue="Stacey@Hogwarts.com"
          margin="normal"
          variant="outlined"
        />

<TextField
          required
          id="filled-required"
          label="Username"
          defaultValue="hermoineee"
          margin="normal"
          variant="outlined"
        />

<Button className="mt-20" variant="contained" style={{marginTop:'20px', backgroundColor: '#6646EE', color: '#FFFFFF', marginBottom: '4%'}} href={"/search"}>
            Beam Me Up, Scotty!
          </Button>
          </div>
      </div>
    )
  }

}
export default SignMo;
