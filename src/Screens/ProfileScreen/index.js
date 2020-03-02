import React, {Component} from 'react';
import Navbar from "../../components/Navbar";
import axios from 'axios';


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token"),
      user: [],
      interests: []
    };
  }

  async getData (self) {
    let arr = [];

    axios.post('http://localhost:3333/user', {
      jwt: this.state.token,
      userId: this.state.userId
    })
      .then(function (response) {
        self.setState({user: response.data[0]})
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.post('http://localhost:3333/profile', {
      jwt: this.state.token,
      userId: this.state.userId
    })
      .then(function (response) {
        if(response.data){
          // eslint-disable-next-line array-callback-return
          response.data.map(interest => {
            arr.push(interest.interest);
          })
        }
        self.setState({interests: arr});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount = () => {
    let self = this;
    this.getData(self)
  };

  render() {
    console.log(this.state.interests);
    return (
      <div>
        <h3>First Name</h3>
        <h5>{this.state.user.first_name}</h5>
        <h3>Last Name</h3>
        <h5>{this.state.user.last_name}</h5>
        <h3>Email</h3>
        <h5>{this.state.user.email}</h5>
        <h3>Username</h3>
        <h5>{this.state.user.username}</h5>
        <h3>Interests</h3>
        {this.state.interests.length > 0 && (
          this.state.interests.map(interest => {
            return(
            <h5>{interest}</h5>
            )
          })
        )}
        <Navbar> </Navbar>
      </div>
    )
  }
}

export default Profile;
