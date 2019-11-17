import React, { Component } from 'react';
import EngagementBar from './EngagementBar.js';
import Navbar from "./Navbar.js";
import Video from './Video.js';




class Home extends Component
{
  render()
  {
    return(
      <div className="videoContainer">
      <Navbar/>
      <span className="videoItem"><Video/></span>
      <span className="videoItem"><Video/></span>
      <span className="videoItem"><Video/></span>
      <span className="videoItem"><Video/></span>
      <span className="videoItem"><Video/></span>
      </div>
    )
  }
}

export default Home;