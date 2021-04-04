import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

import { getPostsInFavorite,getUserId } from "../reducks/users/userSlice";
import { FavoriteListItem,PostCard,FavoriteUserList } from "../components/PostProduct"
import styles from "./module.css/PostList.module.css";
import { makeStyles } from "@material-ui/core/styles";

import { SectionWrapper, ScrollItem, Title, GridList, HelpButtonWrapper} from "assets/GlobalLayoutStyle"

import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { FavoriteNav, ImageStyleChangeIcon, HelpButton} from "components/UI/index"
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



  return (

      <SectionWrapper>
           <HelpButtonWrapper>
           <HelpButton type="favorite" name="お気に入りシステムについて"/>
        <Title>お気に入りリスト</Title>
        </HelpButtonWrapper>
      <FavoriteNav/>

        <>
        <ImageStyleChangeIcon setChange={setChange} />

           <div className="module-spacer--small" />
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


      <div style={{height:"25vh"}}/>
      </SectionWrapper>
  )
}

export default FavoriteList
