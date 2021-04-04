import React from 'react'
import { PostComment, PostCommentIcon, PostCommentForm, PostCommentInput, PostCommentWrapper, CommentTime } from "./style"
import styles from "templates/module.css/Detail.module.css";
import { makeStyles ,createStyles} from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send"
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({

    small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(2),
       marginTop: "5px",
    cursor:"pointer"
  },
}));

interface PROPS {
  comment?: string;
  setComment?: React.Dispatch<React.SetStateAction<string>>
    reply?: string;
  setReply?: React.Dispatch<React.SetStateAction<string>>
  avatar: string;
}

const CommentForm: React.FC<PROPS> = ({ avatar, comment, setComment, reply, setReply }) => {
  const classes = useStyles()
  return (
    <div>
            {/* <form onSubmit={newComment}> */}
      <PostCommentForm>
          <Avatar src={avatar} className={classes.small}/>
            <PostCommentInput
              type="text"
              placeholder="コメントを入力。"
              value={comment }
              onChange={(e)=>
                setComment(e.target.value)
              }
            />
            <button
              disabled={!comment}
              className={
                comment ? styles.post_button : styles.post_buttonDisable
                 }
              type="submit"
>
            <SendIcon/>
            </button>
        </PostCommentForm>
        {/* </form> */}
    </div>
  )
}

export default CommentForm
