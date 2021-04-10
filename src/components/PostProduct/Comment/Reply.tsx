import React,{useEffect,memo} from 'react'
import {
  db
} from "firebase/index"
import Avatar from '@material-ui/core/Avatar';
import { COMMENT } from "types/comment";
import { PostComment, PostCommentIcon, PostCommentLength, PostCommentUser, PostCommentText,CommentTime } from "./style"
import moment from 'moment'  // #1
import 'moment/locale/ja'
import CommentForm from "./CommentForm"
import { makeStyles ,createStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    small: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    marginRight: theme.spacing(1),
    cursor:"pointer"
  },
}));

interface PROPS {
  id: string;
  replies: COMMENT[];
  replyComment: (comId: any) => (e: any) => Promise<void>;
  setReply: React.Dispatch<React.SetStateAction<string>>
  reply: string;
  avatar: string
  isSignedIn: boolean;
}



const Reply:React.FC<PROPS> = memo(({ id, replies, replyComment, setReply, reply, avatar,isSignedIn}) => {
  console.log(id)
  const classes = useStyles()
  console.log(replies)
  // replies[0].comId === id &&
  return (
    <div>

      {replies.map((rep) =>
        <PostComment reply key={rep.id} >
          <div>
            <Avatar src={rep.avatar} className={classes.small} />

            <PostCommentUser>@{rep.username}さん</PostCommentUser>
            <CommentTime>
              {moment(new Date(rep.timestamp?.toDate()).toLocaleString()).fromNow()}

            </CommentTime>
          </div>

          <PostCommentText>{rep.text} </PostCommentText>

        </PostComment>

      )}
      {isSignedIn &&  <form onSubmit={replyComment(id)} >
        <CommentForm avatar={avatar} setComment={setReply} comment={reply} />
      </form>
      }




      {/* <button onClick={fetchReplyComment(com.id)}>ff</button> */}
    </div>
  )
});

export default Reply
