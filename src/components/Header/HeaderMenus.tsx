import React,{useEffect} from 'react'
import IconButton from "@material-ui/core/IconButton"
import  Badge  from "@material-ui/core/Badge"
// import { fetchProductsInCart } from "../../reducks/users/operations"
import { useSelector, useDispatch } from "react-redux"
import {makeStyles,createStyles} from '@material-ui/core/styles';
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import SearchIcon from "@material-ui/icons/Search";
import { getUserId } from "../../reducks/users/userSlice";
import {getPostsInFavorite} from "../../reducks/users/userSlice"
import { fetchPostsInFavorite} from "../../reducks/users/operations";
import MenuIcon from "@material-ui/icons/Menu"
import { SearchBox } from "../UI";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import {db} from "../../firebase/index"

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



    }),
);


interface PROPS {
  handleDrawerToggle: any
}

const HeaderMenus: React.FC<PROPS> = (props) => {

  const isSP = window.matchMedia('screen and (max-width: 767px)').matches;
  const dispatch = useDispatch()
  const uid = useSelector(getUserId)
  const classes = useStyles()
    const likesPost = useSelector(getPostsInFavorite)
  let postInFavorite: string[] =  []

  console.log(postInFavorite)

   useEffect(() => {
    db.collection("users").doc(uid).collection("likes").onSnapshot((snapshot) => {
    snapshot.docChanges().forEach(change=>{
      const post: any = change.doc.data()
      console.log(post)

      const changeType = change.type;
      switch(changeType){
        case "added":
          // Object.preventExtensions(postInFavorite)

            postInFavorite.push(post)

          break;
        case "modified":
          const index = postInFavorite.findIndex((post:any) => post.likesId === change.doc.id)
          postInFavorite[index] = post
          break;
        case "removed":
          postInFavorite = postInFavorite.filter((post:any) => post.likesId !== change.doc.id);
          break;
          default:
              break;
      }

    })
      dispatch(fetchPostsInFavorite(postInFavorite))

  })

}, []);
  return (
    <div className={classes.headerMenu}>
             {isSP?
            <>
               <IconButton>
              <SearchIcon onClick={ ()=>dispatch(push("/search"))}/>
              </IconButton>
              </>
          :
<SearchBox fullWidth={true} style/>
 }
      <IconButton onClick={()=>dispatch(push("/push"))}>
           <Badge badgeContent="1"color="error">
                  <NotificationsNoneIcon/>
        </Badge>
      </IconButton>
      <div className="mobile_only" >
            <IconButton onClick={()=>dispatch(push("/likes"))}>
           <Badge badgeContent={likesPost && likesPost.length} color="error">
                  <FavoriteBorderIcon/>
        </Badge>
        </IconButton>
        </div>
      <IconButton  onClick = {(event)=>props.handleDrawerToggle(event)}>
        <MenuIcon/>
      </IconButton>
    </div>
  )
}

export default HeaderMenus
