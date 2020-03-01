import React from 'react';
import Navbar from "../../components/Navbar";
import VideoRecorder from 'react-video-recorder'
import styles from './styles';

class Upload extends React.Component{
    render(){
        return(
            <div style={styles.mainContainer}>
              <Navbar />
              <VideoRecorder />
            </div>
        )
    }
}

export default Upload
