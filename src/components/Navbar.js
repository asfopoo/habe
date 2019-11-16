
import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

//------------------------------[Import Icons]-------------------------------
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import {Link} from "react-router-dom";




class Navbar extends Component {

  render(){
    return(


        <BottomNavigation>
            <BottomNavigationAction label="home" value="home" icon={<HomeIcon />} href={"/"} />
            <BottomNavigationAction label="search" value="search" icon={<SearchIcon />} href={"/search"} />
            <BottomNavigationAction label="upload" value="upload" icon={<AddCircleIcon />} href={"/upload"}/>
            <BottomNavigationAction label="notifcations" value="notifications" icon={<NotificationsIcon />} href={"/notifications"} />
            <BottomNavigationAction label="profile" value="profile" icon={<PersonIcon />} href={"/profile"} />
        </BottomNavigation>


    )
}
}
export default Navbar;
