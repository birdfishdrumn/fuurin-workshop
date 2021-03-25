import React from 'react'
import { SectionWrapping,Title,Text} from "assets/GlobalLayoutStyle"
import styled from "styled-components";
import {firstStreak,secondStreak,secondStreakDescription,thirdStreak,fourthStreak} from "./TermsData"
const PrivacyNav = styled.ol`
  text-align:left;
  margin:0 15px;
  margin:${props=>(props.description ? "0 30px":"0 15px")};
`

const Terms = () => {
  return (
    <SectionWrapping>
      <Title>利用規約</Title>
      <Text left>この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。</Text>
      <Title left>第1条（適用）</Title>
      <PrivacyNav>
        {firstStreak.map((item) => (
          <li>{item}</li>
       ))}
      </PrivacyNav>
            <Title left>第2条（利用登録）</Title>
      <PrivacyNav>
        {secondStreak.map((item) => (
          <li>{item}</li>
       ))}
      </PrivacyNav>
      <div className="module-spacer--small"/>
         <PrivacyNav description>
        {secondStreakDescription.map((item) => (
          <li>{item}</li>
       ))}
      </PrivacyNav>
      <Title left>第3条（ユーザーIDおよびパスワードの管理）</Title>
            <PrivacyNav description>
        {thirdStreak.map((item) => (
          <li>{item}</li>
       ))}
      </PrivacyNav>
      <Title>第4条（禁止事項）</Title>
               <PrivacyNav>
        {fourthStreak.map((item) => (
          <li>{item}</li>
       ))}
      </PrivacyNav>

  </SectionWrapping>
  )
}

export default Terms
