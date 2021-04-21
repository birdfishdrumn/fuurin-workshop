import React, { memo } from 'react';
import { COMMENT } from "types/comment";
import { PostComment, PostCommentUser, PostCommentText, CommentTime,CommentMenu} from "./style";
import moment from 'moment'; // #1
import 'moment/locale/ja';
import {Menu} from "components/UI/index"
import CommentForm from "./CommentForm";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';

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
  postId: string;
  replies: COMMENT[];
  replyComment: (comId: any) => (e: any) => Promise<void>;
  setReply: React.Dispatch<React.SetStateAction<string>>
  reply: string;
  avatar: string
  isSignedIn: boolean;
}



const Reply:React.FC<PROPS> = memo(({ id, postId,replies, replyComment, setReply, reply, avatar,isSignedIn}) => {
  const classes = useStyles()
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
          <CommentMenu>
            {isSignedIn && <Menu type="report" content={{ postId: postId, id: id }} id={rep.id} />}
          </CommentMenu>
          <PostCommentText>{rep.text} </PostCommentText>

        </PostComment>

      )}
      {isSignedIn &&  <form onSubmit={replyComment(id)} >
        <CommentForm avatar={avatar} setComment={setReply} comment={reply} />
      </form>
      }

    </div>
  )
});

export default Reply
