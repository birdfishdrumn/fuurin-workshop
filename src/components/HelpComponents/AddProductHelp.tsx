import React from 'react'
import { Title, HelpNav, Text } from "assets/GlobalLayoutStyle"
import {QuestionIcon} from "./style"
const AddProductHelp = () => {
  return (
    <div>
      <Title>作品の登録について</Title>
      <HelpNav>

          <Title min left black><QuestionIcon/>作品はどこから登録しますか？</Title>
          <Text left>作品は右上のボタンを押して、ドロワーから出てくる作品登録の欄よりご登録ください。モバイルの場合はボトムメニューの真ん中の項目から登録が可能です。</Text>
          <Title min left black><QuestionIcon/>作品は江戸風鈴以外のものは載せてはダメ？</Title>
          <Text left>載せる作品は江戸風鈴だけになります。伝統工芸であり、もっとも体験も楽しみやすい江戸風鈴をいろいろな人々にも知ってもらいたいという思いでこのサービスも立ち上げましたので、ご了承下さい。
            また他で製造の風鈴などは規格なども合わないため風鈴メイカーを使用することも出来ません。</Text>
               <Title min left black><QuestionIcon/>登録した作品を編集したいです。</Title>
        <Text left>プロフィール欄の投稿した作品の欄より編集できます。</Text>
        <Title min left black><QuestionIcon />登録した作品を削除したいです。</Title>
        <Text left>プロフィール欄の投稿した作品の欄より削除ができます。登録した作品は復元できないのでご注意いください。</Text>

      </HelpNav>
    </div>
  )
}

export default AddProductHelp
