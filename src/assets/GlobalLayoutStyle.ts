import styled from "styled-components";


export const GridList = styled.figure `

  ${({ change }) => change ? `

   @media(max-width:767px){
    overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
   }
  `

  : `

 display:grid;
 grid-template-columns:1fr 1fr 1fr;
 grid-gap:20px;
 max-width:1024px;

 text-align:center;
 margin:0 auto;
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
