import React from 'react'
import {Title,HelpNav,Text} from "assets/GlobalLayoutStyle"
const FavoriteHelp = () => {
  return (
    <div>
      <Title>お気に入りシステムについてt</Title>
       <HelpNav>
        <li>
          <Title min left black>Q.作品はどこから登録しますか？</Title>
          <Text left>作品は作品登録の欄よりご登録ください。モバイルの場合はボトムメニューの真ん中の項目から登録が可能です。</Text>
            <Title min left black>Q.作品は江戸風鈴以外のものは載せてはダメ？</Title>
        </li>
      </HelpNav>
    </div>
  )
}

export default FavoriteHelp
