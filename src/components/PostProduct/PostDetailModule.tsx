import React, { useState, useEffect, useCallback } from "react"
import { useSelector,useDispatch } from "react-redux";
import { db } from "firebase/index";
import { Flex, SectionWrapper, Title, GridLow, BackgroundWhite, BoldText, StyledBoldText } from "assets/GlobalLayoutStyle";
import { ImageSwiper,RelationPost,Comment,Favorite } from "components/PostProduct/index";
import { dialogOpenAction } from "reducks/dialog/dialogSlice";
import { getPostsInFavorite, getUserId, getUserAvatar, getUsername, getIsSignedIn } from "reducks/users/userSlice";
import { showLoadingAction,hideLoadingAction } from "reducks/loadingSlice";
import firebase from "firebase/app";
import {  Menu } from "components/UI/index";
import { push } from "connected-react-router";
import 'moment/locale/ja'
import { DetailWrapper, PostTag } from "templates/style";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles ,createStyles} from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import { returnCodeToBr } from "functions/function";
import styled from "styled-components";
import { POST } from "types/posts";
import { FAVORITE } from "types/likes";

const AvatarTitle = styled(Avatar)`
display:inline-block;
`
const Username = styled.div`
 margin-top:10px;
 margin-left:20px;

`
const NoComment = styled.div`
 margin-top:20px;
`
// iconButtonを右端に寄せるcss
const TitleContainer = styled.div`
 position:relative;
 >div:last-child{
   position:absolute;
   top:0;
   right:0;
 }
`

const useStyles = makeStyles((theme) => ({
  sliderBox: {
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto 24px auto",
      // height: "auto",
      width: "90%"
    },
    [theme.breakpoints.up("sm")]: {
      margin: "0 auto",
      width: 400,
      // height: 400
    }
  },
  media: {
    margin: "auto",
    // position: "relative",


    textAlign:"center",
    '& > img': {
        //  position: "relative",
          margin:"auto",
      height: "70%",
    borderRadius:5,
    width:"70%",
    },
  },
    small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
}));



interface PROPS {
  productId: string;
  onClose?: () => void;
  template?: boolean;
}

const PostDetailModule:React.FC<PROPS> = ({ productId, onClose,template }) => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const postInFavorite:FAVORITE[] = useSelector(getPostsInFavorite);
  // お気に入りした作品数
  const likesPostsArray:string[] = postInFavorite.map((post: any) =>
    post.postId);
  const username = useSelector(getUsername);
  const avatar = useSelector(getUserAvatar);
  const uid = useSelector(getUserId);
  const isSignedIn = useSelector(getIsSignedIn);
  // idは新たに定義されたidである事を忘れない
  // idの扱いが違う
  const [id, setId] = useState<string>(productId);
  const [post, setPost] = useState<POST>();
  const [postUid, setPostUid] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const random:number= Math.floor(Math.random() * tags.length);
  const randomTag:string= tags[random];

// 作品のidを持った作品をとってくる。
  useEffect(() => {
    // 個別の商品情報の取得なのでdoc(id)と引数にidを忘れない
    if (id)  {
      const unSub = db.collection("posts").doc(id).onSnapshot((doc:firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>) => {
        const data:any = doc.data()
          if (data) {
            const tags = data.tags
            const postUid =data.uid
            setPost(data)
            setTags(tags)
            setPostUid(postUid)
        }
      })
      return () => {
        unSub()
      }
    }
  }, [id]);


  const changeRelation = useCallback((id) => {
    dispatch(showLoadingAction("loading"))
    setTimeout(() => {
      setId(id);
      window.location.href = "#title"
      dispatch(hideLoadingAction())
    }, 200);
  }, [setId]);

  const searchTag = (tag: any):void => {
    dispatch(push(`/timeline/?tags=${tag}`))
    onClose && onClose()
  };

  return (
     <SectionWrapper>
      {post ? (
        <>
          <TitleContainer>
            <Title id="title" >{post.name}</Title>
            <div>
              {!template &&
                <IconButton onClick={() => onClose && onClose()} >
                  <CloseIcon />
                </IconButton>}
            </div>
          </TitleContainer>

          <Divider />
             <div style={{height:"5vh"}}/>
          <GridLow >
             <div className={classes.sliderBox}>
              <ImageSwiper images={post.images} />

                    <div className="module-spacer--small" />

                    <Flex between>
                      <Flex cursor onClick={() => isSignedIn ?
                          dispatch(push("/users/" + post.uid))
                          :
                          dispatch(dialogOpenAction({  type: "signin",title:"ログイン" }))
                        }>
                        <AvatarTitle src={post.avatar} />
                      <Username>{post.username}</Username>
                      </Flex>
                      <Flex>
                  {/* <Share text="tweet" url={id} /> */}
                  <Menu type="share" url={id}/>
                      <Favorite id={id} uid={uid} likesPostsArray={likesPostsArray} post={post} detail/>
                      </Flex>
                    </Flex>

                    <Divider />

                    < NoComment >

                      {post.check !== true ?
                        <Comment postUid={postUid} id={id} username={username} avatar={avatar} uid={uid}/>:
                      <StyledBoldText>コメントは非表示になっています。</StyledBoldText>
                      }
                    </ NoComment>
                  </div>
                <DetailWrapper>
                      <Divider className="downMd" />
                      <div className="downMd" style={{ height: "5vh" }} />
                      <BackgroundWhite>
                  <Title min >作品の説明</Title>
                  {/* 説明欄に改行を可能にする。 */}
                        <p>{returnCodeToBr(post.description)}</p>
                      </BackgroundWhite>

              <div className="module-spacer--small" />

                    <div className={classes.media}>
                      <img src={post.allImages[0].path}/>
                    </div>

                    <div className="module-spacer--small" />

                  {/* タグ一覧 */}
                  <PostTag>
                    {post.tags?.length ? post.tags?.map((t,index) => (
                    <li key={index} onClick={()=>searchTag(t)}>#{t}</li>
                    ))
                          :
                          <BoldText><SentimentDissatisfiedOutlinedIcon style={{fontSize:"30px",marginBottom:"-8px",marginRight:"10px"}}/>タグがありません</BoldText>
                    }
                  </PostTag>
                  </DetailWrapper>
          </GridLow>
          <div style={{ height: "5vh" }} />

          <Divider />

          {post.tags.length > 0 ?
            <div >
            <RelationPost randomTag={randomTag} tags={tags} id={id} changeRelation={changeRelation}/>
           </div>
            :
            <Title min>関連作品はありません</Title>
          }
              <div style={{height:"10vh"}}/>
        </>
      )
       :
        (
        <div style={{ height: "100vh", }}>
            <CircularProgress color="inherit"  style={{ margin: "20vh 0" }}/>
         </div>
      )
}
  </SectionWrapper>
)
};


export default PostDetailModule
