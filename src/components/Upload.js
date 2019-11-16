import React, { Component } from 'react';
import Navbar from "./Navbar";
import VideoRecorder from 'react-video-recorder'

class Upload extends React.Component{
    render(){
        let vidRecordStyle ={
            position: 'fixed',
            right: '0',
            bottom: '0',
            minWidth: '100%',
            height: '100%',
            zIndex: '0'
        }
        return(
            <div style={vidRecordStyle}>
              <Navbar />
                <VideoRecorder />
                <button>hi</button>
            </div>
        )
    }
}

export default Upload