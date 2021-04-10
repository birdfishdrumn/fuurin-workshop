import React,{useState,useEffect} from 'react'
import { SearchBox,SearchPopulationNav,HelpButton } from "../components/UI";
import { db, auth } from "../firebase/index";
import firebase from "firebase/app"
import styled from "styled-components"
import {useDispatch} from "react-redux"
import {SectionWrapper,Title,GridList,IconFlex,HelpButtonWrapper} from "assets/GlobalLayoutStyle"
import { PostTag } from "./template_style"
import NotPushAuth from "NotPushAuth"

import { push } from "connected-react-router";
import { TAG } from "types/tag"
import {CATEGORY} from "types/category"

const CategoryImageWrapper = styled.div`
 position:relative;
  cursor: pointer;
 /* height:70%; */
`
const ImageText = styled.div`
 /* height:70%; */
  position:absolute;
  bottom:10%;
  font-size:1.4rem;
  font-weight:bold;
  color:white;
  left:5%;
  text-shadow:1px 2px 2px black;
    @media(max-width:767px){
 font-size:1.2rem;

  }
  /* text-align:center; */
`
const Image = styled.img`

border-radius:10px;
height:20vh;
width:100%;
object-fit:cover;
`

const Search = () => {

  const [tags, setTags] = useState<TAG[]>([]);

  const [categories,setCategories] = useState<CATEGORY[]>([])
   const dispatch = useDispatch()
  useEffect(() => {

    db.collection("tags").get().then((snapshot:firebase.firestore.DocumentData) => {
      const list: any = []
      snapshot.forEach((doc:firebase.firestore.DocumentData) => {
        const data = doc.data()
        list.push(data)

      })
      setTags(list)
    })

  }, [])

  useEffect(() => {
     db.collection("categories").orderBy("order","asc").get().then((snapshot) => {
      const list:any = []
      snapshot.forEach((doc) => {
        const data = doc.data()
        list.push(data)

      })
      setCategories(list)
    })

  }, [])


  console.log(categories)
  return (
    <SectionWrapper>
   <NotPushAuth/>
   <SearchPopulationNav
      />
      <HelpButtonWrapper><HelpButton name="検索システムについて" type="search"/>
            <Title>キーワードから検索</Title></HelpButtonWrapper>

      <SearchBox fullWidth={true} />
      <div className="module-spacer--medium"/>
      <Title>カテゴリーから検索</Title>

      <GridList>
        {categories.map((category) => (

            <CategoryImageWrapper key={category.id} onClick={() => dispatch(push(`/?category=${category.id}`))}>


              <Image src={category.image} />
              <ImageText>{category.name}</ImageText>
            </CategoryImageWrapper>


      ))}
      </GridList>
       <div className="module-spacer--medium" />
      <Title>タグから検索</Title>
      <PostTag>
           {tags.map((t) => (
             <li key={t.id} onClick={()=>dispatch(push(`/?tags=${t.tag}`))}>#{t.tag}</li>
           ))}
          </PostTag>




  </SectionWrapper>

  )
}

export default Search
