import React, { useEffect,useState }  from 'react'
import { useDispatch, useSelector } from "react-redux";
// import ProductEdit from "./ProductEdit";
import { PostCard,UserPostItem} from "../components/PostProduct";
import { BoldText } from "assets/GlobalLayoutStyle";
import List from "@material-ui/core/List";
import { addUserPost } from "../reducks/posts/operations";
import { getUserPosts } from "../reducks/posts/postSlice";
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import { makeStyles } from "@material-ui/core/styles";
import { getUserAvatar, getUserId } from "../reducks/users/userSlice";
import {POST} from "types/posts"

// import Carousel from 'react-material-ui-carousel'
const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        maxWidth: 512,
        width: '100%'
    },
}));


const UserPost = () => {
  const classes = useStyles();
  const dispatch = useDispatch()

const posts:POST[] = useSelector(getUserPosts);
  const uid = useSelector(getUserId)

  useEffect(() => {
  dispatch(addUserPost(uid))
  }, [])

console.log(posts)
  return (
    <section className="c-section-wrapin">

      <div className="u-text__headline">
        <List className={classes.root}>
        {posts.length > 0 ?
          posts.map((post) => (
            <UserPostItem key={post.id}
           post={post}
            />
          )
          )
          : <div className="center none_post"><SentimentDissatisfiedOutlinedIcon/><BoldText>投稿はまだありません</BoldText></div>
        }
       </List>
      </div>

 </section>
  )
}

export default UserPost
