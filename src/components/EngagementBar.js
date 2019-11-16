import React from 'react';
import { 
    makeStyles, 
    Drawer, 
    List,
    ListItem,
    ListItemIcon,
    Typography,
} from '@material-ui/core';
import {
  Favorite,
  Info,
  QuestionAnswer,
} from '@material-ui/icons'



const drawerWidth = 25;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    border: '0!important',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    border: '0!important',
  },
  drawerPaper: {
    width: drawerWidth,
    background: 'transparent',
    border: '0!important',
  },
  MuiDrawerPaperAnchorDockedLeft: {

    border: '0!important',
  }
}))

export default function Drawery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
              <ListItemIcon>
                <Favorite />
              </ListItemIcon>
          </ListItem>
          <ListItem>
              <ListItemIcon>
                <Info />
              </ListItemIcon>
          </ListItem>
          <ListItem>
              <ListItemIcon>
                <QuestionAnswer />
              </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}