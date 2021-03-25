import React from 'react'
import {Title,HelpNav,Text} from "assets/GlobalLayoutStyle"
const WindBellMakerHelp = () => {
  return (
    <div>
      <Title>風鈴メイカーの使い方</Title>
       <HelpNav>
        <li>
          <Title min left black>Q.風鈴メイカーの写真はどのように撮れば良いですか</Title>
          <Text left>作品は作品登録の欄よりご登録ください。モバイルの場合はボトムメニューの真ん中の項目から登録が可能です。</Text>
          <Title min left black>Q.どこからどこまで切り抜けば良いでしょうか？</Title>
          <Title min left black>Q.短冊のデザインはオリジナルのデータでしょうか？</Title>
          <Title min left black>Q.切り取った写真に違和感があります。</Title>
        </li>
      </HelpNav>
    </div>
  )
}

export default WindBellMakerHelp
