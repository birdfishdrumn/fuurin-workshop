import React from 'react';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {makeStyles} from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import {useSelector,useDispatch} from "react-redux";
import {getIsSignedIn} from "reducks/users/userSlice";
import { push } from "connected-react-router";
import styled from "styled-components";
import { dialogOpenAction } from "reducks/dialog/dialogSlice";
import { USER } from "types/user";

const Rank = styled(ListItemAvatar)`
width:100%;
`

const useStyles = makeStyles((theme) => ({
  list: {
    height: 208,
    background: "white",
    // margin: "30px 0 30px 0",
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
  username: {
    fontSize: "1.3rem",
    color: "black",
    marginLeft: "5px"
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginRight: theme.spacing(1),
  },
}));

interface PROPS {
  user:USER
};

const UserPopulationList:React.FC<PROPS> = ({user}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const isSignedIn = useSelector(getIsSignedIn);
  const username = user.username;
  const id = user.uid;

  return (

    <>
      <ListItem className={classes.list} onClick={()=>isSignedIn ? dispatch(push(`/users/${id}`)) : dispatch(dialogOpenAction({type:"signin",title:"ログイン"}))}>
        <div >
          <Rank>
            <Avatar src={user.avatar} aria-label="recipe" className={classes.large}/>
            </Rank>
            </div>
            <div className={classes.listContent}>
            <div className={classes.avatarContent}>

          <p className={classes.username}>{username}</p>
            </div>
          </div>

      </ListItem>
      <Divider/>
    </>

  )
}

export default UserPopulationList
