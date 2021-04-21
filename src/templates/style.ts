import styled, { css } from "styled-components";
import { ScrollMixin } from "assets/GlobalLayoutStyle";
export const DetailWrapper = styled.div`
  margin: 0 auto;
  width: 400px;
 height: auto;
@media(max-width:1024px){
  margin-top:80px;
  width: 90%;
}
`
export const PostTag = styled.ul`
 >li{
  margin:5px;
  background-color: #00008B;
  border-radius: 15px;
  padding: 5px 10px;
  color: white;
  font-weight: bold;
    cursor: pointer;
}

${props => props.top  ? `
     overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      >li{
           display: inline-block;
      }
` : `
  list-style: none;
    align-items: center;
    display: flex;
    flex-flow: wrap;
  margin:0 40px;
`
}
  `

export const CategoryImageWrapper = styled.div`
 position:relative;
  cursor: pointer;
`
export const ImageText = styled.div`
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
`
export const CategoryImage = styled.img`
border-radius:10px;
height:20vh;
width:100%;
object-fit:cover;
`

export const FullScreenWrapper = styled.div`
 width:100vw;
 max-height:110vh !important;
 z-index:999999;
 position:relative;
 margin:-70px 0 -350px;
 padding:0 0 320px 0 ;

 background:white;
 `

export const Max = styled.div`
margin:0 -200% !important;
padding:0 200% !important;
/* background: linear-gradient(#ffffff 0%, #ff6666 100%);
 */
background:${props => props.color};
text-align: center;
margin:100px 0;
`

export const MaxImage = styled(Max)`
  background: linear-gradient(25deg, rgba(0, 0, 0, 0.9), rgba(0, 255, 0, 0.6)) ,url(${props => props.img});
  /* background: linear-gradient(#FF3333, white 40%,#99FF00 ); */
background-size:contain;
background-position: 50% 75%;
@media(max-width:768px){
  background-position: 70% 50%;
}

`

export const TopImageWrapper = styled.img`
max-width:${props=>(props.width)}px !important;
width:100%;
margin:30px auto;
object-fit:cover;
border-radius:${props => (props.circle ? "50%" : "10px")};
@media(max-width:768px){

}
`

export const Flex = styled.div`
display:flex;
justify-content:space-between;
${ScrollMixin};
>div{
  width:350px !important;
  padding:20px;
  background:#eee;
  margin:5px;
  >p{
      width:280px;
      margin:0 auto;
      /* padding:10px; */
  }
}
@media(max-width:768px){
   >div{
     width:300px !important;
       >p{
      width:260px;
      margin:0 auto;
      /* padding:10px; */
  }
   }
}
`

export const TopCarouselWrapper = styled.div`
margin:0 auto;
 width:80%;
 height:80%;
 background:white;
 padding:50px 10px;
box-shadow: 0 0px 10px rgba(0,0,0,0.2);
@media(max-width:768px){
 padding:20px 0px;
  width:95%;
   }
`

export const TopCarouselColumn = styled.div`

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
    >div:first-child{
  flex-basis:35%;

 }
 >div:last-child{
   flex-basis:60%;
   text-align:left;
   margin:0;
 }
 }
`

// -------------------PopulationPost---------------
export const RankingMixin = css`
  position:relative;
  color:red;
  &::after {
   content:"";
   font-size:1.6rem;
   display:  inline-block;
   top:-30px;
   width: 60px;
   height: 60px;
   left: -16px;
    z-index:444;
   /* background-color:white; */
    align-items:center;
    padding:10px 0;
    background-size: contain;
    position:absolute;
  }
`
export const Ranking = styled.div`
:nth-child(1){
>li{
>div:first-child{
>div{
      ${RankingMixin}
        &::after {
      background-image: url("https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/images%2F%E7%8E%8B%E5%86%A0%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png?alt=media&token=e3fb0e6c-59d2-451b-9544-2f6cffbc5311");
        }
  }
}
}}

:nth-child(2){
>li{
>div:first-child{
>div{
       ${RankingMixin}
        &::after {
   background-image: url("https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/images%2F2%E4%BD%8D%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png?alt=media&token=6df0f14d-f55b-472c-a7ec-c7832d0e0cea");
        }
      }
    }
}}

:nth-child(3){
>li{
>div:first-child{
>div{
       ${RankingMixin}
        &::after {
   background-image: url("https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/images%2F3%E4%BD%8D%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png?alt=media&token=1db3743b-2cf2-4eba-948c-0a809696984e");
        }
     }
  }
}}
`
