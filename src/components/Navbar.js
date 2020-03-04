import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';

const styles = {
      width: '100%',
      position: 'fixed',
      bottom: 0,
      margin: '0 auto',
      zIndex: 1
  };

class Navbar extends Component {

  render(){
    return(
        <BottomNavigation style={styles}>
            <BottomNavigationAction label="home" value="home" icon={<HomeIcon fontSize="large"/>} href={"/home"} />
            <BottomNavigationAction label="Interests" value="Interests" icon={<SearchIcon fontSize="large"/>} href={"/Interests"} />
            <BottomNavigationAction label="upload" value="upload"  icon={<AddCircleIcon fontSize="large" color="primary" />} href={"/upload"}/>
            <BottomNavigationAction label="Notifications" value="Notifications" icon={<FavoriteIcon fontSize="large"/>} href={"/Notifications"} />
            <BottomNavigationAction label="profile" value="profile" icon={<PersonIcon fontSize="large"/>} href={"/profile"} />
        </BottomNavigation>
    )
}
}
export default Navbar;
