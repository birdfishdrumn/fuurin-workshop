import React, { useState, useEffect, useCallback } from "react"
import Avatar from '@material-ui/core/Avatar';
import { useSelector,useDispatch } from "react-redux";
import {
  db,FirebaseTimestamp
} from "../firebase/index"
import firebase from "firebase/app"
import { makeStyles ,createStyles} from "@material-ui/core/styles";
import HTMLReactParser from "html-react-parser"
import { ImageSwiper,RelationPost,Comment,Favorite } from "../components/PostProduct/index";
import styles from "./module.css/Detail.module.css";

// import {addProductToCart} from "../reducks/users/operations"
import { push } from "connected-react-router";

import { addPostToFavorite } from "../reducks/users/operations";
import { getPostsInFavorite,getUserId } from "../reducks/users/userSlice";
import {GridLow} from "assets/GlobalLayoutStyle"
import moment from 'moment'  // #1
import 'moment/locale/ja'
import ReactLoading from 'react-loading';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import { DetailWrapper,PostTag,Detail } from "./template_style"
import styled from "styled-components"

import Divider from '@material-ui/core/Divider';
import {Flex,SectionWrapper,Title} from "assets/GlobalLayoutStyle"

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

const Swiper = styled.div`
@media(max-width:1024px){
/* s */
/* height:100%; */
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

const returnCodeToBr = (text) => {
  if(text === "") {
    return text
  } else {
    // 改行コードをhtmlで使える<br>タグに変換する。
    return HTMLReactParser(text.replace(/\r?\n/g,"<br/>"))
  }
};



const PostDetail = ({  }) => {

  const classes = useStyles()
  const dispatch = useDispatch()
  // const path = selector.router.location.pathname;
const id = window.location.pathname.split("/post/")[1];

  const postInFavorite = useSelector(getPostsInFavorite);

  // お気に入りした作品数
  const likesId = postInFavorite.map(post =>
    post.postId)


  const uid = useSelector(getUserId)
  // idは新たに定義されたidである事を忘れない
  // const [id, setId] = useState(productId);/s
  const [post, setPost] = useState(null)
  const [user, setUser] = useState("")
  const [open, setOpen] = useState(false)
  const [tags,setTags] = useState([])
  console.log(id)
  const [openModal,setOpenModal] =useState(false)

  //   const changeRelation = useCallback((id) => {
  //   dispatch(showLoadingAction("loading"))

  //   setTimeout(() => {
  //      setId(id);
  //     window.location.href = "#title"
  //      dispatch(hideLoadingAction())
  //   }, 200);

  // }, [setId])

// 作品のidを持った作品をとってくる。
  useEffect(() => {
    // 個別の商品情報の取得なのでdoc(id)と引数にidを忘れない
    // if (id) {

    // }
    if (id)  {
      const unSub = db.collection("posts").doc(id).onSnapshot(doc => {
        if (doc.data()) {
                  const data = doc.data()
        const tags = data.tags
        setPost(data)
        setTags(tags)
        }

      })
      return () => {
        unSub()
      }

    }

  }, [id]);


useEffect(() => {
      db.collection("users").doc(uid).get().then(doc => {
        const data:any = doc.data()
        setUser(data)
        console.log(data)
    })
}, []);
console.log(tags)
  const random = Math.floor(Math.random() * tags.length);
  const randomTag = tags[random]
//   const scroll = () => {
//     var element = document.getElementById("title");
//     	var rect = element.getBoundingClientRect();
// 	var x = rect.left;
// 	var y = rect.top;

// }

  // 関連する作品のidをセットする


  const searchTag = (tag) => {
    dispatch(push(`/?tags=${tag}`))
    // onClose()
  }
  return (
     <SectionWrapper>
      {post ? (
        <>
               <Title id="title" >{post.name}</Title>
          <Divider />
             <div style={{height:"5vh"}}/>
        <GridLow >
            <div className={classes.sliderBox}>
              <Swiper>
                 <ImageSwiper images={post.images} />
              </Swiper>

              <div className="module-spacer--small" />
              <Flex between>
                <Flex>
                    <AvatarTitle  onClick={()=>dispatch(push("/users/" + post.uid))} src={post.avatar}/>
                <Username>{post.username}</Username>
                </Flex>

                          <Favorite id={id} uid={uid} likesId={likesId} post={post} />
              </Flex>
              <Divider/>
                  < NoComment >
                {post.check !== true ?
                  <Comment id={id} user={user} uid={uid}/>:
                <h1>コメントは非表示になっています。</h1>
                }
              </ NoComment>
            </div>


          <DetailWrapper>
              <Detail>
                <Divider className="downMd" />
                <div className="downMd" style={{height:"5vh"}}/>
            <h1 className="center u-text__title">作品の説明</h1>

            {/* 説明欄に改行を可能にする。 */}

              <p>{returnCodeToBr(post.description)}</p>
              <div className="module-spacer--small" />
   <div className={classes.media}>
                     <img src={post.allImages[0].path}/>
              </div>
              <div className="module-spacer--small" />

            {/* タグ一覧 */}
            <PostTag>
                     <LocalOfferOutlinedIcon/>
               {post.tags && post.tags.map((t,index) => (
              <li key={index} onClick={()=>searchTag(t)}>#{t}</li>
            ))}
            </PostTag>






             </Detail>
            </DetailWrapper>

          </GridLow>
          <div style={{ height: "5vh" }} />
             {/* <button onClick ={scroll}>top</button> */}
          <Divider />

          {post.tags.length > 0 ? <div >
            <RelationPost randomTag={randomTag} tags={tags} id={id} />
          </div>
            : <h1>関連作品はありません</h1>
          }
              <div style={{height:"10vh"}}/>
        </>

      )
       :
        (
        <div style={{
            height: "100vh",
          width:"1024px",
            backgroundColor:"#F5F5F5"
        }}>
          <ReactLoading type="spinningBubbles"  />
          </div>
      )
}
  </SectionWrapper>

)
};


export default PostDetail