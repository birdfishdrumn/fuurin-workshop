import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { AddPostModal } from '../UI/index';
import { getUserAvatar } from 'reducks/users/userSlice';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 999,
    [theme.breakpoints.down('sm')]: {
      // maxWidth: "100%",
      position: 'fixed !important',
      bottom: 0,
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    button: {
      padding: 0,
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  action: {
    minWidth: 40,
    padding: '6px',
  },
}));

const BottomNavigator = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = React.useState(0);
  const avatar = useSelector(getUserAvatar);
  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="ホーム"
          className={classes.action}
          onClick={() => dispatch(push('/timeline'))}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="検索"
          className={classes.action}
          onClick={() => dispatch(push('/search'))}
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          label="投稿"
          className={classes.action}
          onClick={() => handleClickOpen()}
          icon={<AddIcon />}
        />
        <BottomNavigationAction
          label="お気に入り"
          className={classes.action}
          onClick={() => dispatch(push('/likes'))}
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          className={classes.action}
          onClick={() => dispatch(push('/user/mypage'))}
          icon={<Avatar className={classes.small} src={avatar} />}
        />
      </BottomNavigation>
      <AddPostModal open={open} handleClose={handleClose} />
    </>
  );
};

export default BottomNavigator;
