import React from 'react';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {makeStyles} from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import IconButton from "@material-ui/core/IconButton";
import {useSelector,useDispatch} from "react-redux";
import {getUserId} from "reducks/users/userSlice";
import { db } from "../../firebase/index"
import {push } from "connected-react-router"
import styled from "styled-components"


const Rank = styled(ListItemAvatar)`
width:100%;
`

const useStyles = makeStyles((theme) => ({
  list: {
    height: 168,
    background: "white",
    margin: "20px 0 20px 0",
  },
  listContent: {
    display: "column",
    // margin:"0 auto"
    marginLeft: "30px",
    width:"80%"
  },
  avatarContent: {
     display : "flex"
  },
  image: {
    objectFit: "cover",
    margin: 16,
    height: 126,
    width: 126,
    cursor: "pointer",
    borderRadius:"10%"
  },
  text: {
    width: "100%",
    fontSize: "1.3rem",


  },
  username:{
    fontSize: "15px",
    color: "grey",
    marginLeft:"5px"
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
}))

const FavoriteListItem = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const uid = useSelector(getUserId)
  const name = props.post.name
  const username = props.post.username

  const image = props.post.images[0].path;
const id = props.post.id
  console.log(id);
  const removePostFromFavorite = (id) => {
    return db.collection("users").doc(uid)
      .collection('likes').doc(id)
    .delete()
}

  return (


    <>

      <ListItem className={classes.list}>
        <div onClick={()=>dispatch(push(`/post/${id}`))}>
        <Rank>
            <img className = {classes.image} src={image} alt="作品画像"/>
          </Rank>
          </div>
        <div className={classes.listContent}>
          <div className={classes.avatarContent}>
                 <Avatar src={props.post.avatar} aria-label="recipe" className={classes.small}/>
         <p className={classes.username}>{username}</p>
          </div>

        <div className={classes.text}>

          {name}

          </div>
          </div>
        {/* props.post.likesIdは削除する商品のid */}

      </ListItem>
      {/* <Divider/> */}
    </>

  )
}

export default FavoriteListItem
