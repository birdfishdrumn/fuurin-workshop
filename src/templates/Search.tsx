import React,{useState,useEffect} from 'react'
import { SearchBox } from "../components/UI";
import { db } from "../firebase/index";
import styled from "styled-components"
import {useDispatch} from "react-redux"
import {SectionWrapper,Title,GridList,IconFlex} from "assets/GlobalLayoutStyle"
import { PostTag } from "./template_style"
import kingyo from "assets/img/src/marukingyo_svg.jpg"
import { push } from "connected-react-router";
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PopulatePost from "./PopulatePost"
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

  const [tags, setTags] = useState([]);
  const [isActive,setIsActive] = useState<boolean>(false)
  const [categories,setCategories] = useState([])
   const dispatch = useDispatch()
  useEffect(() => {

    db.collection("tags").get().then((snapshot) => {
      const list = []
      snapshot.forEach((doc) => {
        const data = doc.data()
        list.push(data)

      })
      setTags(list)
    })

  }, [])

  useEffect(() => {
     db.collection("categories").orderBy("order","asc").get().then((snapshot) => {
      const list = []
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
      <IconFlex>
        <div  onClick={()=>setIsActive(false)} >
          <SearchIcon style={{fontSize:"45px"}}/>
          <p>検索</p>
        </div>
          <div onClick={()=>setIsActive(true)}>
          <FavoriteIcon style={{ fontSize: "45px" }} />
          <p>人気リスト</p>
       </div>
      </IconFlex>
      {!isActive ?
        <>
            <Title>キーワードから検索</Title>
      <SearchBox fullWidth={true} />
      <div className="module-spacer--medium"/>
      <Title>カテゴリーから検索</Title>

      <GridList>
        {categories.map((category) => (

            <CategoryImageWrapper key={category.id} onClick={() => dispatch(push(`/?category=${category.id}`))}>


              <Image src={kingyo} />
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
          </>

        :

        <>
        <PopulatePost/>
          </>
    }

  </SectionWrapper>

  )
}

export default Search
{/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1153" height="2849" viewBox="0 0 1153 2849">
  <path id="べた塗り_1" data-name="べた塗り 1" class="cls-1" d="M542,252l-29,4-18,2-27,5-21,5-20,6-19,5-17,8-17,10-18,10-16,12-14,9-19,16-16,16-12,14-11,14-12,15-10,20-12,21-9,24-5,17-4,20-1,20,1,25,5,22,2,21,5,23,3,20,7,19,6,15,14,22,14,19,14,18,14,16,16,17,4,5,215,5,114,1,109,6,26-20,20-16,14-18,13-16,9-13,7-12,6-13,5-12,7-14,5-15,7-23,4-17,4-17,1-20V537l-2-17-1-14-3-15-3-11-5-16-6-14-6-16-3-8-7-11-7-10-7-11-6-9-11-13-11-11-14-15-12-10-12-9-21-14-16-10-15-9-19-8-21-8-20-7-19-5-19-3-16-5-12-4-2-5-9-1v-4l-8,1h-8l-8-2-7-2h-5Z"/>
</svg> */}
