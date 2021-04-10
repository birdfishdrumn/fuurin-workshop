import React, { useEffect,useState,useCallback }  from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Dispatch,Action } from 'redux'
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
import CircularProgress from '@material-ui/core/CircularProgress';
import { getRoute,login } from "../reducks/users/userSlice"
import { fetchPostsAction } from "../reducks/posts/postSlice"
import { PrimaryButton,ImageStyleChangeIcon} from "../components/UI";
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import firebase from "firebase/app"
import { POST } from "../types/posts"
import { GridList, Title, SectionWrapper, ScrollItem,BoldText,StyledLink,MinText} from "assets/GlobalLayoutStyle"
import { OrderByDirection } from '@firebase/firestore-types'

import PopulationPost from "./PopulatePost"
import Carousel from 'react-material-ui-carousel'
import NotPushAuth from "NotPushAuth"
import styled from "styled-components"


const TopCarouselWrapper = styled.div`
margin:0 auto;
 width:80%;
 height:80%;
 background:white;
 padding:50px 10px;
   box-shadow: 0 0px 10px rgba(0,0,0,0.2);
   @media(max-width:768px){
     padding:20px 0px;
     width:95%;
   }

`

const TopCarouselColumn = styled.div`

  display:flex;
  justify-content:center;
    align-items:center;
    >div{
      margin:0 20px;
    }
 >div:first-child{
  flex-basis:20%;

 }
 >div:last-child{
   flex-basis:60%;
   text-align:left;
 }
 @media(max-width:768px){
    >div:first-child{
  flex-basis:35%;

 }
 >div:last-child{
   flex-basis:60%;
   text-align:left;
   margin:0;
 }
 }

`


const PostList = () => {
  const dispatch = useDispatch()
const selector: any = useSelector(getRoute);
  const [postsList, setPostsList] = useState<POST[]>([]),
    [order, setOrder] = useState<OrderByDirection>("desc"),
    [lastDoc, setLastDoc] = useState<firebase.firestore.DocumentData>(),
    [isEmpty, setIsEmpty] = useState<boolean>(false),
    [loading, setLoading] = useState<boolean>(false),
    [change, setChange] = useState<boolean>(false),
    [catName, setCatName] = useState<string>("");
  const open = useSelector(getSnackbarState);
  const postsRef = db.collection("posts")


  const query = decodeURI(selector.location.search) //タグ検索でリロードした時のエンコードを防ぐ
    const categoryId: string = query.split("?category=")[1] //カテゴリーのidの名称

  const category = /^\?category=/.test(query) ? query.split("?category=")[1] : "";
   const tags = /^\?tags=/.test(query) ? query.split("?tags=")[1] : "";


  const changeSort = useCallback((change) => {
  setOrder(change)
},[setOrder])


  // 投稿をとってくる関数
const fetchPosts = (category:string,tags:string) => {
  return async (dispatch:Dispatch<Action>): Promise<void> => {

          dispatch(showLoadingAction("Loading"));
    let query = postsRef.orderBy("updated_at", order);
    // categoryのクエリー
    query = (category !== "") ? query.where("category", "==", category) : query;
  //  tagのクエリ
    query = (tags !== "") ? query.where("tags", "array-contains", tags) : query;

      query.limit(24).onSnapshot(snapshots => {
        const postList: any = []
        snapshots.forEach(snapshot => {
          const post = snapshot.data();
          postList.push(post)

        })
        // 最後に取得されたデータ
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




useEffect(() => {
  if (categoryId) {
    db.collection("categories").doc(categoryId).get().then((snapshot:firebase.firestore.DocumentData) => {
      const data = snapshot.data()
      const catName = data.name
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
      .then((snapshots:firebase.firestore.DocumentData) => {
            const isCollectionEmpty = snapshots.size === 0;
        if (!isCollectionEmpty) {
            const postList: any = []
       snapshots.forEach((snapshot:firebase.firestore.DocumentData) => {
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


// カルーセルに流れる5件を表示
  const carouselImage = postsList.map((post) => post.images[0]).slice(0,5)
  console.log(carouselImage)

  // -------------人気のタグを表示ーーーーーーーーーーーーー
  const tagsList = postsList.map((post) => post.tags)
  const tagNum = count(tagsList.flat())
  const tagNumSlice = tagNum.slice(0, 10)

    // -------------人気のタグを表示ーーーーーーーーーーーーー

  // タグを検索する
  const tagSearch = (t: any): void => {
    dispatch(push(`/?tags=${t.value}`))
    window.scrollTo(0, 0)
  };


  return (
    <SectionWrapper top>
      <NotPushAuth />
       <div className="module-spacer--medium"/>
      {!category && !tags &&
        <Carousel
        animation="slide"

      >
        {/* {
          carouselImage.map((item, i) => <CarouselItem
            key={item.id} item={item} src={item.path} />)
        } */}
                     <TopCarouselWrapper>
        <StyledLink to="/serviceguide">
        <TopCarouselColumn>
          <div>
           <img src ="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fmakimono.jpg?alt=media&token=53c48587-8841-4e8f-8c15-4d0b1a6293e8"/>
          </div>
          <div>

                <Title lef min>はじめかた</Title>
                <MinText min left>まずはこちらからサービスの始めかたについてご覧いただけます。早速江戸風鈴の体験を始めましょう！</MinText>
          </div>
        </TopCarouselColumn>
       </StyledLink>
      </TopCarouselWrapper>
      </Carousel>
      }

      {!category && !tags && <Title>新着作品</Title>}
      <ImageStyleChangeIcon changeSort={changeSort} setChange={setChange}/>
   <div className="module-spacer--medium"/>
      {/* タグを検索した場合 */}
      {tags && <BoldText>「{tags}」の検索結果</BoldText>}
      {category && <BoldText>「{catName}」の検索結果</BoldText>}


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
            backgroundColor:"#FFFAFA"
          }}></div>

        }

      </GridList>
      {/* -----------もっとみるのLOADING---------------- */}
      <div className="center">
        {loading &&
          <CircularProgress color="inherit"  style={{ margin: "30px 0" }}/>
        }
      </div>


      {!postsList.length ?
      <></>
        :
        !loading && !isEmpty && <PrimaryButton
        label={"もっと見る"}
        onClick={
          fetchMore
        }

        />}
          {/* -----------もっとみるのLOADING---------------- */}
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

               {tagNumSlice && tagNumSlice.map((t:any,index:number) => (
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
