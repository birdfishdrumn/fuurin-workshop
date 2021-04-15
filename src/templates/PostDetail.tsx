import React, { useEffect, useState } from 'react';
import PostDetailModule from "components/PostProduct/PostDetailModule";
import NotPushAuth from "NotPushAuth";

const PostDetail = () => {
  const postId = window.location.pathname.split("/post/")[1];
  const [id, setId] = useState<string>(postId);

// postIdが切り替わるたび、再レンダリングをして新しいデータを取得する。
  useEffect(() => {
    setId(id)
  }, [postId]);

  return (
    <div>
      <NotPushAuth/>
      <PostDetailModule productId={id} template/>
    </div>
  )
}

export default PostDetail
