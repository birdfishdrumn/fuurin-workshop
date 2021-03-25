import React, { useState, useEffect, useCallback } from 'react'
import {
  db,FirebaseTimestamp
} from "../../../firebase/index"
import firebase from "firebase/app"
import { useDispatch,useSelector } from "react-redux";
import styles from "templates/module.css/Detail.module.css";
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import { addPostToFavorite } from "../../../reducks/users/operations";
import {FavoriteStyle,FavoriteCount,FavoriteWrapper,FavoriteText} from "./style"
import IconButton from "@material-ui/core/IconButton";
import { ModalOpen } from "../../UI";
import { LIKE, addLike } from "../../../types/likes"
import { getIsSignedIn } from "reducks/users/userSlice";



const Favorite:React.FC<LIKE> = ({id,uid,likesId,post,props,userPost}) => {
  const [openModal,setOpenModal] =useState(false)
  const dispatch = useDispatch()
  console.log(post.name)
  const isSignedIn = useSelector(getIsSignedIn)
   // const uid = useSelector(getUserId)

  const addToFavorite = useCallback((event: any) => {
    if (!userPost) {
      event.stopPropagation()
      const timeStamp = FirebaseTimestamp.now();
      // いいね済みの作品を押した場合削除する
      if (likesId.includes(id)) {
        // returnによって処理を高速化できる
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

          setOpenModal(false)
        })

      }
      // いいねしてない商品をデータベースに追加

      dispatch(addPostToFavorite({
        added_at: timeStamp,
        description: post.description,
        images: post.images,
        allImages: post.allImages,
        name: post.name,
        postId: post.id,
      },uid));

      db.collection("posts").doc(id).set({
        likes: firebase.firestore.FieldValue.arrayUnion(uid),
        count: firebase.firestore.FieldValue.increment(1)
      }, {
        merge: true
      })

      setOpenModal(true)
    }
    }, [likesId])


  return (
    <div>
        <FavoriteWrapper>

        {isSignedIn && (
          <>
                  <IconButton onClick={addToFavorite} style={{paddingRight:"0"}}>

          {<FavoriteStyle isActive = {likesId.includes(id) && true} />
        }

          {!props &&  <FavoriteCount> {post.uid === uid && post.likes ? post.likes.length : <></>}</FavoriteCount>}

                  </IconButton>
            {/* {!props && !userPost && <FavoriteText>いいね！</FavoriteText>} */}
            </>
       )}



  </FavoriteWrapper>
            {!props &&  openModal && <ModalOpen title="お気に入りに登録しました"/>}
    </div>
  )
}

export default Favorite
