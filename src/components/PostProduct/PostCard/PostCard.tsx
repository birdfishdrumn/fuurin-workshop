import React,{useState,useCallback,useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Avatar from '@material-ui/core/Avatar';

import CardMedia from "@material-ui/core/CardMedia";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../templates/module.css/Detail.module.css";
import { POST } from "../../../types/posts";
import NoImage from "../../../assets/img/src/no_image.png"
import { push } from "connected-react-router"
import {ProductDialog} from "components/UI/index"
import Favorite from "../Favorite/Favorite"
// import {  LoginModal} from "../UI";
import { addPostToFavorite } from "../../../reducks/users/operations";
import { getUserId, getPostsInFavorite } from "reducks/users/userSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
             display: "inlineBlock"

  },
  content: {
    display: "flex",
   justifyContent:"space-between",
    textAlign: "left",
    "&:last-child": {
      paddingBottom: "16px",
    },
  },
  media: {
    height: 0,
    paddingTop: "100%",
    position: "relative"
  },
  title:{
    marginTop: "8px"
  },
  avatar:{
    position: "absolute",
    top: 5,
    left:5,
    opacity: 0.5,
      "&:hover": {
           opacity: 1
      }
  },
  favorite: {
     position: "absolute",
    top: 3,
    right: 0

  }

}));

const changeStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: "8px",
      width: "200px",
      height: "500px",
         display: "inlineBlock"

    },
    [theme.breakpoints.up("md")]: {
      margin: "10px",
      width: "200px",

    },
    [theme.breakpoints.between("sm", "md")]: {
      margin: 5,
      width: "200px",
    }
  },
  content: {
    display: "flex",
   justifyContent:"space-between",
    textAlign: "left",
    "&:last-child": {
      paddingBottom: "16px",
    },
  },
  media: {
    height: 500,
    width:200,
    paddingTop: "100%",
    position: "relative"
  },

}));



const PostCard:React.FC<POST> = (props) => {
  const classes = useStyles();
  const changeClass = changeStyles()
  const dispatch = useDispatch();
  const uid = useSelector(getUserId)
   const [open,setOpen] =useState(false)
  const id = props.id
  const change =props.change
  const name = props.name
  console.log(props.images)
 const postInFavorite =useSelector(getPostsInFavorite);
console.log(postInFavorite)
  const likesId= postInFavorite.map((post: any) =>
    post.postId)
  const handleChange = () => {

      setOpen(true)
    }



  const images = props.images.length > 0 ? props.images : [{ path: NoImage }];
  const allImages =  props.allImages.length ?  props.allImages : [{ path: NoImage }]

  const [dialogOpen, setDialogOpen] = React.useState(false);


  const handleClickOpen = useCallback(() => {
    setDialogOpen(true);

  },[]);


  const handleClose = useCallback(() => {
    setDialogOpen(false);

  },[]);

  const modalOpen = (id) => {
    props.changeRelation ? props.changeRelation(id) :
        handleClickOpen()

}


  return (
    <div>
 <Card className={change ? changeClass.root : classes.root}>
        <CardMedia
          // 複数登録した画像のうちの最初のものを選択
          className={change ? changeClass.media : classes.media}
          image={change ? allImages[0].path : images[0].path}

          // onClick = {()=>dispatch(push("/post/" + props.id))}
        onClick={()=>modalOpen(props.id)}
        >

          { !props.favorite && !change &&
            <>
              <Avatar src={props.avatar} aria-label="recipe" className={classes.avatar} />
                 <div className={classes.favorite}>

              {<Favorite id={id} uid={uid} likesId={likesId} post={props.post} props="true" />}
            </div>
                  </>}


        </CardMedia>

      </Card>
        {/* {props.images.length >= 2 && <h1>aflfjkaljflka</h1>} */}
      {/* @ts-ignore */}
      <ProductDialog dialogId={props.id} name={name} dialogOpen={dialogOpen} handleClickOpen={handleClickOpen} handleClose={handleClose}/>
      {/* <LoginModal open={open} setOpen={setOpen}/> */}
    </div>
  )
}

export default PostCard
