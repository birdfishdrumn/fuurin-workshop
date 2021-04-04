import React,{useEffect,useState} from 'react'
import PostDetailModule from "components/PostProduct/PostDetailModule"
import NotPushAuth from "NotPushAuth"
import {useDispatch} from "react-redux"

const PostDetail = () => {
  const postId = window.location.pathname.split("/post/")[1];
  const [id, setId] = useState(postId)
  const dispatch = useDispatch()
 console.log(postId)

useEffect(() => {
setId(id)

}, [postId])

  return (
    <div>
      <NotPushAuth/>
      <PostDetailModule productId={id} template/>
    </div>
  )
}

export default PostDetail
