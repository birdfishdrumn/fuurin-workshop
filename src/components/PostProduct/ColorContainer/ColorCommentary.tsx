import React, { useState } from 'react';
import { PalletBackground, PalletWrapper,CommentaryIcon} from "./style";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {Title,MinText} from "assets/GlobalLayoutStyle";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import IconButton from "@material-ui/core/IconButton";



const ColorCommentary = ({ picture }) => {
  const [commentary, setCommentary] = useState<boolean>(true);
  return (
    <div>
      <PalletBackground open={commentary}>
        <CommentaryIcon onClick={() => setCommentary(!commentary)}>
            {commentary ?
              <HighlightOffIcon/> : <ImportContactsIcon/>
            }
        </CommentaryIcon>
          <PalletWrapper>
          <Title min style={{padding:"15px 0 10px 0"}}><MenuBookIcon style={{ fontSize: "30px", margin: "0 10px -6px 0" }} />{picture}の解説</Title>
          {picture === "金魚" &&
            <MinText left>
              金魚には赤、またはオレンジ、黒、水草には黄緑を使います。泡部分には水色と白をグラデーションにしてリアルな泡を表現しましょう。
            </MinText>}
          {picture === "花火" &&
            <MinText left>
              花火の配色は基本的に自由ですが、中の２色には白にオレンジ、紫を使い、一番外の大きい火花には自由に色を使うとまとまりやすいです。
            </MinText>}
          {picture === "あさがお" &&
            <MinText left>
              あさがお本体の色はピンク、水色、紫の中からどれか使ってみましょう。葉っぱには緑、中の星形の部分には白を使います。
            </MinText>}
          {picture === "藤の花" &&
            <MinText left>
              藤の花にはミディアムスレートブルーやオーキッドを白とグラデーションに使うと立体感が出やすいです。枝部分には茶色、葉には黄緑などを使って描きましょう。
            </MinText>}
          {picture === "ひまわり" &&
            <MinText left>
              ひまわり本体には黄色、真ん中には茶色、格子状の線に白を使います。リアルに描く場合には白を使わず、黒で点々と種を書きましょう。深緑を使って葉っぱを描くとおしゃれなイメージで描けます。
            </MinText>}
          {picture === "だるま" &&
            <MinText left>
              ヒゲや目の色など輪郭には黒を主に使います。顔は肌色を使って塗り、だるま全体には赤を使って仕上げていきます。
            </MinText>}
          {picture === "あじさい" &&
            <MinText left>
              あじさい部分にはピンク、水色、紫を白とグラデーションにして使い、つぼみ部分には黄色を使用します。葉っぱには緑を使用します。葉脈部分は白か黒を使って描くと良いですが、描かなくても良い仕上がりになると思います。
            </MinText>}
          {picture === "アマビエ様" &&
            <MinText left>
              アマビエ様の目には青紫、髪にはピンク、肌の色にはライトイエローを使います。鱗はターコイズ、黄色、オレンジをグラデーションにして描き尾びれにはターコイズや青紫を使います。色構成が複雑ですが頑張りましょう。
            </MinText>}
          {picture === "メルヘン" &&
            <MinText left>
              全体的に白を基調とした色で構成されています。ユニコーンの毛色にラベンダー、オーキッドを使用したり、ハートにはピンクやライトシアンなどを使用するなど、好きな柄を自由に楽しみましょう。
            </MinText>}
          {picture === "トロピカル" &&
            <MinText left>
            黄色やブラッドオレンジは熱帯魚やフルーツ、ハイビスカスなどお花に、緑はヤシの木や葉っぱを表現するのに使います。青系の色は海の色をよりカラフルに表現するのに使いましょう。
            </MinText>}
          {picture === "星空" &&
            <MinText left>
              天の川などの星空を表現するには紺色や紫を織り交ぜて夜空を表現すると良いです。そこに薄いライトシアンやイエローを星空として描いていきましょう。
            </MinText>}
          </PalletWrapper>
      </PalletBackground>
    </div>
  )
}

export default ColorCommentary
