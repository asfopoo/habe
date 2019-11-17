import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import EngagementBar from './EngagementBar'

class Video extends Component
{
    render()
    {
        return(
            <div className="videoStructure">
            <EngagementBar/>
            <ReactPlayer height={730}  muted={true} loop={true}
            url="https://cdn2.hubspot.net/hubfs/2738960/test/CircuitThing.mp4?t=1573961961264"  
            playing />

            </div>
        )
    }
}

export default Video;