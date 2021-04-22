import styled from 'styled-components';
import { BackgroundWhite } from 'assets/GlobalLayoutStyle';
import IconButton from '@material-ui/core/IconButton';
export const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.scroll &&
    `
     @media(max-width:767px){
     display: inline-block;
     };
    `};
`;

export const ColorBox = styled.div`
  width: 50px;
  height: auto;
`;

export const Color = styled.div`
  background: ${(props) => props.color};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  /* height:50px; */
  border-radius: 50%;
  box-shadow: inset 0 0 5px 5px white;
  ${(props) =>
    props.color === 'white' &&
    `
  box-shadow: 1px 1px 5px 1px gray;
  width:40px;
  height:40px;
  `};
  margin: 0 auto;
  ${(props) => props.pointer && `cursor:pointer`};
`;
export const ColorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    flex-basis: 50%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ColorBoard = styled.div`
  background-image: url('https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/tanzaku%2FEe9d0Zhcp5foKJMP?alt=media&token=d7ec1f69-a8d7-4f2f-a8e3-ccc158d5d200');
  border-radius: 30px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 370px; /* 幅を指定する */
  width: 100%;
  padding: 20px;
  margin: 0 auto;
`;

export const SliderWrapper = styled.div`
  scroll-snap-type: x mandatory;
  width: 100%;
  overflow-x: scroll;
  display: flex;
  -webkit-overflow-scrolling: touch; /* スマホ対応のため必須 */
  > div {
    /* scroll-snap-align: center; */

    height: 100%;
    width: 90% !important;
    scroll-snap-align: start;
    flex: none;
    @media (max-width: 768px) {
      margin: 0px;
      width: 100% !important;
    }
  }
`;

export const PalletWrapper = styled.div`
  align-items: center;
  flex-wrap: ${(props) => !props.scroll && 'wrap'};
  padding: 0px 0 20px 0;
  > div {
    margin: ${(props) => (props.noneMargin ? '0' : '12px')};
  }
`;
// https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/tanzaku%2FEe9d0Zhcp5foKJMP?alt=media&token=d7ec1f69-a8d7-4f2f-a8e3-ccc158d5d200

export const PalletBackground = styled.div`
  background-image: url('https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fp0092_s.jpeg?alt=media&token=1b82375c-5730-4f8d-87cc-bbf00366ffce');
  border-radius: 30px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  max-width: 660px; /* 幅を指定する */
  width: 100%;
  ${(props) =>
    props.open
      ? `
      position:fixed;
      bottom: 10px;
      right: 10px;
      z-index:999;
      @media(max-width:768px){
        right:0;
        bottom:35px;
      }
    `
      : `
    margin:100px auto 0;
  `}
`;

export const ColorBackGround = styled(BackgroundWhite)`
  background-image: url('https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fp0259_s.jpeg?alt=media&token=ad927c6c-1ba5-425a-94fe-6ae9814127c5') !important;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;
export const CommentaryIcon = styled(IconButton)`
  position: absolute;
  right: 5px;
  top: 0;
  color: red;
`;
