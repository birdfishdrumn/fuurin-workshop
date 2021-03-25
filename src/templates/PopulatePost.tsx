import React, { useEffect,useState }  from 'react'
import { useDispatch, useSelector } from "react-redux";
// import ProductEdit from "./ProductEdit";
import  styles  from "./module.css/PostList.module.css";

// import { fetchPosts } from "../reducks/posts/operations";
import {  db} from "../firebase";
import { getPosts,fetchPostsAction } from "reducks/posts/postSlice";
import { hideLoadingAction, showLoadingAction } from "reducks/loadingSlice";
import List from "@material-ui/core/List";
import {SectionWrapper,GridList,ScrollItem,Scroll} from "assets/GlobalLayoutStyle"
import { makeStyles } from "@material-ui/core/styles";
import { PopulationList,PostCard } from "components/PostProduct/index"
import styled from "styled-components"
import One from "assets/img/src/one.png";
const Ranking = styled.li`
:nth-child(1){
>li{
>div:first-child{
>div{

position:relative;
  color:red;
  /* height:auto; */
  &::after {
    content:"";
    font-size:1.6rem;
        display:  inline-block;
   top:-30px;
   width: 60px;
height: 60px;
    left: -16px;
    z-index:444;
   /* background-color:white; */
    align-items:center;
    padding:10px 0;
    background-size: contain;
    position:absolute;
   background-image: url("https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/images%2F%E7%8E%8B%E5%86%A0%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png?alt=media&token=e3fb0e6c-59d2-451b-9544-2f6cffbc5311");

  }
}
}}
}
:nth-child(2){
>li{
>div:first-child{
>div{

position:relative;
  color:red;
  /* height:auto; */
  &::after {
    content:"";
    font-size:1.6rem;
        display:  inline-block;
   top:0px;
   width: 55px;
height: 55px;
    left: -15px;
    z-index:444;
   /* background-color:white; */
    align-items:center;
    padding:10px 0;
    background-size: contain;
    position:absolute;
   background-image: url("https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/images%2F2%E4%BD%8D%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png?alt=media&token=6df0f14d-f55b-472c-a7ec-c7832d0e0cea");

  }
}
}}
}
:nth-child(3){
>li{
>div:first-child{
>div{

position:relative;
  color:red;
  /* height:auto; */
  &::after {
    content:"";
    font-size:1.6rem;
        display:  inline-block;
   top:0px;
   width: 55px;
height: 55px;
    left: -15px;
    z-index:444;
   /* background-color:white; */
    align-items:center;
    padding:10px 0;
    background-size: contain;
    position:absolute;
   background-image: url("https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/images%2F3%E4%BD%8D%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png?alt=media&token=1db3743b-2cf2-4eba-948c-0a809696984e");

  }
}
}}
}
`



const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        maxWidth: 752,
    width: '100%',

    },
}));

interface PROPS {
  top?: boolean;
}

const PostList:React.FC<PROPS> = ({top}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const selector = useSelector((state) => state);
  // const posts = getPosts(selector);
    const [postsList, setPostsList] = useState([])

const postsRef = db.collection("posts")
  // const query = selector.router.location.search;ss


const fetchPosts = () => {
  return async (dispatch) => {

          dispatch(showLoadingAction("Loading"))

       postsRef.orderBy("count","desc").limit(10).get()
      .then(snapshots => {
        const postList = []
        snapshots.forEach(snapshot => {
          const post = snapshot.data();
          postList.push(post)
          console.log(postList.length - 1)

        })
             const lastDoc = snapshots.docs[snapshots.docs.length - 1]

         setPostsList(postList)

        dispatch(fetchPostsAction(postList))
        dispatch(hideLoadingAction());
    })
  }
}

  useEffect(() => {
    dispatch(fetchPosts())

  }, [])
console.log(postsList[0])
  return (
    <SectionWrapper>

      {top ?
      <Scroll>

        {postsList.length > 0 ?
          postsList.map((post) => (
               <ScrollItem width key={post.id}>
              <PostCard

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

      </Scroll>
:

      <List className={classes.root}>
         {postsList.length > 0 ?

            postsList.map((post) => (
            <Ranking>
                <PopulationList key={post.likesId} post={post} />
                  </Ranking>
          )): <div style={{
            height: "100vh",
            backgroundColor:"white"
          }}></div>

        }
       </List>


}




 </SectionWrapper>
  )
}

export default PostList
