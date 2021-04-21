import React, { useCallback } from 'react';
import {
  db, FirebaseTimestamp
} from "firebase/index";
import firebase from "firebase/app";
import { useDispatch,useSelector } from "react-redux";
import { addPostToFavorite } from "reducks/users/operations";
import { FavoriteStyle, FavoriteCount, FavoriteWrapper } from "./style";
import IconButton from "@material-ui/core/IconButton";
import { FAVORITE } from "types/likes";
import { getIsSignedIn } from "reducks/users/userSlice";
import { dialogOpenAction } from "reducks/dialog/dialogSlice";


const Favorite:React.FC<Partial<FAVORITE>> = ({id,uid,likesPostsArray,post,detail}) => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(getIsSignedIn);


  const addToFavorite = useCallback((event: any) => {
    // if (!userPost) {
    event.stopPropagation();
    const timeStamp = FirebaseTimestamp.now();
    // いいね済みの作品を押した場合削除する
    if (likesPostsArray.includes(id)) {
      return db.collection("users").doc(uid).collection("likes").where("postId", "==", id).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const dataId = doc.data().likesId
          return db.collection("users").doc(uid)
            .collection('likes').doc(dataId)
            .delete()
        })
      }).then(() => {
        db.collection("posts").doc(id).update({
          likes: firebase.firestore.FieldValue.arrayRemove(uid),
          count: firebase.firestore.FieldValue.increment(-1)
        })
      })
    };
    // いいねしてない商品をデータベースに追加
    dispatch(addPostToFavorite({
      added_at: timeStamp,
      description: post.description,
      images: post.images,
      allImages: post.allImages,
      name: post.name,
      postId: post.id,
    }, uid));
    // 投稿に1カウントしていいねしたuidを追加する。
    db.collection("posts").doc(id).set({
      likes: firebase.firestore.FieldValue.arrayUnion(uid),
      count: firebase.firestore.FieldValue.increment(1)
    }, {
      merge: true
    })
    detail && dispatch(dialogOpenAction({ type: "favoriteAction", title: "作品をお気に入りに登録" }))
    　
    // }
  }, [likesPostsArray]);


  return (
    <div>
      <FavoriteWrapper>
        {isSignedIn && (
          <>
          <IconButton onClick={addToFavorite} style={{paddingRight:"0"}}>
            <FavoriteStyle isActive = {likesPostsArray.includes(id) && true} />

            <FavoriteCount> {post.uid === uid && post.likes ? post.likes.length : <></>}</FavoriteCount>

          </IconButton>
            </>
        )}
      </FavoriteWrapper>
    </div>
  )
}

export default Favorite
