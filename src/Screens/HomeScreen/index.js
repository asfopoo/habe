import React, { Component } from 'react';
import Navbar from "../../components/Navbar.js";
import Video from '../../components/Video.js';
var jwt = require('jsonwebtoken');


class Home extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount = () => {
    let self = this;
    let token = localStorage.getItem("token");
    jwt.verify(token, 'cmV0dXJubG9naWM=', { algorithm: 'RS256'}, function(err, decoded) {
      if (err) {
        window.location = '/'
      }
      else{
        self.setState({isLoading: false})
      }
    });
  }

  render() {
    if(this.state.isLoading){
      return(
        <h1> </h1>
      )
    }
    else {
      return (
        <div className="videoContainer">
          <Navbar/>
          <span className="videoItem"><Video videoName="CircuitThing"
                                             url="https://cdn2.hubspot.net/hubfs/2738960/test/Alvin%20Yakatori/PersonalFitnessCaption.mp4?t=1573982576283"/></span>
          <span className="videoItem"><Video videoName="ChristmasTree"
                                             url="https://cdn2.hubspot.net/hubfs/2738960/test/Alvin%20Yakatori/ChristmasTreeCaption.mp4?t=1573982573740"/></span>
          <span className="videoItem"><Video videoName="BreakWrists"
                                             url="https://cdn2.hubspot.net/hubfs/2738960/test/Alvin%20Yakatori/FitnessCaption.mp4?t=1573982574645"/></span>
          <span className="videoItem"><Video videoName="RCPlane"
                                             url="https://cdn2.hubspot.net/hubfs/2738960/test/Alvin%20Yakatori/RCPlaneCaption.mp4?t=1573982572187"/></span>
          <span className="videoItem"><Video videoName="WoodWorking"
                                             url="https://cdn2.hubspot.net/hubfs/2738960/test/Alvin%20Yakatori/WoodworkingCaption.mp4?t=1573982571092"/></span>
          <span className="videoItem"><Video videoName="Bkaer"
                                             url="https://cdn2.hubspot.net/hubfs/2738960/test/Alvin%20Yakatori/WatermelonCaption.mp4?t=1573982567584"/></span>

        </div>
      )
    }
  }
}

export default Home;

