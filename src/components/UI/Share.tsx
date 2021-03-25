import React from 'react'
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton,LineIcon,LineShareButton } from 'react-share'
import { Flex } from "assets/GlobalLayoutStyle"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components"
type Props = {
  text: string
  url?: string
}

const ShareWrapper = styled.div`
margin-bottom:5px;
`

const SNSText = styled.p`
padding:auto 10px;
margin:auto 10px;

`

const Share = ({ text, url }: Props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ShareWrapper>
      <IconButton onClick={handleClick}>
        <ShareIcon/>
     </IconButton>
         <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>  <TwitterShareButton url={url} title={text}>
          <Flex>
            <TwitterIcon size={32} round={true} /><SNSText>Twitterでシェア</SNSText>
            </Flex>
        </TwitterShareButton></MenuItem>
        <MenuItem onClick={handleClose}>  <FacebookShareButton url={url}>
          <Flex>
            <FacebookIcon size={32} round={true} />
            <SNSText>Facebookでシェア</SNSText>
          </Flex>

        </FacebookShareButton></MenuItem>
        <MenuItem onClick={handleClose}>


          <LineShareButton url={url}>
            <Flex>
              <LineIcon size={32} round={true} />
               <SNSText>Lineでシェア</SNSText>
             </Flex>

        </LineShareButton></MenuItem>




   </Menu>
   </ShareWrapper>
  )
 }
export default Share
