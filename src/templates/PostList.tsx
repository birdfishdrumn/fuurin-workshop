import React, { useEffect,useState,useCallback }  from 'react'
import { useDispatch, useSelector } from "react-redux";
// import ProductEdit from "./ProductEdit";
import styles from "./module.css/PostList.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { PostCard,CarouselItem} from "components/PostProduct";
// import { fetchPosts } from "../reducks/posts/operations";
import { push } from "connected-react-router";
import {  auth,db} from "../firebase";
// import { getPosts } from "../reducks/posts/postSlice";
import { hideLoadingAction, showLoadingAction } from "../reducks/loadingSlice";
import count from "count-array-values";
import { snackbarOpenAction, getSnackbarState } from "reducks/snackbar/snackbarSlice"

import { getRoute,login } from "../reducks/users/userSlice"
import { fetchPostsAction } from "../reducks/posts/postSlice"
import { NormalButton,ImageStyleChangeIcon} from "../components/UI";
import ReactLoading from 'react-loading';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import firebase from "firebase/app"
import { POST } from "../types/posts"
import { GridList, Title, SectionWrapper, ScrollItem,IconFlex,WhiteIcon} from "assets/GlobalLayoutStyle"
import { OrderByDirection } from '@firebase/firestore-types'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PopulationPost from "./PopulatePost"
import Carousel from 'react-material-ui-carousel'
import styled from "styled-components";
import NotPushAuth from "NotPushAuth"


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

const PostList = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
const selector: any = useSelector(getRoute);
  const [postsList, setPostsList] = useState<POST[]>([])
  const [order,setOrder] = useState<OrderByDirection>("desc")
  const [lastDoc, setLastDoc] = useState<firebase.firestore.DocumentData>()
  const [isEmpty, setIsEmpty] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [change, setChange] = useState<boolean>(false)
  const [catName,setCatName] = useState<string>("")
  const open = useSelector(getSnackbarState);
const postsRef = db.collection("posts")
  const query =decodeURI(selector.location.search)

  const category = /^\?category=/.test(query) ? query.split("?category=")[1] : "";
   const tags = /^\?tags=/.test(query) ? query.split("?tags=")[1] : "";
  console.log(query)
  console.log(decodeURI(tags))
//   const changeSortAsc = () => {
//   setOrder("asc")
// }
  const changeSort = useCallback((change) => {
  setOrder(change)
},[setOrder])

  // 投稿をとってくる関数

const fetchPosts = (category,tags) => {
  return async (dispatch) => {

          dispatch(showLoadingAction("Loading"));
    let query = postsRef.orderBy("updated_at", order);
    // categoryのクエリー
    query = (category !== "") ? query.where("category", "==", category) : query;
  //  tagのクエリ
    query = (tags !== "") ? query.where("tags", "array-contains", tags) : query;
    // onSnapshotでリアルタイムにデータをとってくる
      query.limit(24).onSnapshot(snapshots => {
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

  }, [query, order])


 console.log(query.split("?category=")[1] )
const categoryId = query.split("?category=")[1]
useEffect(() => {
  if (categoryId) {
    db.collection("categories").doc(categoryId).get().then((snapshot) => {
      const catName = snapshot.data().name
      setCatName(catName)
    })
  }
}, [categoryId])

  console.log(catName)

// 更に新しい投稿を取得する。

  const fetchMore = () => {
    setLoading(true);
     let query = postsRef.orderBy("updated_at", order);
    query = (category !== "") ? query.where("category", "==", category) : query;
       query = (tags !== "") ? query.where("tags", "array-contains", tags) : query;
    //  dispatch(showLoadingAction("Loading"));
    query.startAfter(lastDoc).limit(12).get()
      .then((snapshots) => {
            const isCollectionEmpty = snapshots.size === 0;
        if (!isCollectionEmpty) {
            const postList = []
       snapshots.forEach(snapshot => {
          const post = snapshot.data();
          postList.push(post)
          console.log(postList.length - 1)
        })
       const lastDoc = snapshots.docs[snapshots.docs.length - 1]

        setLastDoc(lastDoc)
        setPostsList((postsList)=>[...postsList,...postList])
        dispatch(fetchPostsAction(postList))
        // dispatch(hideLoadingAction());
         }else {
          setIsEmpty(true)
              // dispatch(hideLoadingAction());
    }
 setLoading(false);
      })
  }



  const imageList = postsList.map((post) => post.images[0]).slice(0,5)
console.log(imageList)
  const tagsList = postsList.map((post) => post.tags)

  const tagNum = count(tagsList.flat())

  const tagNumSlice = tagNum.slice(0, 10)
  console.log(tagNumSlice)
  const popularTag =  tagNumSlice.map((tagName)=>tagName.value)

  const tagSearch = (t) => {
    dispatch(push(`/?tags=${t.value}`))
           window.scrollTo(0, 0)
  }

  console.log(open)


  return (
    <SectionWrapper top>
      <NotPushAuth/>
      {!category && !tags && <Carousel
        animation="slide"
      >
        {
          imageList.map((item, i) => <CarouselItem

            key={item.id} item={item} src={item.path} />)
        }

      </Carousel>
      }
      {/* ArrowDownwardIcon */}
      {!category && !tags && <Title>新着作品</Title>}
      <ImageStyleChangeIcon changeSort={changeSort} setChange={setChange}/>
   <div className="module-spacer--medium"/>
      {/* タグを検索した場合 */}
      {tags && <div className="center large_text">「{tags}」の検索結果</div>}
      {category && <div className="center large_text">「{catName}」の検索結果</div>}


      <GridList change={change}>

        {postsList.length > 0 ?
          postsList.map((post) => (
               <ScrollItem key={post.id}>
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
              </ScrollItem>
          ))
          :
          // ローディング中の表示
          <div style={{
            height: "100vh",
            backgroundColor:"#F5F5F5"
          }}></div>

        }

      </GridList>

      <div className="center">
        {loading && (<ReactLoading type="spinningBubbles"
           color={"#eeeeee"}
         />)}
      </div>


      {!postsList.length ?
      <></>
        :
        !loading && !isEmpty && <NormalButton
        label={"もっと見る"}
        onClick={
          fetchMore
        }

      />}
      <div className="module-spacer--medium"/>


      {isEmpty && <><SentimentDissatisfiedOutlinedIcon /><h1>これ以上投稿はありません...</h1></>}

      {!category && !tags &&
        <>
              <Title>人気の作品</Title>
        <PopulationPost top />



  <div className="module-spacer--medium"/>
      {postsList.length !== 0 &&
        <> <Title>人気のタグ</Title>
      <ul className={styles.post_tag}>

               {tagNumSlice && tagNumSlice.map((t,index) => (
              <li key={index} onClick={()=>tagSearch(t)}>#{t.value}</li>
            ))}
        </ul>
        </>
        }
        </>
      }

 </SectionWrapper>
  )
}

export default PostList
