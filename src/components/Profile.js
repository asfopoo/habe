import React, { Component } from 'react';
import Navbar from "./Navbar";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {Typography, Button, CardActionArea} from '@material-ui/core';
import { Grid } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '350px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  media: {
    height: 0,
    paddingTop: '70%', // 16:9
  },
  cardContent: {
      background: "transparent",
  },
}));



export default function Profile() {
  const classes = useStyles();
    return(
      <div>
        <Navbar> </Navbar>
        <Card className={classes.card}>
         <CardMedia
        className={classes.media}
        image="https://www.joyofbaking.com/images/facebook/chocolatecupcakes.jpg"
        title="Cupcake"
      />
      <CardHeader
        avatar={
            <Avatar alt="picture of creator" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className={classes.bigAvatar} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Stacy Dash"
        subheader="Cupcake Conosoiur"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
           I love cupcakes, baking, and learning about new baking techniques
        </Typography>
      </CardContent>
      <CardActions>
        <Typography component="p" style={{ color: '#6200EE'}}>
           12.5K Followers
        </Typography>
        <Button size="large" color="default" style={{ color: '#6200EE', marginLeft: '6em'}}>
           Follow
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.card} style={{ backgroundColor: 'transparent'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Cupcakes"
          height="200"
          image="http://lilliandarnell.com/wp-content/uploads/2015/08/wpid-cupcakes.jpg"
          title="Cupcakes"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            Sweet Winter Treats
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The ice frosting cupcakes are a hit!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card} style={{ backgroundColor: 'transparent'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Cupcakes"
          height="200"
          image="https://www.lifeloveandsugar.com/wp-content/uploads/2017/04/Berries-And-Cream-Cupcakes3.jpg"
          title="Cupcakes"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            Strawberry Yummies
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Delicious and nutritious.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </div>
    )
}