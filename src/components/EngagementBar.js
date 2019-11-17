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
    border: '0!important',
  },
}))

export default function EngagementBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
          },
        }}
      >
        <List>
          <ListItem>
              <ListItemIcon>
                <Favorite color={'primary'}/>
              </ListItemIcon>
          </ListItem>
          <ListItem>
              <ListItemIcon>
                <Info color={'action'}/>
              </ListItemIcon>
          </ListItem>
          <ListItem>
              <ListItemIcon color={'disabled'} href={"/information"}>
                <QuestionAnswer />
              </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}