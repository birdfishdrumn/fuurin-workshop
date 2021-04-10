import styled from "styled-components"

export const ColorContainer = styled.div`
  display:flex;
  align-items:center;
    ${props => props.scroll && `
     @media(max-width:767px){
     display: inline-block;
     };
    `};

`

export  const ColorBox= styled.div`
 width:50px;
 height:auto;
`


export  const Color = styled.div`
  background:${props => (props.color)};
  width:${props=>(props.size)}px;
  height:${props=>(props.size)}px;
  /* height:50px; */
  border-radius:50%;
   box-shadow: inset 0 0 5px 5px white;
  ${props => (props.color === "white" && `
  box-shadow: 1px 1px 5px 1px gray;
  width:40px;
  height:40px;
  `
)};
   margin:0 auto;
   ${props=>props.pointer && `cursor:pointer`};

`
