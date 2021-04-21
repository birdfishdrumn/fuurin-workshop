import React,{useEffect,useState} from 'react'
import IconButton from "@material-ui/core/IconButton"
import  Badge  from "@material-ui/core/Badge"
import { useSelector, useDispatch } from "react-redux"
import {makeStyles,createStyles} from '@material-ui/core/styles';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import SearchIcon from "@material-ui/icons/Search";
import { getUserId,getUserAvatar } from "reducks/users/userSlice";
import { getPostsInFavorite } from "reducks/users/userSlice";
import { fetchPostsInFavorite} from "reducks/users/operations";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { db } from "firebase/index";
import Tooltip from '@material-ui/core/Tooltip';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import BrushIcon from '@material-ui/icons/Brush';
import { push } from "connected-react-router";
import Avatar from '@material-ui/core/Avatar';
import {PopOver} from "components/UI/index";



const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 500,
      backgroundColor: theme.palette.background.paper,
      position: 'absolute',
      overflow: 'auto',
      top: 60,
      // left: 500,
      paddingBottom: 0,
      paddingTop: 0,
      maxHeight: 300,
      cursor: "pointer",

    },
    searchText: {
      '&:hover': {
        background: "#eee",
      },
    },
    headerMenu: {
      display: 'flex',
    },
    searchField: {
      alignItems: 'center',
      justifyContent: "center",
      display: 'flex',
      marginRight: 32,
      textAlign: "center",
      position: 'relative',
      width: 500,
      borderRadius: 20,
      focus: 500
    },
    popRoot: {
      width: 500,
    },
    typography: {
      padding: theme.spacing(2),
    },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  }),
);

interface PROPS {
  handleDrawerToggle: any
}

const HeaderMenus: React.FC<PROPS> = (props) => {
  const dispatch = useDispatch();
  const uid = useSelector(getUserId);
  const avatar = useSelector(getUserAvatar);
  const classes = useStyles();
  const likesPost = useSelector(getPostsInFavorite);
  let postInFavorite: string[] = [];

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [type, setType] = useState("");
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  const handleClick = (type:string)=>(event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setType(type)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  useEffect(() => {
      const unSub = db.collection("users").doc(uid).collection("likes").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach(change => {
          const post: any = change.doc.data()
          const changeType = change.type;
          switch (changeType) {
            case "added":
              postInFavorite.push(post)
              break;
            case "modified":
              const index = postInFavorite.findIndex((post: any) => post.likesId === change.doc.id)
              postInFavorite[index] = post
              break;
            case "removed":
              postInFavorite = postInFavorite.filter((post: any) => post.likesId !== change.doc.id);
              break;
            default:
              break;
          }
        })
        dispatch(fetchPostsInFavorite(postInFavorite))
      })
    return () => {
      unSub()
    }
  }, []);


  return (
    <div className={classes.headerMenu}>

      <PopOver open={open} anchorEl={anchorEl} handleClose={handleClose} id={id} type={type}/>

        <Tooltip title="絵の描き方" interactive>
          <IconButton onClick={()=>dispatch(push("/dojo"))}>
                  <BrushIcon style={{fontSize:"25px"}}/>
          </IconButton>
        </Tooltip>
        <Tooltip title="検索" interactive>
        <IconButton>
              <SearchIcon style={{fontSize:"30px"}} onClick={ ()=>dispatch(push("/search"))}/>
        </IconButton>
        </Tooltip>
        <Tooltip title="お知らせ" interactive>
            <IconButton onClick={handleClick("push")}>

                  <NotificationsNoneIcon style={{fontSize:"25px"}}/>

          </IconButton>
        </Tooltip>

      <div className="mobile_only" >

        <Tooltip title="作品の登録" interactive>
            <IconButton onClick={ ()=>dispatch(push("/posts/edit"))}>

                  <AddCircleIcon style={{fontSize:"25px"}}/>

          </IconButton>
        </Tooltip>
        <Tooltip title="お気に入り" interactive>
          <IconButton onClick={() => dispatch(push("/likes"))}>

          <Badge badgeContent={likesPost && likesPost.length} color="error">
                  <FavoriteBorderIcon style={{fontSize:"25px"}}/>
              </Badge>

          </IconButton>
        </Tooltip>
        <Tooltip title="プロフィール" interactive>
          <IconButton onClick={handleClick("profile")}>
          <Avatar className={classes.small} src={avatar} />
            </IconButton>
        </Tooltip>
        </div>

      <IconButton  onClick = {(event)=>props.handleDrawerToggle(event)}>
        <MenuIcon style={{fontSize:"25px"}}/>
        </IconButton>
    </div>
  )
}

export default HeaderMenus
