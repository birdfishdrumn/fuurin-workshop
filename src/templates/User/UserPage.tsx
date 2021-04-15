import React,{useEffect,useState} from 'react'
import { db } from "../../firebase/index"
import firebase from "firebase/app"
import { SectionWrapper, GridList, ScrollItem, Title, BoldText, MinText } from "assets/GlobalLayoutStyle";
import { ProfileColumn, Sns } from "./style";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { PostCard } from "components/PostProduct";
import { fetchPosts } from "reducks/posts/operations";
import { getPosts } from "reducks/posts/postSlice";
import { getUserId,getIsSignedIn} from "reducks/users/userSlice";
import { useDispatch, useSelector } from "react-redux"
import {returnCodeToBr} from "functions/function"
import {  ImageStyleChangeIcon } from 'components/UI';
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import {POST} from "types/posts"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(18),
      height: theme.spacing(18),
      marignRight:"0 !important",
    },
    button:{
      marginTop: "20px",
      fontWeight: "bold",

    },
    whiteButton: {
       marginTop: "20px",
      fontWeight: "bold",
      color:"white"
    },
  }),
);

const UserPage = () => {
  const dispatch = useDispatch()
  const posts:POST[] = useSelector(getPosts);
  const isSignedIn = useSelector(getIsSignedIn);
  const myUserId = useSelector(getUserId);
  const classes = useStyles();
  const [username, setUsername] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [profile, setProfile] = useState<string>("");
  const [favoriteUserArray, setFavoriteUserArray] = useState([]);
  const [change, setChange] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [twitter, setTwitter] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const userRef = db.collection("users");
  let uid: string | never = window.location.pathname.split("/users/")[1];

  useEffect(() => {
    dispatch(fetchPosts(uid))
  }, []);

  useEffect(() => {
    db.collection("users").doc(uid).get().then((snapshot: firebase.firestore.DocumentData) => {
      if (snapshot.data()) {
        const data = snapshot.data()
        console.log(data)
        const username = data.username
        const avatar = data.avatar
        const profile = data.profile
        const url = data.url
        const twitter = data.twitter
        const instagram = data.instagram
        setUsername(username)
        setAvatar(avatar)
        setProfile(profile)
        setUrl(url)
        setTwitter(twitter)
        setInstagram(instagram)
      }
    })

  }, []);

  useEffect(() => {
    dispatch(fetchPosts(uid))
  }, []);

  useEffect(() => {
    if (isSignedIn) {
      const unSub = userRef.doc(myUserId).onSnapshot((snapshot: firebase.firestore.DocumentData) => {
        const data = snapshot.data()
        const Userfavorite = data.favoriteUser
        setFavoriteUserArray(Userfavorite)
      })
      return () => {
        unSub()
      }
    }
  }, []);

  // --------userをお気に入りに登録する関数-----------
  const addFavoriteUser = async () => {

    const id = uid
    // ＾ーーーすでにフォローしていたら場合の処理
    if (favoriteUserArray && favoriteUserArray.includes(uid)) {
    userRef.doc(myUserId).collection("likeUser").doc(id).delete().then(() => {
      userRef.doc(myUserId).update({
          favoriteUser: firebase.firestore.FieldValue.arrayRemove(uid)
        })
      })
      // お気に入りされたuserにiカウントする
      await userRef.doc(uid).update({
        userFavoriteCount: firebase.firestore.FieldValue.increment(-1)
      })
    } else {
        // ＾ーーーすでにフォローしてない場合の処理
    userRef.doc(myUserId).collection("likeUser").doc(id).set({
        username: username,
        uid: uid,
        avatar: avatar,
        profile: profile || ""
      }, {
        merge: true
      }
      ).then(() => {
      userRef.doc(myUserId).update({
          favoriteUser: firebase.firestore.FieldValue.arrayUnion(uid)
        })
      })
      // お気に入りされたuserにiカウントする
      await userRef.doc(uid).set({
        userFavoriteCount: firebase.firestore.FieldValue.increment(1)
      }, { merge: true })
    }
  };

  return (
    <SectionWrapper top>
      <ProfileColumn>
        <div>
          <Avatar style={{ margin: "0 auto" }} className={classes.large} src={avatar} />

          {isSignedIn && myUserId !== uid &&
            <Button
            startIcon={favoriteUserArray &&  favoriteUserArray.includes(uid) ? <CheckIcon/> :<FavoriteIcon/>}
            variant={favoriteUserArray &&  favoriteUserArray.includes(uid) ? "contained":"outlined"}
            onClick={addFavoriteUser}
            className={favoriteUserArray &&  favoriteUserArray.includes(uid) ? classes.whiteButton : classes.button}
            color="primary"
          >
            {favoriteUserArray && favoriteUserArray.includes(uid) ? "お気に入り済" : "ユーザーをお気に入り"}
          </Button>
          }

          <div className="module-spacer--extra-small" />
          {url && <>
            <BoldText>{username}さんの活動</BoldText>
            <BoldText min ><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></BoldText>
              </>
          }
          <Sns>
            {twitter &&
            <a href={twitter} target="_blank" rel="noopener noreferrer"><TwitterIcon style={{ fontSize: "30px" }}/></a>
            }
            {instagram &&
            <a href={instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon style={{ fontSize: "30px" }}/></a>
            }
            </Sns>


        </div>
        <div>
          <Title left black>{username ? username : "noname"}</Title>
          {profile  ? <MinText left>{returnCodeToBr(profile)}</MinText> : "プロフィールが記述されていません。"}
        </div>
      </ProfileColumn>

      <div className="module-spacer--medium" />

      <Title>{username}さんの作品</Title>
      <ImageStyleChangeIcon setChange={setChange} />

          <div className="module-spacer--extra-small" />

          <GridList change={change}>

          {posts.length > 0 ?
            posts.map((post) => (
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
            height: "10vh",
            backgroundColor:"#FFFAFA"
          }}></div>
         }
        </GridList>
    </SectionWrapper>
  )
}

export default UserPage
