import React from 'react'
import{Paper, Typography, makeStyles, Divider } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      maxWidth: '300px',
    },
  }));


export default function Information(){
    const classes = useStyles();

    return(
        <div>
        <Paper className={classes.root}>
            <Typography variant="h4" component="h3">
                Easy Frosting for cupcakes
            </Typography>
            <Divider />
            <Typography component="p">
            Cream the butter and sugar. Place them in a medium bowl and use a mixer to cream the butter 
            and sugar until the mixture becomes light and fluffy, about two minutes. 
            Scrape down the sides of the bowl every once in a while to make sure all 
            the butter and sugar are in.
            </Typography>
            <Typography component="p">
            Mix in the vanilla and cream. Add the vanilla and cream to the bowl and 
            mix them in thoroughly with your electric mixer.
            </Typography>
            <Typography component="p">
            Beat the mixture for three minutes. This will help you achieve the right light, 
            fluffy, spreadable texture you want for your cupcake frosting. Keep beating 
            until the frosting is slightly stiff.
            </Typography>
        </Paper>
        </div>
    )
}