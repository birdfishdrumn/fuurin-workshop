import styled from "styled-components";
import { Link } from 'react-router-dom'
import IconButton from "@material-ui/core/IconButton"

export const StyledLink = styled(Link)`
 text-decoration:none;
`

export const SectionWrapper = styled.section`
    margin: 70px auto;
    margin-top: 10px;
    max-width:${props=>(props.top ? "1224px" : "1024px")};
    position: relative;
    padding: 0 auto;
    text-align: center;
    width: 100%;
    /* overflow-x: hidden; */

    /* margin:0 0 70px 0; */
`
export const MaxSectionWrapper = styled.section`
    margin: 70px auto;
    margin-top: 10px;
    /* max-width:${props=>(props.top ? "1124px" : "1024px")} ; */
    position: relative;
    padding: 0 auto;
    text-align: center;
    width: 100%;
    overflow-x: hidden;

    /* margin:0 0 70px 0; */
`
export const Container = styled.div`
  margin: 70px auto;
  max-width:${(props) => props.width}px;
  @media(max-width:768px){
    width:85%;
  }
`


export const SectionWrapping = styled.section`
    margin:${props=>(props.large ? "80px auto":"80px auto")};

    max-width: 924px;
    position: relative;
    padding: 0 20px;
    text-align: center;
    /* width: 100%; */
     width: calc(100% - 2rem);

     background-color:${props => (props.white && "white")};
     @media(max-width:768px){
       padding: 0;
     }
`



export const GridList = styled.div `

  ${({ change }) => change ? `

   @media(max-width:767px){
    overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
   }
  `

  : `
list-style:none;
 display:grid;
 grid-template-columns:1fr 1fr 1fr 1fr;
 grid-gap:20px;
 max-width:1124px;
 text-align:center;
 margin:0 auto;
//  cursor:pointer;
//    height:70%; >div{

//  }
  `


  };
    grid-gap:${props => (props.gap && "20px")};
 @media(max-width:1024px){
 grid-template-columns:1fr 1fr 1fr;
 }
 @media(max-width:767px){
 grid-template-columns:${props=>(props.single ? "1fr":"1fr 1fr")};
 margin:0;
 }
`

export const GridLow = styled.div`
    margin:0 auto;
    @media(min-width:1024px){
       width:1024px;
         display: flex;

    flex-flow: row wrap;
    justify-content: center;
    }

`
export const Flex = styled.div`
display:flex;
justify-content:${props => (props.between ? "space-between" : "center")};

`

export const SimpleGrid = styled.div`

    margin:0 auto;
         display: grid;
         max-width:${props=>(props.two && "600px")};
         grid-gap:${props=>(props.two ? "100px":"60px")};
      grid-template-columns:${props=>(props.two ? "1fr 1fr" : "1fr 1fr 1fr")};
       @media(max-width:767px){
 grid-template-columns:1fr;
 }
 >div{
    text-align:center;

 }


`

export const IconFlex = styled.div`
display:flex;
list-style:none;
justify-content:${props => (props.between ? "space-between" : "center")};
 ${props => props.nav && `
 justify-content:space-between;
       overflow-x: scroll;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      width:100%;
 `};
      padding:${props=>(props.padding && "30px")};
>div{
       /* padding:${props=>(props.padding && "30px")}; */
  margin:10px 30px;
  cursor:pointer;
    ${({ isActive }) => isActive ? `
    color:red;
    `
  :
  `
    color:dimgray;
    `
};

}
`

//   ${props => props.custom && `
//     display:inline-block;
//   color: black;/*文字色*/
//   padding: 0.5em 0;/*上下の余白*/
//   border-top: solid 3px #ccc;/*上線*/
//   border-bottom: solid 3px #ccc;/*下線*/
//   // background: #ccc;
//   padding-left:10px;
//   padding-right:10px;
//  `}

export const Title = styled.h2`

color:${props => (props.dimgray ? "dimgray" : "black")};
  margin:0 auto;
  padding:${props => (props.min ? "20px 0" :"30px 25px 20px 25px"  )};
  /* margin:10px; */
  font-weight:bold;
  font-size:${props =>(props.min ? "1.1rem" : "1.5rem" )};
text-align:${props => (props.left ? "left" : "center")};
${props => props.pointer && `
 cursor:pointer;
`}
/* background-color:white: */
`

export const Scroll = styled.div `
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
`
export const ScrollItem = styled.li `
     display: inline-block;
     width:${props=>(props.width && "250px")};
     margin:10px;
`

export const SectionContainer = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 400px;
    padding: 1rem;
    height: auto;
    width: calc(100% - 2rem);
`


export const TwoColumn = styled.div`
  display:flex;
  @media(max-width:768px){
    flex-direction:column;
  }
`

export const MainTitle = styled.div`
 font-size:${props=>(props.sub ? "2.3rem" : "3rem")};
 font-weight:bold;
 color:${props=>(props.white && "white")};
  @media(max-width:768px){
    font-size:${props=>(props.sub ? "1.7rem" : "2.5rem")};
  }
`

export const Main = styled.div`
       padding: ${props=>(props.auth ? "70px 0" : "70px 0 0 0 ")};

`

export const Text = styled.p`

 text-align:${props => (props.left ? "left" : "center")} ;
 margin:0 15px;
 font-weight:600;
 color:${props=>(props.white ? "white" : "dimgray")};
 font-size:${props=>(props.large ? "1.2rem" : "1.1rem")};
 padding:20px 0;
`
export const  HelpNav = styled.ul`
 list-style:none;
 margin:10px 0;
>li{
  padding:10px 0;
}
`

export const BoldText = styled.p`
font-weight:bolder;
font-size:${props => (props.min ? "0.7rem" : "0.95rem")};
text-align:center;
color:${props => props.color};
 text-align:${props => (props.left && "left")} ;
 text-align:${props => (props.right && "right")} ;
 ${props => props.image && `
   width:45%;
   margin:10px auto;
   @media(max-width:768px){
     width:80%;

   }
 `};
`
export const StyledBoldText= BoldText.withComponent('span')


export const BackgroundWhite = styled.div`
 background:white;
 padding:${props => (props.large ? "30px" : "20px")};
 margin:0 auto;
 /* max-width:95% !important; */
  box-shadow: 0 0px 10px rgba(0,0,0,0.2);
 width:100% !important;
 border-radius:10px;

`
export  const PrivacyNav = styled.ol`
  text-align:left;
  margin:0 15px;
  line-height:2.0rem;
  padding:20px;
  color:#444444;
  margin:${props => (props.description ? "0 30px" : "0 15px")};
  @media(max-width:768px){
    padding:0;
  }
`
export const WhiteIcon = styled(IconButton)`
 background:white;
  box-shadow: 2px 2px 4px gray;
margin:${props => (props.noMargin ? "5px" : "15px")};

`
export const ImageWrapper = styled.div`
 margin:40px auto;
`
export const CircleImage = styled.img`
 border-radius:50%;
`
export const HelpButtonWrapper = styled.div`
width:90%;
max-width:380px;
margin:0 auto;
`
