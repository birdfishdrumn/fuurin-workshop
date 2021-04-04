import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import { push } from "connected-react-router"
import { useDispatch } from "react-redux";
import { AddPostModal } from "../UI/index";
import { getUserAvatar } from "reducks/users/userSlice";
import {useSelector} from "react-redux"

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex:999,
    [theme.breakpoints.down("sm")]: {
         maxWidth: "100%",
    position: "fixed !important",
      bottom: 0,
          width: "100%"

    },
    [theme.breakpoints.up("sm")]: {
    display:"none"

    },
  },
     small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
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
    const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = ():void => {
    setOpen(true);
  };
  const avatar = useSelector(getUserAvatar);
  console.log(avatar)
  const handleClose = ():void => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch()
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
      <BottomNavigationAction label="ホーム"
              onClick={()=>dispatch(push("/"))}
        icon={< HomeIcon />} />
      <BottomNavigationAction label="検索"
      onClick={()=>dispatch(push("/search"))}
        icon={<SearchIcon />} />
       <BottomNavigationAction label="投稿"
      onClick={()=>handleClickOpen()}
        icon={<AddIcon />} />
      <BottomNavigationAction label="お気に入り"
           onClick={()=>dispatch(push("/likes"))}
        icon=
        {<FavoriteIcon />} />
      <BottomNavigationAction
             onClick={()=>dispatch(push("/user/mypage"))}
          icon={<Avatar className={classes.small} src={avatar}/>} />
      </BottomNavigation>
      <AddPostModal open={open} handleClose={handleClose}/>
      </>
  );
}

export default BottomNavigator
