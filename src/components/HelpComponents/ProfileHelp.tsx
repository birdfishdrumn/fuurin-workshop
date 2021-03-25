import React from 'react'
import {Title,HelpNav,Text} from "assets/GlobalLayoutStyle"
const ProfileHelp = () => {
  return (
    <div>
      <Title>プロフィールについて</Title>
       <HelpNav>
        <li>
          <Title min left black>Q.自分のアバターや紹介文はどうやって変えれば良いですか？</Title>
          <Text left>作品は作品登録の欄よりご登録ください。モバイルの場合はボトムメニューの真ん中の項目から登録が可能です。</Text>
          <Title min left black>Q.個人データは誰かに見られないでしょうか？</Title>
          <Title min left black>Q.パスワードを忘れてしまいました。</Title>
          <Title min left black>Q.アカウントを削除したいです。</Title>

        </li>
      </HelpNav>
    </div>
  )
}

export default ProfileHelp
