import React from 'react';
import { Title, HelpNav, Text, BoldText, ImageWrapper } from "assets/GlobalLayoutStyle";
import WindBellMaterial from "components/Material/WindBellMaterial"
import { QuestionIcon } from "./style";

interface PROPS {
  cropper?: boolean;
}

const WindBellMakerHelp:React.FC<PROPS> = ({cropper}) => {
  return (
    <div>
      <Title>風鈴メイカーの使い方</Title>
       <HelpNav>
        <li>
          {cropper &&
            <>
          <Title min left black><QuestionIcon />写真はどうやって取りますか？</Title>
          <Text left>
            風鈴メイカーに使う写真はできるだけ白い背景に風鈴を吊るた状態で、揺らさない状態で取ります。
            背景は白でないと、切り取った後の背景が白いので、少し違和感が出てしまうのでお気をつけください。
            <WindBellMaterial/>
          </Text>
          <Title min left black><QuestionIcon />どこからどこまで切り抜けば良いでしょうか？</Title>
          <Text left>切り抜く箇所は風鈴の左上から右下までギリギリに切り抜いてください。切り抜いた後にいくつかのパターンの中から、その風鈴にあった形を選んでください。

          </Text>

          <ImageWrapper>
          <img src="https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2Fcut_example.png?alt=media&token=49cf422b-e83d-433f-ae01-22c5b6f29d93"/>
            <BoldText left image color={"dimgray"}  >上半分の端に合わせた状態で切り抜きます。また風鈴の上部の穴にある突起は無視して切り抜いてください。</BoldText>
          </ImageWrapper>
            </>
          }
          <Title min left black><QuestionIcon/>風鈴メイカーを使って何ができますか？</Title>
          <Text left>風鈴メイカーでは自分の作った作品を簡単な処理で切り抜くことができ、用意された豊富な種類の模様から短冊を選択することができます。また短冊にお願い事や応援のメッセージなどを入れることも出来ます。</Text>
          <Title min left black><QuestionIcon />写真はどうやって取りますか？</Title>
          <Text left>
            風鈴メイカーに使う写真はできるだけ白い背景に風鈴を吊るた状態で、揺らさない状態で取ります。
            背景は白でないと、切り取った後の背景が白いので、少し違和感が出てしまうのでお気をつけください。
            <WindBellMaterial/>
          </Text>

          <Title min left black><QuestionIcon />どこからどこまで切り抜けば良いでしょうか？
          </Title>
          <Text left>切り抜く箇所は風鈴の左上から右下までギリギリに切り抜いてください。切り抜いた後にいくつかのパターンの中から、その風鈴にあった形を選んでください。

          </Text>
          <ImageWrapper>
          <img src="https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2Fcut_example.png?alt=media&token=49cf422b-e83d-433f-ae01-22c5b6f29d93"/>
            <BoldText left image color={"dimgray"}  >上半分の端に合わせた状態で切り抜きます。また風鈴の上部の穴にある突起は無視して切り抜いてください。</BoldText>
          </ImageWrapper>
          <Title min left black><QuestionIcon />お願い事は日本語だけですか？
          </Title>
          <Text left>お願い事には基本的には日本語のみの入力を想定しておりますが、中国語など漢字であれば大丈夫です。英語も可能ですが、縦書きに少し違和感があること、文字の位置調整がプログラムの使用上ずれてしまう事があるので調整しつつ入力してください。
          </Text>
          <Title min left black><QuestionIcon />短冊のデザインはオリジナルのデータでしょうか？</Title>
          <Text left>短冊のデータはフリーの素材を使わせていただいております。詳しくは素材のページよりご覧ください。</Text>
          <Title min left black><QuestionIcon />切り取った写真に違和感があります。</Title>
          <Text left>申し訳ございません。切り取りに関しては風鈴メイカーでは切り取れない細かい部分も少しあるのでご了承下さい。また写真に関しては背景をできるだけ白いものにしていただく、撮った写真を明るくしていただく事で違和感が解消できると思います。</Text>
        </li>
      </HelpNav>
    </div>
  )
}

export default WindBellMakerHelp
