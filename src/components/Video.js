import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component
{
    render()
    {
        return(
            <ReactPlayer height={700}  muted={true} loop={true}
            url="https://www.returnlogic.com/hubfs/R2018_ASSETS/HOME_ASSETS/iPhone%20Animation/Shopify-Returns-Management-App-Demo-Video-by-Return-Logic.webm"  
            playing />
        )
    }
}

export default Video;