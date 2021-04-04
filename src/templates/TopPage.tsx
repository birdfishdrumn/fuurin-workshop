import React, { useEffect,useState,useCallback }  from 'react'
import { useDispatch, useSelector } from "react-redux";
// import ProductEdit from "./ProductEdit";
import styles from "./module.css/PostList.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { PostCard,CarouselItem} from "components/PostProduct";
// import { fetchPosts } from "../reducks/posts/operations";

import {  FirebaseTimestamp,db} from "../firebase";
// import { getPosts } from "../reducks/posts/postSlice";
import { hideLoadingAction, showLoadingAction } from "../reducks/loadingSlice";
import count from "count-array-values";
import {getSnackbarState} from "reducks/snackbar/snackbarSlice"
import { getRoute, getIsSignedIn } from "../reducks/users/userSlice"
// import {isSignedInAuthState} from "reducks/users/operations"
import { fetchPostsAction } from "../reducks/posts/postSlice"

import { PrimaryButton,ConfirmModal,SignDialog} from "../components/UI";
import {Footer} from "components/Footer/index"
import firebase from "firebase/app"
import { POST } from "../types/posts"
import {push} from "connected-react-router"
import { OrderByDirection } from '@firebase/firestore-types'
import styled from "styled-components"

import { MaxSectionWrapper, TwoColumn, MainTitle,GridList,Text,Container } from "assets/GlobalLayoutStyle"


const Max = styled.div`
margin:0 -200% !important;
padding:0 200% !important;
/* background: linear-gradient(#ffffff 0%, #ff6666 100%);
 */
background:${props => props.color};
text-align: center;
margin:100px 0;
`

const MaxImage = styled(Max)`
  background-image: url(${props => props.img});
/* background-repeat: no-repeat; */
background-size:contain;
/* background-attachment: fixed; */
/* background-repeat: no-repeat; */
`


const useStyles = makeStyles((theme) => ({
  sort: {
    margin: "20px 50px 10px 0",
    justifyContent: "center",

    color: "grey",
    display: "flex",
    listStyle: "none",
    flexFlow: "row",

    '& > li': {
        margin: 10,

   }
  },

})
)

const TopPage: React.FC = (props: any) => {


  const dispatch = useDispatch()
  const classes = useStyles()
const selector: any = useSelector(getRoute);
  const [postsList, setPostsList] = useState<POST[]>([])
  const [order,setOrder] = useState<OrderByDirection>("desc")
  const [lastDoc, setLastDoc] = useState<firebase.firestore.DocumentData>()
  const [isEmpty, setIsEmpty] = useState<boolean>(false)

  const [change, setChange] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const [sign,setSign] = useState<boolean>(false)

  const isSignedIn = useSelector(getIsSignedIn);
  console.log(isSignedIn)
const postsRef = db.collection("posts")

    const query =decodeURI(selector.location.search)
    //  props.history.push("/");
 const category = /^\?category=/.test(query) ? query.split("?category=")[1] : "";
   const tags = /^\?tags=/.test(query) ? query.split("?tags=")[1] : "";


  useEffect(() => {
    const unSub = postsRef.orderBy("updated_at", order).limit(12).onSnapshot((snapshots) => {
            const postList = []
        snapshots.forEach(snapshot => {
          const post = snapshot.data();
          postList.push(post)

        })
        setPostsList(postList)
   })

     return () => {
      unSub()
    }
  }, [])



    const handleClose = useCallback(() => {
     setOpen(false)

    }, [setOpen])

  useEffect(() => {
    if (isSignedIn === true) {
        dispatch(push("/"))
    }

  }, [isSignedIn])
const signInOpen = () =>{
  setOpen(true)
  setSign(true)
}

  const signUpOpen = () =>{
  setOpen(true)
  setSign(false)
}
  return (
    <div>
      <MaxSectionWrapper>
         <Container width={"1024"}>
        <TwoColumn>
         <div>
              <MainTitle>世界に一つだけの風鈴を投稿しよう！</MainTitle>
              <Text>体験で作った江戸風鈴を、投稿して風鈴のお祭りを開こう！</Text>
        <PrimaryButton onClick={signInOpen} label="ログイン" /> <PrimaryButton onClick={signUpOpen} label="アカウントを登録"/>
        </div>

          </TwoColumn>
          </Container>
        <div className="module-spacer--large"/>

        <Max>
          <Container width={"600"}>
          <MainTitle sub>風鈴メイカーで作品をオシャレに！</MainTitle>
            <Text>作った作品の短冊を自分好みのデザインに編集できます。更に短冊に応援やお願い事などを描くことで、厳しい時代でも前向きになれます。</Text>
            </Container>
        </Max>

        <Max>
          <Container width={"600"}>
          <MainTitle sub>風鈴のお祭りを開催しよう！</MainTitle>
            <Text>作った作品の短冊を自分好みのデザインに編集できます。更に短冊に応援やお願い事などを描くことで、厳しい時代でも前向きになれます。</Text>
            </Container>
        </Max>
         <Max>
          <Container width={"600"}>
          <MainTitle sub>描き方がわからなくて大丈夫！</MainTitle>
            <Text>絵のレッスンをスライド形式で受講できます。風鈴に絵を描くときのコツ、注意点、また色の作り方も掲載しております。</Text>
            </Container>
        </Max>
          <Max color={"white"}>
             <div className="module-spacer--xl"/>
          <MainTitle sub>新しい作品</MainTitle>
             <div className="module-spacer--xl"/>
            <GridList>

        {postsList.length > 0 ?
          postsList.map((post) => (
               <li  className={styles.p_grid__scroll_item}>
              <PostCard
                change={change}
              post={post}
              key={post.id}
              name={post.name}
                images={post.images}
                allImages={post.allImages}
              id={post.id}
              description={post.description}
              username={post.username}
              avatar={post.avatar}
              uid={post.uid}
            />
              </li>
          ))
          :
          // ローディング中の表示
          <div style={{
            height: "100vh",
            backgroundColor:"#F5F5F5"
          }}></div>

        }

        </GridList>
          <div className="module-spacer--small"/>
        <PrimaryButton
         label="もっと作品を見てみる"
         onClick={()=>dispatch(push("/"))}
          />
            <div className="module-spacer--xl"/>
        </Max>
        <MaxImage img={"https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2Foveray-top.jpg?alt=media&token=d37fd138-6c17-4511-82a4-99eb7c898388"}>
             <div className="module-spacer--xl"/>
          <Container width={"600"}>
          <MainTitle white sub>このサービスを立ち上げた経緯</MainTitle>
            <Text white>絵のレッスンをスライド形式で受講できます。風鈴に絵を描くときのコツ、注意点、また色の作り方も掲載しております。</Text>
          </Container>
             <div className="module-spacer--xl"/>
        </MaxImage>
      <SignDialog open={open} handleClose={handleClose} signIn={sign} setSign={setSign} />
        <ConfirmModal/>
      </MaxSectionWrapper>



      <Footer/>
      </div>
  );
};

export default TopPage;
