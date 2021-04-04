import React,{useEffect,useState,useCallback} from 'react'
import IconButton from "@material-ui/core/IconButton"
import  Badge  from "@material-ui/core/Badge"
// import { fetchProductsInCart } from "../../reducks/users/operations"
import { useSelector, useDispatch } from "react-redux"
import {makeStyles,createStyles} from '@material-ui/core/styles';
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import SearchIcon from "@material-ui/icons/Search";
import { getIsSignedIn, getUserId } from "../../reducks/users/userSlice";
import {getPostsInFavorite} from "../../reducks/users/userSlice"
import { fetchPostsInFavorite} from "../../reducks/users/operations";
import MenuIcon from "@material-ui/icons/Menu"
import { SearchBox } from "../UI";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { db } from "../../firebase/index"
import PushList from "./PushList"
import Popover from '@material-ui/core/Popover';
import { PopperWrapper}from "./style"
import { push } from "connected-react-router";


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
   paddingBottom:0,
   paddingTop:0,
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
          justifyContent:"center",
            display: 'flex',
            marginRight: 32,
          textAlign: "center",
           position: 'relative',
          width: 500,
          borderRadius:20,
            focus:500
    },
          popRoot: {
      width: 500,
    },
    typography: {
      padding: theme.spacing(2),
    },





    }),
);


interface PROPS {
  handleDrawerToggle: any
}

const HeaderMenus: React.FC<PROPS> = (props) => {

  const isSP = window.matchMedia('screen and (max-width: 767px)').matches;
  const dispatch = useDispatch()
  const uid = useSelector(getUserId)
  const isSignedIn =useSelector(getIsSignedIn)
  const classes = useStyles()
    const likesPost = useSelector(getPostsInFavorite)
  let postInFavorite: string[] = []
    // const [open, setOpen] = useState<boolean>(false)

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [pushLength,setPushLength] = useState<number>(0)

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;



  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(postInFavorite)

  useEffect(() => {
    if (isSignedIn) {
      db.collection("users").doc(uid).collection("likes").onSnapshot((snapshot) => {

        snapshot.docChanges().forEach(change => {
          const post: any = change.doc.data()
          console.log(post)

          const changeType = change.type;
          switch (changeType) {
            case "added":
              // Object.preventExtensions(postInFavorite)

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

    }
  }, []);

  useEffect(() => {
    db.collection("message").where("check", "==", false).onSnapshot((snapshot) => {
     setPushLength(snapshot.size)
    })
  }, [])

  return (
    <div className={classes.headerMenu}>
           <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <PopperWrapper>
          <PushList  handleClose={handleClose}/>
      </PopperWrapper>
      </Popover>


               <IconButton>
              <SearchIcon style={{fontSize:"30px"}} onClick={ ()=>dispatch(push("/search"))}/>
              </IconButton>


      {isSignedIn &&
        <>
            <IconButton onClick={handleClick}>
           <Badge badgeContent={pushLength && pushLength} color="error">
                  <NotificationsNoneIcon style={{fontSize:"28px"}}/>
        </Badge>
      </IconButton>
      <div className="mobile_only" >
            <IconButton onClick={()=>dispatch(push("/likes"))}>
           <Badge badgeContent={likesPost && likesPost.length} color="error">
                  <FavoriteBorderIcon style={{fontSize:"28px"}}/>
        </Badge>
        </IconButton>
        </div>
      <IconButton  onClick = {(event)=>props.handleDrawerToggle(event)}>
        <MenuIcon style={{fontSize:"28px"}}/>
        </IconButton>
        </>


      }

    </div>
  )
}

export default HeaderMenus
