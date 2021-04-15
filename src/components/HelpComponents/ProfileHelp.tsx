import React from 'react'
import { Title, HelpNav, Text } from "assets/GlobalLayoutStyle"
import {QuestionIcon} from "./style"

const ProfileHelp = () => {
  return (
    <div>
      <Title>プロフィールについて</Title>
       <HelpNav>
        <li>
          <Title min left black><QuestionIcon/>自分のアバターや紹介文はどうやって変えれば良いですか？</Title>
          <Text left>右上のアバターアイコンをクリックするとプロフィールの編集という項目が出るのでそちらより編集することができます。スマホの場合はボトムメニューの一番右側の自分のアバターの蘭より変更することができます。</Text>
          <Title min left black><QuestionIcon/>個人データは誰かに見られないでしょうか？</Title>
          <Text left>当サービスではGCPというGoogle社のクラウドサービスを使用させていただいております。
            詳しくはこちらをご覧ください。<br/>
            <a href="https://cloud.google.com/security?hl=ja">GCPの信頼とセキリュティについて</a>
          </Text>
          <Title min left black><QuestionIcon/>パスワードを忘れてしまいました。</Title>
          <Text left>ログイン時のページにパスワードを忘れてしまった方ようにリセットメールを送る機能があります。こちらにメールアドレスを入力して送信していただくと、リセット用のメールアドレスが届きますのでリンクをクリックしてパスワードの再設定お願いいたします。。</Text>
          <Title min left black><QuestionIcon/>退会したいです。</Title>
          <Text left>
            プロフィール欄の退会するの欄よりお手続きくださいませ。また退会する際は今までに投稿した作品が全て削除されてしまいますのでご注意くださいませ。
          </Text>

        </li>
      </HelpNav>
    </div>
  )
}

export default ProfileHelp
