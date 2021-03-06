import styled, { css } from 'styled-components';

type TextColorStyle = 'default' | 'white' | 'blue' | 'pink';
type TextFontStyle = 'StdN' | 'Mincho' | 'default' | 'Ryumin' | 'Wawati';
export interface StyleProps {
  textstyle?: TextColorStyle | any;
  fontstyle?: TextFontStyle | any;
}

function getTextFont(style: TextFontStyle = 'default') {
  switch (style) {
    case 'default':
      return css`
        font-family: 'ヒラギノ角ゴシック', 'Hiragino Sans';
      `;
    case 'StdN':
      return css`
        font-family: '游ゴシック体', 'YuGothic', '游ゴシック', 'Yu Gothic', 'ヒラギノ角ゴ Pro W3',
          'Hiragino Kaku Gothic Pro', 'メイリオ', 'Meiryo', sans-serif;
      `;
    case 'Mincho':
      return css`
        font-family: 'ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', 'ＭＳ Ｐ明朝', 'MS PMincho',
          serif;
      `;
  }
}

function getTextColor(style: TextColorStyle = 'default') {
  switch (style) {
    case 'default':
      return css`
        color: #000;
        text-shadow: 1px 1px 4px white;
      `;
    case 'white':
      return css`
        color: white;
        text-shadow: 1px 1px 4px black;
      `;
    case 'blue':
      return css`
        color: blue;
        text-shadow: 1px 1px 4px white;
      `;
    case 'pink':
      return css`
        color: pink;
        text-shadow: 1px 1px 4px white;
      `;
  }
}

const TextStyle = css`
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  position: absolute;
  top: 337px; //短冊の願い事の位置調整
  left: 37%;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 900;
  height: 240px;
  ${(props: StyleProps) => getTextFont(props.fontstyle)};

  ${(props: StyleProps) => getTextColor(props.textstyle)};
  ${(props) => {
    switch (props.textLength) {
      case 'short':
        return `
        font-size:1.2rem;
      top:337px;
        left:43.5%;`;
      case 'first':
        return ` left:45.5%;`;
      case 'second':
        return ` left:41%;`;
      case 'third':
        return ` left:37%;`;
    }
    return 'left:43%;';
  }}
`;

export const StyledText = styled.p`
  ${TextStyle};
`;

export const Svg = styled.svg`
  filter: drop-shadow(3px 3px 3px #000);
`;
export const SvgContainer = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: 250px;
  width: 100%;

  > div:first-child {
    position: absolute;

    /* box-shadow:1px 1px 2px black; */
    left: 27px;
    top: 63px;
  }
  /* 短冊の位置 */
  > div:nth-child(2) {
    position: absolute;
    left: 24px;
    top: 303px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    width: 250px;
  }
`;
export const ImageContainer = styled.div`
  /* position:absolute; */

  height: auto;
  /* margin-bottom:500px; */
  z-index: -1;
`;
export const ImagePallet = styled.div`
  /* width:50px;
height:50px; */
  object-fit: cover;
  ${(props) =>
    props.svg &&
    `
margin:0 auto;

`}
`;
export const Flex = styled.div`
  width: 100% !important;
  display: grid;
  grid-template-columns: ${(props) => (props.shape ? 'repeat(5, 1fr)' : 'repeat(auto-fill,40px)')};
`;

export const Image = styled.img`
  object-fit: cover;
  width: 50px;
  height: 50px;

  ${(props) =>
    props.svg &&
    `
background:#eee;
cursor:pointer;
margin:5px;
border-radius:10px;
`}
`;
export const Text = styled.p`
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  position: absolute;
  top: 300px;
  left: 35%;
  text-align: left;
  text-shadow: 1px 1px 4px black;
  font-size: 0.8rem;
  font-weight: bold;
  height: 240px;
  /* color:black; */
  color: ${(props) => props.second && 'red'};
`;
export const Color = styled.div`
  width: 50px;
  height: 50px;
  background: ${(props) => props.color};
`;
