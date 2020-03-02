import React, {Component} from 'react';
import Navbar from "../../components/Navbar";
import axios from 'axios';


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      interests: {}
    };
  }

  componentDidMount = () => {
    
  };



  render() {
    return (
      <div>

        <Navbar> </Navbar>
      </div>
    )
  }
}

export default Profile;
