import React from 'react'
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton,LineIcon,LineShareButton } from 'react-share'
import { Flex } from "assets/GlobalLayoutStyle"
import MenuItem from '@material-ui/core/MenuItem';

import styled from "styled-components"
type Props = {
  url?: string
  handleClose: () => void;
}

const ShareWrapper = styled.div`
margin-bottom:5px;
`

const SNSText = styled.p`
padding:auto 10px;
margin:auto 10px;
`

const Share = ({ url,handleClose }: Props) => {
  return (
    <ShareWrapper>
        <MenuItem onClick={handleClose}>  <TwitterShareButton url={url} >
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

   </ShareWrapper>
  )
 }
export default Share
