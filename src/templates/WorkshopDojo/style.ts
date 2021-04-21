import styled from "styled-components";
import { Text } from "assets/GlobalLayoutStyle";
// ---------------WorkshopLesson---------------

export const LessonBox = styled.div`
width:100%;
/* height:500px; */
background-color:white;
padding:30px;

`

export const LessonImage = styled.img`
width:350px;
height:350px;
border-radius:50%;
object-fit:cover;
@media(max-width:768px){
  width:100%;
  height:auto;
}
`

export const LessonText = styled(Text)`
width:60%;
margin:0 auto;
padding:10px 0 30px 0;
`

export const LessonWrapper = styled.div`
width:100%;
height:80%;
background:white;
padding:50px 10px;
box-shadow: 0 0px 10px rgba(0,0,0,0.2);
@media(max-width:768px){
  padding:50px 0px;
}

`


export const LessonColumn = styled.div`

  display:flex;
  justify-content:center;
    align-items:center;
    >div{
      margin:0 20px;
    }
    >div:first-child{
      flex-basis:20%;

    }
    >div:last-child{
      flex-basis:60%;
      text-align:left;
    }
    @media(max-width:768px){
      flex-direction:column;
        >div{
          margin:0 10px;
        }
        >div:first-child{
          width:75%;
    }
    }
`

export const ProcessWrapper = styled.div`
  display:flex;
  background:white;
  padding:30px 20px;
  justify-content:space-around;
    box-shadow: 0 0px 10px rgba(0,0,0,0.2);
  margin:40px 0;
  >div:first-child{
    flex-basis:30%;

  }
  >div:last-child{
    flex-basis:50%;
    margin:auto 0;
  }
  @media(max-width:768px){
    flex-direction:column;
  }
`
