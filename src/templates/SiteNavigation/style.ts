import styled from "styled-components";

export const HelpNav = styled.ul`
 list-style:none;
 margin:10px 0;
>li{
  padding:10px 0;
}
`

export const TwoColumn = styled.div`
 display:flex;
 justify-content:space-between;
 >div:first-child{
   flex-basis:60%;
 }
 >div:last-child{
   flex-basis:35%;
 }
 @media(max-width:768px){
   flex-direction:column;
  >div:last-child{
   margin:20px 0;
 }
 }
`
