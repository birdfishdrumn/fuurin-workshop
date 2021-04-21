import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { PostCard} from "./index";
import { GridList,Title} from "assets/GlobalLayoutStyle";
import { db } from "firebase/index";
import { POST } from "types/posts";

interface PROPS {
  randomTag: string;
  tags: string[];
  id: string;
   changeRelation?:  (id: string) => void;
};

const RelationPost: React.FC<PROPS> = (props) => {

  const [relationPosts, setRelationPosts] = useState<POST[]>([]);
  let randomTag = props.randomTag;
  const dispatch = useDispatch();

  const fetchRelationPost = (randomTag: string) => {
    return async () => {
      await db.collection("posts").where("tags", "array-contains", randomTag).where("id", "!=", props.id).limit(12).get().then((querySnapshot) => {
        const postList = []
        querySnapshot.forEach((snapshot) => {
          const post = snapshot.data();
          postList.push(post)
        })
        setRelationPosts(postList)
      })
    }
  };
  // もしランダムに設定されたタグに関連する作品があったら取得する。
    useEffect(() => {
      if (randomTag) {
        dispatch(fetchRelationPost(randomTag))
      }
    }, [props.tags]);

  return (
    <section>
      <div className="module-spacer--medium" />
    <GridList>
      {relationPosts.length ?relationPosts.map((relation) => (
        <PostCard
          post = {relation}
          key={relation.id}
          name={relation.name}
          images={relation.images}
          allImages = {relation.allImages}
          id={relation.id}
          description={relation.description}
          username={relation.username}
          avatar={relation.avatar}
          uid={relation.uid}
          changeRelation={props.changeRelation}
          />
      )
      ):<></>
      }
    </GridList>
      {relationPosts.length === 0 && <Title min>関連作品はありません</Title>}
      </section>
  )
}

export default RelationPost
