import React from 'react'
import {SectionWrapping,Title,Text} from "assets/GlobalLayoutStyle"
import styled from "styled-components"
import Swiper from 'react-id-swiper';
  import Kingyo from "assets/img/src/marukingyo_svg.jpg"
const LessonWrapper = styled.div`
 width:100%;
 height:80%;
 background:white;
 padding:50px 25px;

`

const LessonColumn = styled.div`
  display:flex;
 >div:first-child{
  flex-basis:40%
 }
 >div:last-child{
   flex-basis:50%
   text-align:left;
 }
`
const LessonBox = styled.div`
width:90%;
height:500px;
background-color:white;
padding:30px;
`

const LessonImage = styled.img`
width:350px;
height:350px;
border-radius:50%;
`

const WorkShopDojo = () => {
      const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    }
  return (

    <SectionWrapping>
      <Title>絵付け体験道場</Title>
      <div className="module-spacer--medium" />
         <Swiper {...params}>
        <LessonBox>
          <LessonImage src={Kingyo}/>
        </LessonBox>
        <LessonBox></LessonBox>
        <LessonBox></LessonBox>
        <LessonBox></LessonBox>

      </Swiper>

    </SectionWrapping>
  )
}

export default WorkShopDojo
