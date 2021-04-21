import React,{useState,useEffect} from 'react'
import { SearchBox,SearchPopulationNav } from "../components/UI";
import { db } from "../firebase/index";
import firebase from "firebase/app";
import { useDispatch } from "react-redux";
import { SectionWrapper, Title, GridList } from "assets/GlobalLayoutStyle";
import { PostTag,CategoryImageWrapper,ImageText,CategoryImage } from "./style";
import NotPushAuth from "NotPushAuth";
import { push } from "connected-react-router";
import { TAG } from "types/tag";
import { CATEGORY } from "types/category";


const Search = () => {
  const [tags, setTags] = useState<TAG[]>([]);
  const [categories,setCategories] = useState<CATEGORY[]>([])
   const dispatch = useDispatch()
  useEffect(() => {
    db.collection("tags").get().then((snapshot: firebase.firestore.DocumentData) => {
      const list: any = []
      snapshot.forEach((doc: firebase.firestore.DocumentData) => {
        const data = doc.data()
        list.push(data)
      })
      setTags(list)
    })
  }, []);

  useEffect(() => {
    db.collection("categories").orderBy("order", "asc").get().then((snapshot) => {
      const list: any = []
      snapshot.forEach((doc) => {
        const data = doc.data()
        list.push(data)
      })
      setCategories(list)
    })
  }, []);


  return (
    <SectionWrapper>
      <NotPushAuth />

      <SearchPopulationNav

      />

        <Title>キーワードから検索</Title>

      <SearchBox/>

      <div className="module-spacer--medium" />

      <Title>カテゴリーから検索</Title>
      <GridList>
          {categories.map((category) => (
              <CategoryImageWrapper key={category.id} onClick={() => dispatch(push(`/timeline/?category=${category.id}`))}>
                <CategoryImage src={category.image} />
                <ImageText>{category.name}</ImageText>
              </CategoryImageWrapper>
          ))}
      </GridList>

      <div className="module-spacer--medium" />

      <Title>タグから検索</Title>
        <PostTag>
            {tags.map((t) => (
              <li key={t.id} onClick={()=>dispatch(push(`/timeline/?tags=${t.tag}`))}>#{t.tag}</li>
            ))}
        </PostTag>
    </SectionWrapper>
  )
}

export default Search
