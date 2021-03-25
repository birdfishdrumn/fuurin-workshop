import styled from "styled-components";
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
 text-decoration:none;
`

export const SectionWrapper = styled.section`
    margin: 70px auto;
    margin-top: 10px;
    max-width:${props=>(props.top ? "1124" : "1024px")} ;
    position: relative;
    padding: 0 auto;
    text-align: center;
    width: 100%;

    /* margin:0 0 70px 0; */
`
export const SectionWrapping = styled.section`
    margin: 40px auto;

    max-width: 824px;
    position: relative;
    padding: 0 20px;
    text-align: center;
    /* width: 100%; */
     width: calc(100% - 2rem);

     background-color:${props=>(props.white && "white")};
     /* box-shadow:1px 1px 1px 1px dimgray; */
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
    /* @media screen and (min-width:768px) and ( max-width:1024px){
      width:768px;
         display: flex;
    flex-flow: row wrap;
    justify-content: center;
    } */

`
export const Flex = styled.div`
display:flex;
justify-content:${props => (props.between ? "space-between" : "center")};

`

export const IconFlex = styled.div`
display:flex;
justify-content:${props => (props.between ? "space-between" : "center")};

>div{
  margin:10px 50px;
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

export const Title = styled.h2`

color:${props => (props.black ? "black" : "dimgray")};
  margin:0 auto;
  padding:10px;
  margin:10px;
  font-weight:bold;
  font-size:${props =>(props.min ? "1.2rem" : "1.5rem" )};
text-align:${props => (props.left ? "left" : "center")};
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
 font-size:3rem;
 font-weight:bold;
  @media(max-width:768px){
    flex-direction:column;
  }
`

export const Main = styled.div`
       padding: ${props=>(props.auth ? "70px 0" : "70px 0 0 0 ")};

`

export const Text = styled.p`
 text-align:${props => (props.left ? "left" : "center")} ;
 margin-left:20px;
 font-weight:600;
 color:dimgray;
 font-size:${props=>(props.large ? "1.2rem" : "1.1rem")};

`
export const  HelpNav = styled.ul`
 list-style:none;
 margin:10px 0;
>li{
  padding:10px 0;
}
`
