import React, { useEffect, useState } from 'react'

import { SectionWrapping, BackgroundWhiteTitle, Text, SimpleGrid, CircleImage, StyledImage, BackgroundWhite,ListDesign,StyledLink } from "assets/GlobalLayoutStyle"
import Divider from "@material-ui/core/Divider";

const ServiceGuide = () => {
  return (
    <SectionWrapping>

      <BackgroundWhiteTitle>体験の始めかた</BackgroundWhiteTitle>
      <div className="module-spacer--medium" />
      <BackgroundWhite>
        <BackgroundWhiteTitle left>江戸風鈴に絵を描こう！</BackgroundWhiteTitle>

        <Divider />
         <ListDesign>
          <li>体験キットを購入</li>
          <Text left><StyledLink to="workshopkit">体験キット</StyledLink>を購入していただくことで、絵付けの材料が全て揃います。</Text>
          <li>お店で体験する</li>
          <Text left>お店に体験に来ることで体験できます。感染対策もして営業しておりますのでよろしくお願いします。</Text>
          <li>絵を実際に書く</li>
          <Text left>こちらでは絵の描きかたも掲載しております。まだ掲載しているレッスンも少ないので他の方の絵も参考にしてみてください。<br />
          また色の作り方も充実しているのでどんどん色も作っていきましょう。
          </Text>
          <StyledImage width={"250"} src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fmixcolor_top.jpg?alt=media&token=86a5b0bb-9745-4435-b3bc-745102786312"/>

          <StyledImage width={"500px"} src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fcautionshot.jpg?alt=media&token=bfc59732-6433-4cc7-bd91-ed97cf73c6e3"/>

        </ListDesign>
          <div className="module-spacer--medium" />
        <BackgroundWhiteTitle left>作品の写真を撮影しよう！</BackgroundWhiteTitle>

        <Divider />
              <ListDesign>
            <li>本体のみの写真を撮る</li>
          <Text left>まずは風鈴の玉の部分だけの写真を撮りましょう！風鈴を自分の撮りたいシチュエーションに合わせて撮ります。</Text>
          <StyledImage width={"250"} src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fchappi.jpg?alt=media&token=db2fabc4-06fa-4dd1-b696-008543f6fabf" />

            <li>風鈴メイカー用の写真を撮る</li>
          <Text left>風鈴メイカー用に口の部分を平行に見えるようにした写真を撮りましょう！白い壁、布を背景にすると良いです。</Text>
            <li>風鈴から短冊までの写真</li>
          <Text left>風鈴メイカーを使わない場合は短冊までの写真を自由な背景に合わせて撮ってみましょう！</Text>
        </ListDesign>
          <div className="module-spacer--medium" />
        <BackgroundWhiteTitle left>作品を投稿しよう！</BackgroundWhiteTitle>
        <Divider />
                      <ListDesign>
            <li>作品のタイトルや説明を描こう！</li>
          <Text left>自分の作品にしっくりくるタイトルを決めましょう！そして作品の説明や込めた思いを描きましょう！短くても大丈夫です。</Text>
            <li>カテゴリーやタグを決める。</li>
          <Text left>カテゴリーはどれか自分の柄に合いそうなものを選びましょう。またタグを入れていただくことで、他の方の作品と繋がる事もできます。</Text>
            <li>撮影した写真を切り抜いて投稿</li>
          <Text left>撮影した写真を投稿すると切り抜き画面になります。丁度良い位置を決めて作品を切り抜きましょう。</Text>
            <li>風鈴メイカーを使う</li>
          <Text left>風鈴メイカーを使うことで風鈴を切り抜くことができ、短冊を豊富なパターンから選んだりオリジナリティーの高い作品になります。<br />
            またその後短冊に願い事を書くこともできます！自分の今の願い事を書きましょう。
          </Text>
        </ListDesign>
          <div className="module-spacer--medium" />
       <BackgroundWhiteTitle left>コミュニケーションを取ろう！</BackgroundWhiteTitle>
        <Divider />
                      <ListDesign>
            <li>自分のプロフィールを充実させる</li>
          <Text left>あなたのプロフィールを描いて自分のことを紹介しましょう
            。お店などをやっている方、個人で何か活動している方は自分のwebサイトのurlを載せてアピールしましょう！</Text>
          <StyledImage  width={"500"} src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fprofile.jpg?alt=media&token=120c4b1f-ad46-4b25-8b8e-84ea8d73c1f1"/>
            <li>他の人の作品とコラボしよう！</li>
          <Text left>他の方の作品をお気に入りしたり、タグを同じにすることで他の方の作品と自分の作品を並べることができます。様々な作品と並べて特別な世界観を楽しみましょう。</Text>
            <li>チームで自分達だけの風鈴の世界観を作ろう！</li>
          <Text left>団体や企業で体験をやられる方は、同じアカウントに作った作品を並べて自分の組織にしかないような特別な世界観を演出しましょう！</Text>
        </ListDesign>
      <SimpleGrid gap>



        </SimpleGrid>
        </BackgroundWhite>
    </SectionWrapping>


  )
}

export default ServiceGuide