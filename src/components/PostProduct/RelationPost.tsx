import React, { useEffect,useState }  from 'react'
import { useDispatch, useSelector } from "react-redux";
import { PostCard} from "./index";
import { GridList,Title} from "assets/GlobalLayoutStyle";
import { db} from "../../firebase";
// import { getPosts } from "../reducks/posts/
interface PROPS {
  randomTag: string;
  tags: string[];
  id: string;
   changeRelation?:  (id: string) => void;

}

const RelationPost:React.FC<PROPS> = (props) => {
  let randomTag = props.randomTag
  const dispatch = useDispatch()
  const [relationPosts,setRelationPosts] = useState([])

  const fetchRelationPost = (randomTag) => {
    return async () => {
      await db.collection("posts").where("tags", "array-contains", randomTag).where("id","!=",props.id).limit(12).get().then((querySnapshot) => {
          const postList = []
        querySnapshot.forEach((snapshot) => {
          const post = snapshot.data();
          postList.push(post)
        })
        setRelationPosts(postList)
      })
    }
  }

    useEffect(() => {
      if (randomTag) {
        dispatch(fetchRelationPost(randomTag))
      }
    }, [props.tags]);

  // const clearThisPost = relationPosts
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
          // relation
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
