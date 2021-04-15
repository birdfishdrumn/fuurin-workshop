import React from 'react';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {makeStyles} from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import { useDispatch} from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import { FAVORITE } from "types/likes";


const Rank = styled(ListItemAvatar)`
width:100%;
`

const useStyles = makeStyles((theme) => ({
  list: {
    height: 228,
    background: "white",
    // padding: "20px 0 20px 0",
    cursor: "pointer",
    '&:hover': {
      background: "#eee",
      transition: "0.5s"
    },
  },
  listContent: {
    display: "column",
    // margin:"0 auto"
    marginLeft: "30px",
    width: "80%"
  },
  avatarContent: {
    display: "flex"
  },
  image: {
    objectFit: "cover",
    margin: 16,
    height: 126,
    width: 126,
    cursor: "pointer",
    borderRadius: "10%"
  },
  text: {
    width: "100%",
    fontSize: "1.3rem",
  },
  username: {
    fontSize: "15px",
    color: "grey",
    marginLeft: "5px"
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
}));


const FavoriteListItem: React.FC<Partial<FAVORITE>> = ({post}) => {
  const classes = useStyles()
  const dispatch = useDispatch();
  const name = post.name;
  const username = post.username;
  const image = post.images[0].path;
  const id = post.id;

  return (
    <>
      <ListItem className={classes.list}  onClick={()=>dispatch(push(`/post/${id}`))}>
        <div>
        <Rank>
            <img className = {classes.image} src={image} alt="作品画像"/>
        </Rank>
        </div>
         <div className={classes.listContent}>
          <div className={classes.avatarContent}>
                 <Avatar src={post.avatar} aria-label="recipe" className={classes.small}/>
         <p className={classes.username}>{username}</p>
          </div>

        <div className={classes.text}>
          {name}
          </div>
        </div>
      </ListItem>
      <Divider/>
    </>

  )
}

export default FavoriteListItem
