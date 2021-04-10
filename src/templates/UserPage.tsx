import React,{useEffect,useState} from 'react'
import { db, auth } from "../firebase/index"
import firebase from "firebase/app"
import { SectionWrapper,GridList,ScrollItem,Title ,Text,BoldText,MinText,IconFlex} from "assets/GlobalLayoutStyle"
import Avatar from '@material-ui/core/Avatar';
import styled from "styled-components"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { fetchPosts } from "../reducks/posts/operations";
import { getPosts } from "../reducks/posts/postSlice";
import { PostCard } from "components/PostProduct";
import { getUserId,getIsSignedIn,login,getUserUrl } from "../reducks/users/userSlice";
import { useDispatch, useSelector } from "react-redux"
import {returnCodeToBr} from "functions/function"

import { PrimaryButton,ImageStyleChangeIcon } from 'components/UI';
import CheckIcon from '@material-ui/icons/Check';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {POST} from "types/posts"

const ProfileColumn = styled.div`
display:flex;
 box-shadow: 2px 2px 4px gray;
max-width:90%;
background:white;
padding:40px 20px;
margin:50px auto;
>div:first-child{
  flex-basis:40%;
  @media(max-width:700px){
  margin:0 auto;
    flex-basis:100%;

}
}
>div:last-child{
  /* margin-left:50px; */
  text-align:left;
 flex-basis:60%;
}
@media(max-width:700px){
  flex-direction:column;

}
`


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },

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
      listIcon: {
    margin:"auto",
    display: "flex",
    flexFlow: "row",
    justifyContent:"center",
    listStyle: "none",
    color:"grey",
    '& > li': {
      margin:10
    },
  },
  }),
);

const UserPage = () => {
  const dispatch = useDispatch()
  const posts:POST[] = useSelector(getPosts);
  // 自分のuserId
  const isSignedIn = useSelector(getIsSignedIn)
  const myUserId = useSelector(getUserId)
  console.log(myUserId)
  const classes = useStyles();

  const [username, setUsername] = useState<string>("")
  const [avatar, setAvatar] = useState<string>("")
  const [profile, setProfile] = useState<string>("")
  const [favoriteUserArray,setFavoriteUserArray] = useState([])
  const [change, setChange] = useState<boolean>(false)
  const [url, setUrl] = useState<string>("")

  let uid: string | never = window.location.pathname.split("/users/")[1];


  useEffect(() => {

      db.collection("users").doc(uid).get().then((snapshot:firebase.firestore.DocumentData) => {
        if (snapshot.data()) {
          const data = snapshot.data()
          console.log(data)
          const username = data.username
          const avatar = data.avatar
          const profile = data.profile
          const url = data.url
          setUsername(username)
          setAvatar(avatar)
          setProfile(profile)
          setUrl(url)
        }
      })

  }, [])

  useEffect(() => {
  dispatch(fetchPosts(uid))
  }, [])
  console.log(posts)

  useEffect(() => {
    if (isSignedIn) {
      const unSub = db.collection("users").doc(myUserId).onSnapshot((snapshot:firebase.firestore.DocumentData) => {
        const data = snapshot.data()
        const Userfavorite = data.favoriteUser
        setFavoriteUserArray(Userfavorite)
        console.log(Userfavorite)
      })
      return () => {
        unSub()
      }
    }

  }, [])
console.log(favoriteUserArray)


  // --------userをお気に入りに登録する関数-----------
  const addFavoriteUser = async() => {
    const userRef =  await db.collection("users")
    const id = uid

if(favoriteUserArray &&  favoriteUserArray.includes(uid)){
            db.collection("users").doc(myUserId).collection("likeUser").doc(id).delete().then(()=>{
                db.collection("users").doc(myUserId).update({
            favoriteUser: firebase.firestore.FieldValue.arrayRemove(uid),

          })
            })
  // お気に入りされたuserにiカウントする
   await userRef.doc(uid).update({
               userFavoriteCount: firebase.firestore.FieldValue.increment(-1)
            })

}else{

      db.collection("users").doc(myUserId).collection("likeUser").doc(id).set({
      username: username,
      uid: uid,
      avatar:avatar,
      profile:profile ||""
    }, {
      merge:true
    }).then(() => {
          db.collection("users").doc(myUserId).update({
            favoriteUser: firebase.firestore.FieldValue.arrayUnion(uid)
            // count: firebase.firestore.FieldValue.increment(-1)
          })
    })
   // お気に入りされたuserにiカウントする
  await userRef.doc(uid).set({
               userFavoriteCount: firebase.firestore.FieldValue.increment(1)
            },{merge:true})
    console.log("huuta")
}
  }

    // --------userをお気に入りに登録する関数-----------


  return (
    <SectionWrapper>

      {/* <BackgroundWhite> */}
      <ProfileColumn>
        <div>
          <Avatar style={{ margin: "0 auto" }} className={classes.large} src={avatar} />

          {isSignedIn && myUserId !== uid &&
                  <Button
              startIcon={favoriteUserArray &&  favoriteUserArray.includes(uid) ? <CheckIcon/> :<FavoriteIcon/>}
          variant={favoriteUserArray &&  favoriteUserArray.includes(uid) ? "contained":"outlined"}
          onClick={addFavoriteUser}
          className={favoriteUserArray &&  favoriteUserArray.includes(uid) ? classes.whiteButton : classes.button}
          color="primary">{favoriteUserArray &&  favoriteUserArray.includes(uid) ? "お気に入り済":"ユーザーをお気に入り"}</Button>
          }

          <div className="module-spacer--extra-small" />
          {url && <>
              <BoldText>{username}さんの活動</BoldText>
            <BoldText min ><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></BoldText>
            </>
           }

        </div>

        <div>
          <Title left black>{username ? username : "noname"}</Title>
          {profile  ? <MinText left>{returnCodeToBr(profile)}</MinText> : "プロフィールが記述されていません。"}
       </div>
        </ProfileColumn>
        {/* </BackgroundWhite> */}
      <div className="module-spacer--medium" />
      <Title>{username}さんの作品</Title>
      <ImageStyleChangeIcon setChange={setChange}/>
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
            height: "100vh",
            backgroundColor:"#F5F5F5"
          }}></div>

        }

      </GridList>
    </SectionWrapper>
  )
}

export default UserPage
