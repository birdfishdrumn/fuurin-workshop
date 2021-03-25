import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase/index";
import List from "@material-ui/core/List";
import { getPostsInFavorite,getUserId } from "../reducks/users/userSlice";
import { FavoriteListItem,PostCard,FavoriteUserList } from "../components/PostProduct"
import styles from "./module.css/PostList.module.css";
import { makeStyles } from "@material-ui/core/styles";
import ListIcon from '@material-ui/icons/List';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import Avatar from "@material-ui/core/Avatar"
import GridOnIcon from '@material-ui/icons/GridOn';
import Tooltip from '@material-ui/core/Tooltip';
import { SectionWrapper, ScrollItem, Title, GridList, IconFlex } from "assets/GlobalLayoutStyle"
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

// import { DragDropContext, Droppable } from "react-beautiful-dnd";

const reorder = (
  list,
  startIndex,
  endIndex
) => {

  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        maxWidth: 512,
        width: '100%'
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

}));

const FavoriteList = () => {
     const classes = useStyles();

  const uid = useSelector(getUserId)
  const [change, setChange] = useState<boolean>(false)
  // getPostsInFavoriteの処理により、お気に入りに登録された作品リストをレンダリングされた時点で取得できる。
  const postInFavorite = useSelector(getPostsInFavorite);
  const [sortPost, setSortPost] = useState({ items: postInFavorite })
  console.log(postInFavorite)
  const [favoriteUser, setFavoriteUser] = useState([])
  const [isActive,setIsActive] = useState(false)
  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }
    const items = reorder(
      sortPost.items,
      result.source.index,
      result.destination.index
    );
    // おそらくstateにドラッグできるようにidを採番したものをsetStateした。

    setSortPost({ items });

  };

 useEffect(() => {
  db.collection("users").doc(uid).collection("likeUser").get().then((snapshot)=>{
    const list = []
    snapshot.forEach((doc)=>{
      const data = doc.data()
      console.log(data)
      list.push(data)

    })
      setFavoriteUser(list)
  })
 }, [])
console.log(favoriteUser)
  return (

      <section className="c-section-wrapin">
        <Title>お気に入りリスト</Title>
          <IconFlex>
        <div  onClick={()=>setIsActive(false)} >
          <FavoriteBorderIcon style={{fontSize:"45px"}}/>
          <p>作品</p>
        </div>
          <div onClick={()=>setIsActive(true)}>
          <PeopleAltIcon style={{ fontSize: "45px" }} />
          <p>ユーザー</p>
       </div>
      </IconFlex>
      {!isActive ?
        <>
              <ul className={classes.listIcon}>
          <Tooltip title="グリッド" interactive>
           <li><GridOnIcon fontSize="large" onClick={() =>setChange(false) } /></li>
        </Tooltip>
        <Tooltip title="短冊まで" interactive>
            <li onClick={()=>setChange(true)} ><ViewColumnIcon  fontSize="large" /></li>
        </Tooltip>
        </ul>
           <GridList change={change}>
          {postInFavorite.length > 0 && (
              postInFavorite.map(post =>

                 <ScrollItem>
                  <PostCard
                           change={change}
             favorite
              post={post}
              key={post.id}
              name={post.postId}
                images={post.images}
                allImages={post.allImages}
              id={post.postId}
              description={post.description}
              username={post.username}
              avatar={post.avatar}
              uid={post.uid}
            />
              </ScrollItem>
              )
          )}
          </GridList>
          </>
        :
        <div className="center">
        {favoriteUser.map((user=>(
          <>

            <FavoriteUserList avatar={user.avatar}
              username={user.username}
              profile={user.profile}
              uid={user.uid}
            />
            </>

        )

        ))}
           </div>


}







      <div style={{height:"25vh"}}/>
      </section>
  )
}

export default FavoriteList
