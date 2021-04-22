import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import HelpIcon from '@material-ui/icons/Help';
import { useDispatch } from 'react-redux';
import { dialogOpenAction } from 'reducks/dialog/dialogSlice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        top: 'auto',
        right: 10,
        bottom: 70,
        left: 'auto',
        position: 'fixed',
        zIndex: 999,
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  })
);

interface PROPS {
  type: string;
  name: string;
}

const FloatingActionButtons: React.FC<PROPS> = ({ type, name }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab
        onClick={() => dispatch(dialogOpenAction({ type: type, title: name }))}
        color="inherit"
        aria-label="add"
      >
        <HelpIcon style={{ fontSize: '30px' }} />
      </Fab>
    </div>
  );
};

export default FloatingActionButtons;
