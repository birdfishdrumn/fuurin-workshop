import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from "react-redux";
import { UserPostItem} from "../../components/PostProduct";
import { BoldText,SectionWrapper,Title } from "assets/GlobalLayoutStyle";
import List from "@material-ui/core/List";
import { addUserPost } from "../../reducks/posts/operations";
import { getUserPosts } from "../../reducks/posts/postSlice";
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import { makeStyles } from "@material-ui/core/styles";
import { getUserId } from "../../reducks/users/userSlice";
import {POST} from "types/posts"

const useStyles = makeStyles(() => ({
    root: {
        margin: '0 auto',
        maxWidth: 512,
        width: '100%'
    },
}));

const UserPost = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts:POST[] = useSelector(getUserPosts);
  const uid = useSelector(getUserId);

  useEffect(() => {
    dispatch(addUserPost(uid))
  }, []);

  return (
    <SectionWrapper>


        <Title>作品の編集・削除</Title>
        <List className={classes.root}>
        {posts.length > 0 ?
          posts.map((post) => (
            <UserPostItem key={post.id}
           post={post}
            />
          ))
          : <div className="center none_post"><SentimentDissatisfiedOutlinedIcon/><BoldText>投稿はまだありません</BoldText></div>
        }
       </List>

   </SectionWrapper>
  )
}

export default UserPost
