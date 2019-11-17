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
                <Favorite color={'secondary'}/>
              </ListItemIcon>
          </ListItem>
          <ListItem href={"/information"}>
              <ListItemIcon>
                <Info color={'primary'} />
              </ListItemIcon>
          </ListItem>
          <ListItem>
              <ListItemIcon>
                <QuestionAnswer color={'error'} />
              </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}