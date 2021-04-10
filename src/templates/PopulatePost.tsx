import React, { useEffect,useState,memo }  from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Dispatch,Action} from "redux"
import {  db} from "../firebase";
import { getPosts,fetchPostsAction } from "reducks/posts/postSlice";
import { hideLoadingAction, showLoadingAction } from "reducks/loadingSlice";
import List from "@material-ui/core/List";
import {SectionWrapper,GridList,ScrollItem,Scroll} from "assets/GlobalLayoutStyle"
import { PopulationList,PostCard,UserPopulationList } from "components/PostProduct/index"
import styled, { css }from "styled-components"
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Box from '@material-ui/core/Box';
import NotPushAuth from "NotPushAuth"
import { SearchPopulationNav } from "components/UI/index";
import { POST } from "types/posts"
import {USER} from "types/user"

// ランキングの上位表示にメダル番号をつける。
const RankingMixin = css`
  position:relative;
  color:red;
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


  }
`
const Ranking = styled.li`
:nth-child(1){
>li{
>div:first-child{
>div{
      ${RankingMixin}
        &::after {
      background-image: url("https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/images%2F%E7%8E%8B%E5%86%A0%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png?alt=media&token=e3fb0e6c-59d2-451b-9544-2f6cffbc5311");
        }
  }
}
}}

:nth-child(2){
>li{
>div:first-child{
>div{
       ${RankingMixin}
        &::after {
   background-image: url("https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/images%2F2%E4%BD%8D%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png?alt=media&token=6df0f14d-f55b-472c-a7ec-c7832d0e0cea");
        }

  }
}
}}

:nth-child(3){
>li{
>div:first-child{
>div{
       ${RankingMixin}
        &::after {
   background-image: url("https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/images%2F3%E4%BD%8D%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png?alt=media&token=1db3743b-2cf2-4eba-948c-0a809696984e");
        }

  }
}
}}
`
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        maxWidth: 752,
    width: '100%',

  },
   appRoot: {
    flexGrow: 1,
    backgroundColor: "white",
  },
}));

interface PROPS {
  top?: boolean;
}

const PopulationPost: React.FC<PROPS> = memo(({ top }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  console.log("jjjjjjjjjj")

  const [postsList, setPostsList] = useState<POST[]>([])
  const [userList, setUserList] = useState<USER[]>([])
    const [value, setValue] = useState<number>(0);
  const postsRef = db.collection("posts")
  const userRef = db.collection("users")


  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };


  const fetchPosts = () => {
    return async (dispatch:Dispatch<Action>):Promise<void> => {

      dispatch(showLoadingAction("Loading"))

      postsRef.orderBy("count", "desc").limit(50).get()
        .then(snapshots => {
          const postList:any = []
          snapshots.forEach(snapshot => {
            const post = snapshot.data();
            postList.push(post)
            console.log(postList.length - 1)

          })

          setPostsList(postList)

          dispatch(fetchPostsAction(postList))
          dispatch(hideLoadingAction());
        })
    }
  }

  const fetchFavoriteUser = ()=> {
    return async (dispatch:Dispatch<Action>):Promise<void> => {

      dispatch(showLoadingAction("Loading"))

      userRef.orderBy("userFavoriteCount", "desc").limit(50).get()
        .then(snapshots => {
          const userList: any = []
          snapshots.forEach(snapshot => {
            const user = snapshot.data();
            userList.push(user)
          })
          setUserList(userList)
          dispatch(hideLoadingAction());
        })
    }
  }

  useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchFavoriteUser())

  }, [])
  console.log(postsList[0])
  console.log(userList)
  return (
    <SectionWrapper>
      <NotPushAuth />

      {!top &&
        <>
          <SearchPopulationNav
          />
          <div className={classes.appRoot}>
            <AppBar position="static" style={{ background: "white" }} >
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="作品" {...a11yProps(0)} style={{ color: "black" }} />
                <Tab label="ユーザー" {...a11yProps(1)} style={{ color: "black" }} />

              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>

              <List className={classes.root}>
                {postsList.length > 0 ?

                  postsList.map((post) => (
                    <Ranking key={post.likesId}>
                      <PopulationList post={post} />
                    </Ranking>
                  )) : <div style={{
                    height: "100vh",
                    backgroundColor: "white"
                  }}></div>

                }
              </List>
            </TabPanel>
            <TabPanel value={value} index={1}>

              <List className={classes.root}>
                {userList.length > 0 ?

                  userList.map((user) => (
                    <Ranking key={user.uid} >
                      <UserPopulationList user={user} />
                    </Ranking>
                  )) : <div style={{
                    height: "100vh",
                    backgroundColor: "white"
                  }}></div>

                }
              </List>
            </TabPanel>
          </div>
        </>
      }


      {top &&

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
              backgroundColor: "#F5F5F5"
            }}></div>

          }

        </Scroll>
      }
    </SectionWrapper>
  )
});

export default PopulationPost
