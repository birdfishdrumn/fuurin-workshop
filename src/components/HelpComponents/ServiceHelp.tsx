import React from 'react'
import { Title, HelpNav, Text } from "assets/GlobalLayoutStyle"
import {QuestionIcon} from "./style"

const ProfileHelp = () => {
  return (
    <div>
      <Title>当サービスについて</Title>
       <HelpNav>
        <li>
          <Title min left black><QuestionIcon/>このサービスでは何ができますか？</Title>
          <Text left>江戸風鈴の制作体験をより楽しむことができます。絵の描きかたや色の作り方など体験の手引きがあるので、オンラインショップで風鈴を購入した方も楽しんで絵付けができます。そして完成したあなただけの風鈴を世界に公開しましょう。また、願い事や応援を短冊に書いて、普段なかなか他では言えない思いを公開しても大丈夫です。</Text>
          <Title min left black><QuestionIcon/>ここに載ってる風鈴は購入できますか？</Title>
          <Text left>申し訳ございません。ただいまのところお客様の描いた作品はこちらでは販売はできませんのでご了承ください。
          </Text>


        </li>
      </HelpNav>
    </div>
  )
}

export default ProfileHelp
