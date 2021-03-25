import styled, { css } from "styled-components"

type TextColorStyle = 'default' | 'white' | 'blue' | 'pink';

export interface StyleProps {
  textstyle?: TextColorStyle | any;
}

function getTextColor(style: TextColorStyle = 'default') {
  switch (style) {
    case 'default':
      return css`
       color:#000;
        text-shadow:1px 1px 4px white;
       `;
    case 'white':
      return css`
      color:white;
       text-shadow:1px 1px 4px black;
      `;
    case 'blue':
      return css`
      color:blue;
       text-shadow:1px 1px 4px white;
      `;
      case 'pink':
      return css`
      color:pink;
       text-shadow:1px 1px 4px white;
      `;
  }
}

const TextStyle = css`
    -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  position:absolute;
  top:300px;
  left:35%;
  text-align:left;

  font-size:0.8rem;
  font-weight:bold;
  height:240px;
  /* color:black; */
  color:${props=>(props.second && "red")};
    ${(props: StyleProps) => getTextColor(props.textstyle)};
     ${props => {
   switch (props.textLength) {
            case "short":
         return `
           font-size:1.2rem;
         top:312px;
        left:41.5%;`
      case "first":
        return ` left:43%;`
      case "second":
          return ` left:40%;`
       case "third":
        return ` left:35%;`
    }
    return "left:43%;"
}};
`

export const StyledText = styled.p`

  ${TextStyle};
`;



//  const NormalText = props => {
//   return <StyledText {...props} />;
// };

export const Svg = styled.svg`
  filter: drop-shadow(3px 3px 3px #000);

`
export const SvgContainer = styled.div`
margin:0 auto;
 position:relative;
 max-width:250px;
 width:100%;

 >div:first-child{
   position:absolute;

   /* box-shadow:1px 1px 2px black; */
left:28px;
top:37px;

 }
  >div:nth-child(2){
   position:absolute;

   /* box-shadow:1px 1px 2px black; */
left:18.5px;
top:265px;

 }
 @media(max-width:768px){
    max-width:100%;
    width:250px;
 }
`
export const ImageContainer = styled.div`

/* position:absolute; */

height:auto;
/* margin-bottom:500px; */
z-index:-1;
`
export const ImagePallet = styled.div`
/* width:50px;
height:50px; */
object-fit:cover;
`
export const Flex = styled.div`
display:grid;
grid-template-columns:  1fr 1fr 1fr 1fr;
`
export const Image = styled.img`
object-fit:cover;
width:50px;
height:50px;
`
export const Text = styled.p`
    -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  position:absolute;
  top:300px;
  left:35%;
  text-align:left;
  text-shadow:1px 1px 4px black;
  font-size:0.8rem;
  font-weight:bold;
  height:240px;
  /* color:black; */
  color:${props=>(props.second && "red")};
`
export const Color = styled.div`
 width:50px;
 height:50px;
 background:${props=>props.color};
   /* ${props => {
    switch (props.color) {
      case "white":
        return `background:white !important;`
      case "blue":
        return `background:blue;`
    }
    return "background:black;"
}}; */
`
