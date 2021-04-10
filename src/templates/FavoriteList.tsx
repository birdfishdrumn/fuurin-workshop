import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

import { getPostsInFavorite,getUserId } from "../reducks/users/userSlice";
import { FavoriteListItem,PostCard,FavoriteUserList } from "../components/PostProduct"
import { SectionWrapper, ScrollItem, Title, BoldText,GridList, HelpButtonWrapper} from "assets/GlobalLayoutStyle"
import {POST} from "types/posts"

import { FavoriteNav, ImageStyleChangeIcon, HelpButton} from "components/UI/index"
// import { DragDropContext, Droppable } from "react-beautiful-dnd";

const FavoriteList = () => {


  const uid = useSelector(getUserId)
  const [change, setChange] = useState<boolean>(false)
  // getPostsInFavoriteの処理により、お気に入りに登録された作品リストをレンダリングされた時点で取得できる。
  const postInFavorite:Partial<POST[]> = useSelector(getPostsInFavorite);

  console.log(postInFavorite)

  return (

      <SectionWrapper>
           <HelpButtonWrapper>
           <HelpButton type="favorite" name="お気に入りシステムについて"/>
        <Title>お気に入りリスト</Title>
        </HelpButtonWrapper>
      <FavoriteNav/>


        <ImageStyleChangeIcon setChange={setChange} />

            <div className="module-spacer--small" />
           <GridList change={change}>
          {postInFavorite.length > 0 && (
              postInFavorite.map((post: any) =>

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

      {!postInFavorite.length &&
           <>
             <div className="module-spacer--medium"/>
          <BoldText>お気に入りに登録された作品がありません。</BoldText>
          </>
      }


      <div style={{height:"5vh"}}/>
      </SectionWrapper>
  )
}

export default FavoriteList
