import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from "react-redux"
import { push } from "connected-react-router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin:"20px auto",
      width: '100%',
      maxWidth: '700px',
      backgroundColor: theme.palette.background.paper,
       boxShadow: "0 0px 10px rgba(0,0,0,0.2)",
      cursor:"pointer"
    },
     large: {
      width: theme.spacing(10),
      height: theme.spacing(10),

    },
    inline: {
      display: 'inline',
    },
    list: {
      marginLeft: "20px",
      fontWeight:"bold"
    }
  }),
);

export default function FavoriteUser({avatar,username,profile,uid}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <List className={classes.root} onClick={()=>dispatch(push("/users/" + uid))}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar className={classes.large} alt="Remy Sharp" src={avatar}/>
        </ListItemAvatar>
        <ListItemText
          className={classes.list}
          primary={username}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
             {profile}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
