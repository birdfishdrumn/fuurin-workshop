import React, { useState, useEffect } from 'react'
import { FavoriteUserList } from "../components/PostProduct"
import {getUserId } from "reducks/users/userSlice"
import {db} from "firebase/index"
import { useSelector,useDispatch } from "react-redux";
import { SectionWrapper,Title,BoldText } from "assets/GlobalLayoutStyle";
import { FavoriteNav } from "components/UI/index"
import { showLoadingAction,hideLoadingAction } from "reducks/loadingSlice";


const FavoriteUser = () => {
  const uid = useSelector(getUserId)
  const dispatch = useDispatch()
  const [favoriteUser, setFavoriteUser] = useState([])
  useEffect(() => {
     dispatch(showLoadingAction("loading"))
  db.collection("users").doc(uid).collection("likeUser").get().then((snapshot)=>{
    const list = []
    snapshot.forEach((doc)=>{
      const data = doc.data()
      console.log(data)
      list.push(data)

    })
    setFavoriteUser(list)
    dispatch(hideLoadingAction())
  })
 }, [])
  return (

    <SectionWrapper>
          <Title>お気に入りリスト</Title>
             <FavoriteNav/>
        {favoriteUser.length ? favoriteUser.map((user=>(
            <FavoriteUserList avatar={user.avatar}
              username={user.username}
              profile={user.profile}
              uid={user.uid}
          />

        )


        ))
    :
        <>
             <div className="module-spacer--medium"/>
          <BoldText>お気に入りに登録されたユーザーがいません。</BoldText>
          </>

      }
           </SectionWrapper>

  )
}

export default FavoriteUser
