import React, { useEffect, useState, memo } from 'react';
import { useDispatch } from "react-redux";
import { Dispatch, Action } from "redux";
import {db} from "firebase/index";
import { fetchPostsAction } from "reducks/posts/postSlice";
import { hideLoadingAction, showLoadingAction } from "reducks/loadingSlice";
import {SectionWrapper,ScrollItem,Scroll} from "assets/GlobalLayoutStyle"
import { PopulationList, PostCard, UserPopulationList } from "components/PostProduct/index";
import { Ranking } from "./style";
import { makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import NotPushAuth from "NotPushAuth";
import { SearchPopulationNav } from "components/UI/index";
import { POST } from "types/posts";
import { USER } from "types/user";

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
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};


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
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postsList, setPostsList] = useState<POST[]>([]);
  const [userList, setUserList] = useState<USER[]>([]);
  const [value, setValue] = useState<number>(0);
  const postsRef = db.collection("posts");
  const userRef = db.collection("users");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };


  const fetchPosts = () => {
    return async (dispatch: Dispatch<Action>): Promise<void> => {
      dispatch(showLoadingAction("Loading"))
      postsRef.orderBy("count", "desc").limit(50).get()
        .then(snapshots => {
          const postList: any = []
          snapshots.forEach(snapshot => {
            const post = snapshot.data();
            postList.push(post);
          })
          setPostsList(postList)
          dispatch(fetchPostsAction(postList));
          dispatch(hideLoadingAction());
        })
    }
  };

  const fetchFavoriteUser = () => {
    return async (dispatch: Dispatch<Action>): Promise<void> => {

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
    };
  };

  useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchFavoriteUser())
  }, []);


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
                    <Ranking key={post.id}>
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
                  userList.map((user: USER) => (
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

     {/* トップ画面の場合は横スクロールのレイアウトにする。 */}
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
