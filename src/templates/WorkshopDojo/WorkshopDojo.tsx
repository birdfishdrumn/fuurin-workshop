import React from 'react'
import {SectionWrapping,Title,Text} from "assets/GlobalLayoutStyle"
import styled from "styled-components"
import { Link } from 'react-router-dom'

const LessonWrapper = styled.div`
 width:100%;
 height:80%;
 background:white;
 padding:50px 25px;

`
const StyledLink = styled(Link)`
 text-decoration:none;
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

const WorkShopDojo = () => {
  return (

    <SectionWrapping>
      <Title>絵付け体験道場</Title>
      <div className="module-spacer--medium" />
      <LessonWrapper>
        <StyledLink to="/lesson">
        <LessonColumn>
          <div>
           <img src =""/>
          </div>
          <div>
            <Title left>Lesson 1</Title>
            <Title left> 金魚の描き方</Title>
            <Text left>風鈴の花形である金魚の描き方の説明を致します。これをマスターしてカッコイイ金魚を描こう！</Text>
          </div>
        </LessonColumn>
       </StyledLink>
      </LessonWrapper>
      <div className="module-spacer--medium" />
           <LessonWrapper>
        <LessonColumn>
          <div>
           <img src =""/>
          </div>
          <div>
            <Title left>Lesson 2</Title>
            <Title left> 花火の描き方</Title>
            <Text left>風鈴の花形である金魚の描き方の説明を致します。これをマスターしてカッコイイ金魚を描こう！</Text>
          </div>
        </LessonColumn>

      </LessonWrapper>
      <div className="module-spacer--medium" />
           <LessonWrapper>
        <LessonColumn>
          <div>
           <img src =""/>
          </div>
          <div>
            <Title left>Lesson 3</Title>
            <Title left> 赤玉の描き方</Title>
            <Text left>風鈴の花形である金魚の描き方の説明を致します。これをマスターしてカッコイイ金魚を描こう！</Text>
          </div>
        </LessonColumn>

      </LessonWrapper>
    </SectionWrapping>
  )
}

export default WorkShopDojo
