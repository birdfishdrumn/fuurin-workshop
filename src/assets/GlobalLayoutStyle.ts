import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
// ----------UI-------------
export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => (props.between ? 'space-between' : 'center')};
  ${(props) =>
    props.cursor &&
    `
 cursor:pointer;
`}
`;
export const WhiteIcon = styled(IconButton)`
  background: white;
  box-shadow: 2px 2px 4px gray;
  margin: ${(props) => (props.noMargin ? '5px' : '15px')};
  @media (max-width: 768px) {
    margin: 10px;
  }
  &:hover {
    background: #33cccc;
    color: white;
    > img {
      color: white;
    }
  }
`;

// -------TEXT----------
export const UnderLineText = styled.span`
  background: linear-gradient(transparent 70%, #ff99cc 70%);
`;
export const Title = styled.h2`
  color: ${(props) => (props.dimgray ? 'dimgray' : '#2F4F4F')};
  margin: 0 auto;
  padding: ${(props) => (props.min ? '10px 0' : '30px 25px 20px 25px')};
  font-weight: bold;
  font-size: ${(props) => (props.min ? '1.3rem' : '1.6rem')};
  text-align: ${(props) => (props.left ? 'left' : 'center')};
  ${(props) =>
    props.firstLetter &&
    `
  ::first-letter {
  font-size: 180%;
  font-style: italic;
  margin-right:5px;
  color:#00CED1;
}
`}
  ${(props) =>
    props.pointer &&
    `
 cursor:pointer;
`}
@media(max-width:768px) {
    font-size: ${(props) => (props.min ? '1.2rem' : '1.5rem')};
  }
`;

export const BackgroundWhiteTitle = styled(Title)`
  padding: 15px;
`;

export const Text = styled.p`
  text-align: ${(props) => (props.left ? 'left' : 'center')};
  margin: 0 15px;
  font-weight: 300;
  color: ${(props) => (props.white ? 'white' : 'dimgray')};
  font-size: ${(props) => (props.large ? '1.2rem' : '1.1rem')};
  padding: 20px 0;
  text-shadow: ${(props) => props.shadow && '1px 1px 2px black'};
  line-height: 1.8rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const MinText = styled.p`
  text-align: ${(props) => (props.left ? 'left' : 'center')};
  margin: 0 15px;
  font-weight: 500;
  color: ${(props) => (props.red ? 'red' : 'dimgray')};
  font-size: 0.9rem;
  padding: ${(props) => (props.nonePadding ? '0' : '10px 0')};
  @media (max-width: 768px) {
    font-size: ${(props) => props.min && '0.8rem'};
  }
`;

export const MainTitle = styled.div`
  font-size: ${(props) => (props.sub ? '2.3rem' : '3rem')};
  font-weight: bold;
  margin: 25px 0;
  color: ${(props) => (props.white ? 'white' : '#2F4F4F')};
  @media (max-width: 768px) {
    font-size: ${(props) => (props.sub ? '1.4rem' : '2.2rem')};
  }
`;
export const Main = styled.div`
  padding: ${(props) => (props.auth ? '70px 0' : '70px 0 0 0 ')};
`;

export const HelpNav = styled.ul`
  list-style: none;
  margin: 10px 0;
  > li {
    padding: 10px 0;
  }
`;

export const BoldText = styled.p`
  font-weight: bolder;
  font-size: ${(props) => (props.min ? '0.8rem' : '1rem')};
  text-align: center;
  color: ${(props) => props.color};
  text-align: ${(props) => props.left && 'left'};
  text-align: ${(props) => props.right && 'right'};
  ${(props) =>
    props.image &&
    `
  width:45%;
  margin:10px auto;
  @media(max-width:768px){
    width:80%;
  }
`};
  ${(props) =>
    props.pointer &&
    `
  cursor:pointer;
`}
`;
export const StyledBoldText = styled(BoldText.withComponent('span'))`
  ${(props) =>
    !props.center &&
    `
    float:left;
  `}
`;

export const RequiredText = styled.span`
  /* display:inline-block; */
  color: white;
  background: ${(props) => (props.gray ? '#C0C0C0' : 'red')};
  padding: 3px;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: bold;
  float: left;
  margin: 0 7px;
  align-items: center;
`;
export const NumberTitle = styled(Title)`
  position: relative;
  padding: 2px 5px 2px 25px;
  margin: 20px 0;
  border-radius: 0 10px 10px 0;
  color: #000044;
  /* ??????????????????????????????????????????????????????????????? */
  :before {
    content: '${(props) => props.content}';
    display: inline-block;
    line-height: 40px;
    position: absolute;
    padding: 0em;
    color: white;
    background: #00ced1;
    font-weight: normal;
    width: 50px;
    text-align: center;
    height: 50px;
    line-height: 40px;
    left: 20px;
    top: 50%;

    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    border: solid 3px white;
    border-radius: 50%;
  }
`;

// ----------------Layout--------------------

export const SectionWrapper = styled.section`
  margin: 70px auto;
  margin-top: 10px;
  max-width: ${(props) => (props.top ? '1224px' : '1024px')};
  position: relative;
  padding: 0 auto;
  text-align: center;
  width: 100%;
`;
export const MaxSectionWrapper = styled.section`
  margin: 70px auto;
  margin-top: 10px;
  /* max-width:${(props) => (props.top ? '1124px' : '1024px')} ; */
  position: relative;
  padding: 0 auto;
  text-align: center;
  width: 100%;
  overflow-x: hidden;

  /* margin:0 0 70px 0; */
`;
export const Container = styled.div`
  margin: 60px auto;
  background: ${(props) => props.color};
  background-image: url(${(props) => props.url});
  height: ${(props) => props.height}px;
  border-radius: 20px;
  padding: 55px;
  max-width: ${(props) => props.width}px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 30px 20px;
  }
`;

export const SectionWrapping = styled.section`
  margin: ${(props) => (props.large ? '80px auto' : '80px auto')};

  max-width: 924px;
  position: relative;
  padding: 0 20px;
  text-align: center;
  width: calc(100% - 2rem);

  background-color: ${(props) => props.white && 'white'};
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const GridList = styled.div`
  ${({ change }) =>
    change
      ? `

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
  `};
  grid-gap: ${(props) => props.gap && '20px'};
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 767px) {
    grid-template-columns: ${(props) => (props.single ? '1fr' : '1fr 1fr')};
    margin: 0;
    grid-gap: 0px;
  }
`;

export const GridLow = styled.div`
  margin: 0 auto;
  @media (min-width: 1024px) {
    width: 1024px;
    display: flex;

    flex-flow: row wrap;
    justify-content: center;
  }
`;

export const SectionContainer = styled.div`
  position: relative;
  margin: ${(props) => (props.margin ? '70px auto' : '0 auto')};
  text-align: center;
  max-width: 500px;
  padding: 5px;
  height: auto;
  width: calc(100% - 2rem);
`;

export const TwoColumn = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SimpleGrid = styled.div`
  margin: 0 auto;
  display: grid;
  max-width: ${(props) => props.two && '700px'};
  grid-gap: ${(props) => (props.two ? '100px' : '60px')};
  grid-template-columns: ${(props) => (props.two ? '1fr 1fr' : '1fr 1fr 1fr')};
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
  > div {
    text-align: center;
  }
`;
// --------------Flex----------------------
export const IconFlex = styled.div`
  display: flex;
  list-style: none;
  justify-content: ${(props) => (props.between ? 'space-between' : 'center')};
  ${(props) =>
    props.nav &&
    `
 justify-content:space-between;
       overflow-x: scroll;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      width:100%;
 `};
  padding: ${(props) => props.padding && '30px'};
  > div {
    /* padding:${(props) => props.padding && '30px'}; */
    margin: 10px 20px;
    cursor: pointer;
    ${({ isActive }) =>
      isActive
        ? `
    color:red;
    `
        : `
    color:dimgray;
    `};
  }
`;

export const ScrollMixin = css`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Scroll = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
`;
export const ScrollItem = styled.li`
  display: inline-block;
  width: ${(props) => props.width && '250px'};
  margin: 10px;
`;

export const ImageFlex = styled.div`
  /* ${ScrollMixin}; */
  display: flex;
  margin: 20px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ScrollFlex = styled.div`
  ${ScrollMixin};
  display: flex;
  > img {
    margin: 20px 40px;
  }
`;
// ????????????????????????????????????????????????????????????????????????????????????

export const PrivacyNav = styled.ol`
  text-align: left;
  margin: 0 15px;
  line-height: 1.7rem;
  padding: 20px;
  color: #444444;
  margin: ${(props) => (props.description ? '0 20px' : '0 15px')};
  @media (max-width: 768px) {
    padding-left: 10px;
  }
  > li {
    margin-bottom: 10px;
  }
  ${(props) =>
    props.nest &&
    `
   padding:0;
   margin-left:10px;
  `}
`;

// ------------???????????????????????????????????????????????????

export const BackgroundWhite = styled.div`
  background: white;
  padding: ${(props) => (props.large ? '30px' : '20px')};
  margin: 0 auto;
  /* max-width:95% !important; */
  box-shadow: ${(props) => !props.noneShadow && '0 0px 10px rgba(0, 0, 0, 0.2)'};
  width: 100% !important;
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ImageWrapper = styled.div`
  margin: 40px auto;
`;

export const HelpButtonWrapper = styled.div`
  width: 100%;
  position: relative;
  /* max-width:380px; */
  margin: 0 auto;
`;

// ????????????????????????????????????????????????????????????
export const ListDesign = styled.ol`
  counter-reset: list;
  list-style-type: none;
  font: 14px/1.6 'arial narrow', sans-serif;
  padding: 0;

  > li {
    position: relative;
    padding: 20px 0 10px 15px;
    margin-left: 20px;
    font-weight: bold;
    font-size: 1.3rem;
    line-height: 30px;
    text-align: left;
    color: #2f4f4f;
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  li:before {
    counter-increment: list;
    content: '';
    display: block;
    position: absolute;
    left: 0px;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: #f6a38b;
    top: 60%;
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
`;

// -------??????????????????????????????????????????????????????

export const StyledImage = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin: 10px;
  @media (max-width: 768px) {
    width: ${(props) => (props.min ? '20%' : '95%')};
    margin: 0 auto;
  }
`;
export const CircleImage = styled.img`
  border-radius: 50%;
  width: 90%;
`;

export const ColorTwitterIcon = styled(TwitterIcon)`
  color: #00aced;
`;

export const ColorInstagramIcon = styled(InstagramIcon)`
  border-radius: 5px;
  padding: 2px;
  color: white;
  background: linear-gradient(to right, #5478f2 0%, #f23f79 60%, orange 100%);
  display: inline-block;
  cursor: pointer;
`;
