import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField'
import axios from 'axios';
import {getUsers} from "../../actions/getUsersActions";
import {connect} from "react-redux";
import styles from './styles';
import store from '../../store';
import config from '../../config';

class SignMo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: ''
    }
  }

  async getUsers () {
    await this.props.getUsers()
      .then(response => {
        this.setState({users: response.users.users});
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  throwInStore = () => {

  };

  componentDidMount() {
    this.getUsers = this.getUsers.bind(this);
    this.getUsers();
    this.throwInStore();
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
    let taken = false;
    // eslint-disable-next-line no-useless-escape
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(this.state.users){
      // eslint-disable-next-line array-callback-return
      this.state.users.map(user => {
        if(this.state.username === user.username){
          taken = true;
        }
      });
    }
    if(taken){
      alert("Username is already taken...Choose another one!");
    }
    else if(!regex.test(this.state.email)){
      alert("Valid email is required")
    }
    else if(!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.username || !this.state.password){
      alert("One or more fields is missing")
    }
    else {
      axios.post('http://localhost:3333/createUser', {
        UUID: config.UUID,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      })
        .then(function (response) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userId", response.data.user);
          window.location = '/search';
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };


  render(){
    localStorage.removeItem("token");
    return(
      <div className="moParent" style={styles.mainContainer}>
          <img style={styles.image} src={require('../../Assets/Images/windmills.svg')} alt={'Windmills'} width="300px"/>
          <h2 style={{fontFamily: 'Roboto', alignSelf: 'Center'}}>Almost There!</h2>
          <div className="moFormGroup" style={styles.container}>
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

<Button className="mt-20" variant="contained" style={styles.button}  onClick={this.handleSignUp}>
            Beam Me Up, Scotty!
          </Button>
          </div>
      </div>
    )
  }

}
//export default SignMo;
const unsubscribe = store.subscribe(() => console.log(store.getState()))

const mapStateToProps = state => {
  const { users } = state;

  return {
    users: users,
  };
};

const mapDispatchToProps = dispatch =>  ({
  getUsers: () => store.dispatch(getUsers())
});

unsubscribe();

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignMo);
