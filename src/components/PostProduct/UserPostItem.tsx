import React,{useState,useCallback} from 'react';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import  Favorite  from "./Favorite/Favorite";
import { makeStyles } from "@material-ui/core/styles";
import { DeleteDialog } from "../UI";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import {useSelector,useDispatch} from "react-redux";
import { getUserId,getPostsInFavorite } from "../../reducks/users/userSlice";
import {WhiteIcon} from "assets/GlobalLayoutStyle"
import { push } from "connected-react-router"
import { POST } from "types/posts"
import { FAVORITE} from "types/likes"

const useStyles = makeStyles((theme) => ({
  list: {
    height: 128
  },
  image: {
    objectFit: "cover",
    marginRight: 20,
    height: 106,
    width: 106,
    cursor: "pointer"

  },
  media: {
    position: "relative"
  },
  favorite: {
    position: "absolute",
    bottom: -5,
    right: 30,
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      bottom: -5,
      right: -35
    }
  },
  text: {
    width: "100%"
  },
  icon: {
    display: "flex",
    flexDirection: "column"
  }
}));

interface PROPS {
  post: POST;
}

const UserPostItem:React.FC<PROPS> = ({post}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState<boolean>(false);
  const postInFavorite:FAVORITE[] = useSelector(getPostsInFavorite);
  const name = post.name;
  const uid = useSelector(getUserId);
  const image = post.images[0].path;
  const id = post.id;
  const likesPostsArray: string[] = postInFavorite.map(post =>
    post.postId);

  const handleClose = useCallback(() => {
    setOpenModal(false)
  }, [setOpenModal]);

  return (

    <>
      <ListItem className={classes.list}>
        <ListItem className={classes.media}>
          <img  className={classes.image} src={image} alt="作品画像" onClick={()=>dispatch(push(`/post/${id}`))} />
          <div className={classes.favorite}>
            <Favorite id={id} uid={uid} likesPostsArray={likesPostsArray} post={post} />
             </div>
        </ListItem>
          <div className={classes.text}>
            <ListItemText primary={name}  />
          </div>
          {/* post.likesIdは削除する商品のid */}
          <div className={classes.icon}>
             <WhiteIcon noMargin onClick={() =>dispatch(push(`/posts/edit/${id}`))} >
               <EditIcon/>
             </WhiteIcon>
             <WhiteIcon noMargin onClick={()=>setOpenModal(true)} >
               <DeleteIcon/>
            </WhiteIcon>
        </div>
        <DeleteDialog title="作品を本当に削除しますか？" openModal={openModal} handleClose={handleClose} id={id} uid={uid}/>
      </ListItem>
      <Divider/>
    </>

  )
}

export default UserPostItem
