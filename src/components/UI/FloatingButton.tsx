import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import HelpIcon from '@material-ui/icons/Help';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
            top: 'auto',
    right: 20,
    bottom: 80,
    left: 'auto',
   position: 'fixed',
    zIndex:999
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }),
);

export default function FloatingActionButtons() {

 const style = {

    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
   position: 'fixed',
    zIndex:999

  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="inherit" aria-label="add">
        <HelpIcon style={{fontSize:"30px"}} />
      </Fab>
    </div>
  );
}
