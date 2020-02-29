import React from 'react'
import {
    Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from '../../components/Navbar';


const useStyles = makeStyles({
    card: {
      minWidth: 300,
      marginBottom: 20
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});


export default function Notification(){
    const classes = useStyles();

    return(
      <div>
        <Navbar />
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center">
        <Card className={classes.card}>
        <CardContent>
            <Typography variant="h5" component="h2" color={'primary'}>
            Happy Baker posted a new video
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            4:45pm
            </Typography>
            <Typography variant="body2" component="p">
            In this video I show you five tips to make the best icing in the world
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Watch</Button>
        </CardActions>
        </Card>
        <Card className={classes.card}>
        <CardContent>
            <Typography variant="h5" component="h2" color={'primary'}>
            Muscle Man posted a new video
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            3:35pm
            </Typography>
            <Typography variant="body2" component="p">
            In this video I show you how to make a Muscle
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Watch</Button>
        </CardActions>
        </Card>
        <Card className={classes.card}>
        <CardContent>
            <Typography variant="h5" component="h2" color={'primary'}>
            RC Plane Person posted a new video
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            2:31pm
            </Typography>
            <Typography variant="body2" component="p">
            In this video I show you how to fix a broken motor on your rc plane
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Watch</Button>
        </CardActions>
        </Card>
        <Card className={classes.card}>
        <CardContent>
            <Typography variant="h5" component="h2" color={'primary'}>
            Gymnastic Person posted a new video
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            12:22pm
            </Typography>
            <Typography variant="body2" component="p">
            In this video I show you how to do a cartwheel
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Watch</Button>
        </CardActions>
        </Card>
        </Grid>
      </div>
    )
}
