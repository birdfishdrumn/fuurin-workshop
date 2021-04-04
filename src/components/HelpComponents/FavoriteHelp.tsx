import React from 'react'
import { Title, HelpNav, Text } from "assets/GlobalLayoutStyle"
import {QuestionIcon} from "./style"
const FavoriteHelp = () => {
  return (
    <div>
      <Title>お気に入りシステムについて</Title>
       <HelpNav>
        <li>
          <Title min left black><QuestionIcon/>お気に入りで何ができますか？</Title>
          <Text left>作品の右上の❤️をタッチしていただくとお気に入りページに気に入ったの作品を登録することができます。またユーザーをお気に入りも同様に気に入ったユーザーを登録することができます。</Text>
          <Title min left black><QuestionIcon />人気リストなどの集計方法はどうなっていますか？</Title>
          <Text left>お気に入りに登録された数の合計で順位が決まります。順位が全てではないですが、自身のある人は上位を目指してみましょう。</Text>
        </li>
      </HelpNav>
    </div>
  )
}

export default FavoriteHelp
