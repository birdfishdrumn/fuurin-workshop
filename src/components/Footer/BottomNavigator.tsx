import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { push } from "connected-react-router"
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
         width: "100%",
    position: "fixed",
    bottom:0
    },
    [theme.breakpoints.up("sm")]: {
    display:"none"

    },
  }
}))


// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//     position: "fixed",
//     bottom:0
//   },
// });

const BottomNavigator =()=> {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch()
  return (
 <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="ホーム"
              onClick={()=>dispatch(push("/"))}
        icon={< HomeIcon />} />
      <BottomNavigationAction label="人気の投稿"
      onClick={()=>dispatch(push("/population"))}
        icon={<ThumbUpIcon />} />
      <BottomNavigationAction label="お気に入り"
           onClick={()=>dispatch(push("/likes"))}
        icon=
        {<FavoriteIcon />} />
      <BottomNavigationAction label="投稿"
             onClick={()=>dispatch(push("/user/mypage"))}
        icon={<PersonIcon />} />
    </BottomNavigation>
  );
}

export default BottomNavigator
