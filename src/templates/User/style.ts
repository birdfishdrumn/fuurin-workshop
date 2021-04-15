import styled from "styled-components"

export const ProfileColumn = styled.div`
display:flex;
box-shadow: 2px 2px 4px gray;
max-width:924px;
width:90%;
background:white;
padding:40px 20px;
margin:50px auto;
>div:first-child{
  flex-basis:40%;
  @media(max-width:700px){
  margin:0 auto;
    flex-basis:100%;
}
}
>div:last-child{
  /* margin-left:50px; */
  text-align:left;
 flex-basis:60%;
}
@media(max-width:700px){
  flex-direction:column;
    width:90% !important;
}
`
export const Sns = styled.div`
  display:flex;
  justify-content:center;
  margin:10px auto;
  >a{
    margin:10px;
    color:gray;
    &:hover{
      color:black;
    }
  }
`
