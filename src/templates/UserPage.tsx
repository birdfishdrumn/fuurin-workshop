import React,{useEffect,useState} from 'react'
import { db, FirebaseTimestamp } from "../firebase/index"
import firebase from "firebase/app"
import { SectionWrapper,GridList,ScrollItem,Title ,Text} from "assets/GlobalLayoutStyle"
import Avatar from '@material-ui/core/Avatar';
import styled from "styled-components"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { addUserPost } from "../reducks/posts/operations";
import { getUserPosts } from "../reducks/posts/postSlice";
import { PostCard } from "components/PostProduct";
import { getUserId } from "../reducks/users/userSlice";
import { useDispatch, useSelector } from "react-redux"
import Tooltip from '@material-ui/core/Tooltip';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import GridOnIcon from '@material-ui/icons/GridOn';
import { PrimaryButton } from 'components/UI';
import CheckIcon from '@material-ui/icons/Check';
import FavoriteIcon from '@material-ui/icons/Favorite';
const ProfileColumn = styled.div`
display:flex;

max-width:700px;
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
      fontWeight:"bold"
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
  const posts = useSelector(getUserPosts);
  // 自分のuserId
  const myUserId = useSelector(getUserId)
  console.log(myUserId)
  const classes = useStyles();
  const [username, setUsername] = useState<string>("")
  const [avatar, setAvatar] = useState<string>("")
  const [profile, setProfile] = useState<string>("")
  const [favoriteUserArray,setFavoriteUserArray] = useState([])
    const [change, setChange] = useState<boolean>(false)
  let uid = window.location.pathname.split("/users/")[1];
  useEffect(() => {
    db.collection("users").doc(uid).get().then((snapshot) => {
      if (snapshot.data()) {
        const data = snapshot.data()
        console.log(data)
        const username = data.username
        const avatar = data.avatar
        const profile = data.profile
        setUsername(username)
        setAvatar(avatar)
        setProfile(profile)
      }
    })
  }, [])

  useEffect(() => {
  dispatch(addUserPost(uid))
  }, [])
  console.log(posts)

  useEffect(() => {

    const unSub = db.collection("users").doc(myUserId).onSnapshot((snapshot) => {
      const data = snapshot.data()
      const Userfavorite  = data.favoriteUser
      setFavoriteUserArray(Userfavorite)
         console.log(Userfavorite)
    })
    return ()=> {
      unSub()
    }

  }, [])
console.log(favoriteUserArray)

  const addFavoriteUser = async() => {
    const favoriteRef =  await db.collection("users").doc(myUserId).collection("likeUser").doc();
    const id = uid

if(favoriteUserArray &&  favoriteUserArray.includes(uid)){
           db.collection("users").doc(myUserId).collection("likeUser").doc(id).delete().then(()=>{
                db.collection("users").doc(myUserId).update({
            favoriteUser: firebase.firestore.FieldValue.arrayRemove(uid),

          })
         })
}else{

     db.collection("users").doc(myUserId).collection("likeUser").doc(id).set({
      username: username,
      uid: uid,
      avatar:avatar,
      // favoriteUserId: id,
      profile:profile
    }, {
      merge:true
    }).then(() => {
          db.collection("users").doc(myUserId).update({
            favoriteUser: firebase.firestore.FieldValue.arrayUnion(uid)
            // count: firebase.firestore.FieldValue.increment(-1)
          })

    })
    console.log("huuta")
}
  }
  return (
    <SectionWrapper>
      <ProfileColumn>
        <div>
          <Avatar style={{ margin: "0 auto" }} className={classes.large} src={avatar} />
          {myUserId !== uid &&
                  <Button
              startIcon={favoriteUserArray &&  favoriteUserArray.includes(uid) ? <CheckIcon/> :<FavoriteIcon/>}
          variant={favoriteUserArray &&  favoriteUserArray.includes(uid) ? "contained":"outlined"}
          onClick={addFavoriteUser}
          className={classes.button}
          color="primary">{favoriteUserArray &&  favoriteUserArray.includes(uid) ? "お気に入り済":"ユーザーをお気に入り"}</Button>
          }

        </div>

        <div>
          <Title left min>{username}</Title>
          {profile  ? <Text left>{profile}</Text> : "プロフィールが記述されていません。"}
       </div>
      </ProfileColumn>
      <div className="module-spacer--large" />
      <Title>{username}さんの作品</Title>
              <ul className={classes.listIcon}>

          <Tooltip title="グリッド" interactive>
           <li><GridOnIcon fontSize="large" onClick={() =>setChange(false) } /></li>
        </Tooltip>
        <Tooltip title="短冊まで" interactive>
            <li onClick={()=>setChange(true)} ><ViewColumnIcon  fontSize="large" /></li>
        </Tooltip>
        </ul>
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
