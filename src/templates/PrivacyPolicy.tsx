import React from 'react'
import { SectionWrapping,Title,Text} from "assets/GlobalLayoutStyle"
import styled from "styled-components";

const PrivacyNav = styled.ol`
  text-align:left;
  margin:0 15px;
`

const PrivacyPolicy = () => {
  return (
    <SectionWrapping>
      <Title>プライバシーポリシー</Title>
      <Text left>この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。</Text>
      <Title left>第1条（適用）</Title>
      <PrivacyNav>

      </PrivacyNav>

  </SectionWrapping>
  )
}

export default PrivacyPolicy
