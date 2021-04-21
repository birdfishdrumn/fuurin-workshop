import React from 'react'
import { BackgroundWhite,SectionWrapping,BoldText,IconFlex } from "assets/GlobalLayoutStyle";
import styled from "styled-components"
import { useHistory } from 'react-router-dom'

const NavImageContainer = styled.div`
 display: inline-block;

`
const NavImage = styled.img`
 width:45px !important;
 height:45px !important;
 margin:0 auto !important;

`


const SiteMapNav = () => {
  const history = useHistory()
    const toChange = (link: string) => {
    // 2. ./homeに遷移
    history.push(link)
  }
  return (
    <div>
      <SectionWrapping>
        <BackgroundWhite>
          <IconFlex padding nav>
              <NavImageContainer onClick={()=>toChange("/help")}>
                <NavImage src="https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2F%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%81%E3%83%A7%E3%83%B3%E3%83%9E%E3%83%BC%E3%82%AF.png?alt=media&token=2675cdfd-6870-439d-b9b3-15525bfddfc9" />
                <BoldText min>ヘルプ</BoldText>
              </NavImageContainer>
              <NavImageContainer onClick={()=>toChange("/terms")}>
                <NavImage src="https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2F%E6%96%87%E7%AB%A0%E4%BB%98%E3%81%8D%E3%81%AE%E3%83%8E%E3%83%BC%E3%83%88%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E7%B4%A0%E6%9D%903.png?alt=media&token=2521f659-1da3-4bca-a2c0-89db8733506e" />
                <BoldText min>利用規約</BoldText>
              </NavImageContainer>
              <NavImageContainer onClick={()=>toChange("/policy")}>
                <NavImage src="https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2F%E9%8D%B5%E3%81%AE%E3%82%AA%E3%83%BC%E3%83%95%E3%82%9A%E3%83%B3%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E7%B4%A0%E6%9D%90.png?alt=media&token=150b483c-d565-41bb-8862-a26e345d0ecd" />
                <BoldText min>ポリシー</BoldText>
              </NavImageContainer>
              <NavImageContainer onClick={()=>toChange("/workshopkit")}>
                <NavImage src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2F%E7%AD%86%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B36.png?alt=media&token=7205b206-a74b-4f3e-acb8-4dea80946c20" />
                <BoldText min>体験キット</BoldText>
              </NavImageContainer>
              <NavImageContainer onClick={()=>toChange("/about")}>
                <NavImage src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2F%E9%A2%A8%E9%88%B4%E3%81%AE%E7%84%A1%E6%96%99%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E7%B4%A0%E6%9D%90%201.svg?alt=media&token=0718115b-964d-4eea-b8b6-4ce9a7a14857" />
                <BoldText min>江戸風鈴</BoldText>
              </NavImageContainer>
          </IconFlex>
        </BackgroundWhite>
      </SectionWrapping>

    </div>
  )
}

export default SiteMapNav
