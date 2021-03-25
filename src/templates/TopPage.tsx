import React, { useEffect,useState,useCallback }  from 'react'
import { useDispatch, useSelector } from "react-redux";
// import ProductEdit from "./ProductEdit";
import styles from "./module.css/PostList.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { PostCard,CarouselItem,SignDialog} from "components/PostProduct";
// import { fetchPosts } from "../reducks/posts/operations";

import {  FirebaseTimestamp,db} from "../firebase";
// import { getPosts } from "../reducks/posts/postSlice";
import { hideLoadingAction, showLoadingAction } from "../reducks/loadingSlice";
import count from "count-array-values";
import {getSnackbarState} from "reducks/snackbar/snackbarSlice"
import { getRoute, getIsSignedIn } from "../reducks/users/userSlice"
// import {isSignedInAuthState} from "reducks/users/operations"
import { fetchPostsAction } from "../reducks/posts/postSlice"

import { PrimaryButton,ConfirmModal} from "../components/UI";
import {Footer} from "components/Footer/index"
import firebase from "firebase/app"
import { POST } from "../types/posts"
import {push} from "connected-react-router"
import { OrderByDirection } from '@firebase/firestore-types'


import { SectionWrapper, TwoColumn, MainTitle,GridList,Title } from "assets/GlobalLayoutStyle"



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
  const fetchPosts = (category,tags) => {
  return async (dispatch) => {

          dispatch(showLoadingAction("Loading"));
    let query = postsRef.orderBy("updated_at", order);
    // categoryのクエリー
    query = (category !== "") ? query.where("category", "==", category) : query;
  //  tagのクエリ
    query = (tags !== "") ? query.where("tags", "array-contains", tags) : query;
    // onSnapshotでリアルタイムにデータをとってくる
      const unSub = query.limit(10).onSnapshot(snapshots => {
        const postList = []
        snapshots.forEach(snapshot => {
          const post = snapshot.data();
          postList.push(post)


        })
             const lastDoc = snapshots.docs[snapshots.docs.length - 1]
        setLastDoc(lastDoc)
         setPostsList(postList)
          console.log(lastDoc)
        dispatch(fetchPostsAction(postList))
        dispatch(hideLoadingAction());
      })
    // unSub()

  }
}

  useEffect(() => {
    dispatch(fetchPosts(category,tags))
    setIsEmpty(false)

  }, [query,order])

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
    <SectionWrapper>
      <TwoColumn><div>
        <MainTitle>世界に一つだけの風鈴を投稿しよう！</MainTitle>
        <PrimaryButton onClick={signInOpen} label="ログイン" /> <PrimaryButton onClick={signUpOpen} label="アカウントを登録"/>
        </div>

      </TwoColumn>
      <Title>新着作品</Title>
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
      <SignDialog open={open} handleClose={handleClose} signIn={sign} setSign={setSign} />
        <ConfirmModal/>
      </SectionWrapper>
      <Footer/>
      </div>
  );
};

export default TopPage;
