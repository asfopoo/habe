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
      <span className="videoItem"><Video videoName="CircuitThing" url="https://cdn2.hubspot.net/hubfs/2738960/test/CircuitThing.mp4?t=1573973464661"/></span>
      <span className="videoItem"><Video videoName="ChristmasTree" url="https://cdn2.hubspot.net/hubfs/2738960/test/ChristmasTree.mp4?t=1573973463437"/></span>
      <span className="videoItem"><Video videoName="BreakWrists" url="https://cdn2.hubspot.net/hubfs/2738960/test/BreakWrists.mp4?t=1573973460727"/></span>
      <span className="videoItem"><Video videoName="RCPlane" url="https://cdn2.hubspot.net/hubfs/2738960/test/RCPlane.mp4?t=1573973462547"/></span>
      <span className="videoItem"><Video videoName="WoodWorking" url="https://cdn2.hubspot.net/hubfs/2738960/test/WoodWorking.mp4?t=1573973462081"/></span>
      </div>
    )
  }
}

export default Home;

