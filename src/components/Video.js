import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import EngagementBar from './EngagementBar'

class Video extends Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <div className="videoStructure">
            <EngagementBar/>
            <ReactPlayer height={730}  muted={true} loop={true}
            url={this.props.url}
            playing />

            </div>
        )
    }
}

export default Video;