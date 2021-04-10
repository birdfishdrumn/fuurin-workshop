import React, { useState, useEffect, useCallback,memo } from 'react'
import Avatar from '@material-ui/core/Avatar';
import {
  db
} from "../../../firebase/index"
import firebase from "firebase/app"
import { getIsSignedIn } from "reducks/users/userSlice";
import { makeStyles ,withStyles} from "@material-ui/core/styles";
import {useDispatch,useSelector} from "react-redux"
import {push } from "connected-react-router"
import { PostComment, PostCommentIcon, PostCommentLength, PostCommentUser, PostCommentText, PostCommentForm, PostCommentInput, PostCommentWrapper,CommentTime,DeleteComment } from "./style"
import Divider from '@material-ui/core/Divider';
import { COMMENT } from "types/comment";
import moment from 'moment'  // #1
import 'moment/locale/ja'
import { StyledBoldText } from 'assets/GlobalLayoutStyle';
import CommentForm from "./CommentForm"
import Button from "@material-ui/core/Button"
import Reply from "./Reply"
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { dialogOpenAction } from "reducks/dialog/dialogSlice";

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor:"white",
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 36,
    '&$expanded': {
      minHeight: 36,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);


const useStyles = makeStyles((theme) => ({

    small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
    cursor:"pointer"
  },
}));

interface PROPS {
  id: string;
  username: string;
  avatar: string;
  uid: string;
  postUid: string;
}

const Comment: React.FC<PROPS> = memo(({ id, avatar,username, uid, postUid }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
    const [expanded, setExpanded] = React.useState<string | false>( "");
  const isSignedIn = useSelector(getIsSignedIn)
  const [comment, setComment] = useState<string>("");
   const [reply, setReply] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const [comments, setComments] = useState<COMMENT[]>([
    {
      id: "",
      avatar: "",
      text: "",
      username: "",
      timestamp: null,
      uid: ""
    },
  ]);
     const [replies,setReplies] = useState<COMMENT[]>([
    {
      id: "",
      avatar: "",
      text: "",
      username: "",
      timestamp: null,
      uid: "",
      comId:""
    },
  ])


  console.log("reo",reply)
  const comRef = db.collection("posts").doc(id).collection("comments")
  useEffect(() => {
    if (id) {
      const unSub = comRef
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {

          setComments(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              uid: doc.data().id,
              avatar: doc.data().avatar,
              text: doc.data().text,
              reply:doc.data().reply,
              timestamp: doc.data().timestamp,
              username: doc.data().username,
              comId:doc.data().comId,

            } as COMMENT))
          )

        })
      return () => {
        unSub()
      }
    }
  }, [id])

    const fetchReplyComment = (comId) => {
  return async (dispatch) => {
  // setReplyOpen(!replyOpen)
          // dispatch(showLoadingAction("Loading"))
     await comRef.doc(comId).collection("reply").orderBy("timestamp", "asc")
       .onSnapshot((snapshot) => {
          setReplies(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              uid: doc.data().id,
              avatar: doc.data().avatar,
              text: doc.data().text,
              timestamp: doc.data().timestamp,
              username: doc.data().username,
                 comId: doc.data().comId
            } as COMMENT))
          )

       })

  // dispatch(hideLoadingAction());
    }
  }




  const newComment = async (e) => {
    e.preventDefault();
    const comId = comRef.doc().id
    comRef.doc(comId).set({
      avatar: avatar,
      text: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: username,
      id: uid,
      postId: id,
      comId: comId
    } as COMMENT).then(() => {
      setOpen(true)
    }).catch(() => {
      alert("コメントの送信に失敗しました")
    })
    await db.collection("users").doc(uid).set({

      commentId: firebase.firestore.FieldValue.arrayUnion(id)
    }, {
      merge: true
    })
    setComment("");
  }


  const replyComment =(comId)=> async (e) => {
    e.preventDefault();
    const replyRef = await db.collection
      ("posts").doc(id).collection("comments").doc(comId).collection("reply")
    comRef.doc(comId).set({
      reply:true
    },{
      merge:true
    })
    replyRef.add({
      avatar: avatar,
      text: reply,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: username,
      id: uid,
      postId: id,
      comId: comId
    } as COMMENT).then(() => {
      setOpen(true)
    }).catch(() => {
      alert("コメントの送信に失敗しました")
    })
    await db.collection("users").doc(uid).set({

      commentId: firebase.firestore.FieldValue.arrayUnion(id)
    }, {
      merge: true
    })
    setReply("");
  }
  console.log(comments)


  // ----------------コメントを削除------------------
  const deleteComment = (comId) => {
    comRef.doc(comId).delete()
  }

   const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <form onSubmit={newComment}>
        {isSignedIn &&
          <CommentForm avatar={avatar} setComment={setComment} comment={comment} />
        }

          </form>
        <PostCommentLength>
      <PostCommentIcon
            onClick={() => setOpen(!open)}

          />
          <StyledBoldText>
            {comments.length ? <>{comments.length}件のコメントがあります</> : "コメントがまだありません"}
            </StyledBoldText>
              {/* {moment('2018-10-19 13:13:13').fromNow()} */}
        </PostCommentLength>
       {open  && (<PostCommentWrapper>
          {comments.map((com) => (
            <>

              <PostComment key={com.id} >
                <div>
                  <Avatar src={com.avatar} className={classes.small} onClick={() => isSignedIn ?
                    dispatch(push("/users/" + com.uid))
                    :
                     dispatch(dialogOpenAction({  type: "sign", typeState: false }))
              } />

                <PostCommentUser>@{com.username}さん</PostCommentUser>
                 <CommentTime>
                {moment(new Date(com.timestamp?.toDate()).toLocaleString()).fromNow()}

                  </CommentTime>
                  </div>
                {com.uid === uid && <DeleteComment onClick={()=>deleteComment(com.id)}>コメントを削除</DeleteComment>}
                <PostCommentText>{com.text} </PostCommentText>

                  <div className="module-spacer--small"/>
                   {(postUid === uid  || com.reply === true) &&
                  <>

                               <Accordion square expanded={expanded === com.text} onChange={handleChange(com.text)} onClick={fetchReplyComment(com.id)}>
               <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">

            <Typography style={{color:"blue"}}>返信を見る</Typography>
        </AccordionSummary>
        <AccordionDetails style={{background:"	#F8F8FF"}}>

                      <Reply avatar={avatar} id={com.id} replies={replies} replyComment={replyComment} setReply={setReply} reply={reply} isSignedIn={isSignedIn}/>


        </AccordionDetails>
          </Accordion>
                  {/* {replyOpen ? */}

                  {/* } */}
              </>
              }


              </PostComment>


  {/* {postUid === uid &&<> */}

              <Divider/>
            </>
          ))
        }

             </PostCommentWrapper>
          )
            }


    </div>
  )
})

export default Comment
