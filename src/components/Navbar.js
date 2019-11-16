
import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

//------------------------------[Import Icons]-------------------------------
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';



class Navbar extends Component {
    render() {
        return (
            <BottomNavigation>
                <BottomNavigationAction label="home" value="home" icon={<HomeIcon />} />
                <BottomNavigationAction label="search" value="search" icon={<SearchIcon />} />
                <BottomNavigationAction label="upload" value="upload" icon={<AddCircleIcon />} />
                <BottomNavigationAction label="notifcations" value="notifications" icon={<NotificationsIcon />} />
                <BottomNavigationAction label="profile" value="profile" icon={<PersonIcon />} />
            </BottomNavigation>
        );
    }
}

export default Navbar;