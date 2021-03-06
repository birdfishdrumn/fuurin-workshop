import React from 'react';
import {
  SectionWrapping,
  Title,
  Text,
  BackgroundWhite,
  SimpleGrid,
  CircleImage,
  MinText,
  StyledImage,
} from 'assets/GlobalLayoutStyle';
import { SiteMapNav, PrimaryButton } from 'components/UI/index';
import NotPushAuth from 'NotPushAuth';
import { openOutsideLink } from 'functions/function';
import { TwoColumn } from './style';

const Help = () => {
  return (
    <div>
      <NotPushAuth />
      <SiteMapNav />

      <SectionWrapping>
        <BackgroundWhite>
          <Title>体験キットについて</Title>
          <div className="module-spacer--large" />
          <TwoColumn>
            <div>
              <Text left>
                体験キットがあれば他に水の入った紙コップなどを用意するだけですぐに風鈴の絵付け体験を始めることができます。
                <br />
                <br />
                江戸風鈴は全て篠原まるよし風鈴で製作したもので、一つ一つ手作りのものとなっており、音も違います。
                <br />
                コロナの影響でお店に来れなくても江戸風鈴の体験を楽しむことができますよ。
              </Text>
            </div>

            <StyledImage
              width={'300'}
              src="https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2Ftaiken_kit_contents.jpg?alt=media&token=dd683b38-f182-4e9e-9b20-affcaa163559"
            />
          </TwoColumn>
          <div className="module-spacer--large" />
          <Title>体験キットの内容</Title>
          <div className="module-spacer--large" />
          <SimpleGrid two>
            <div>
              <CircleImage src="https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2Ffuurin_tansaku.jpg?alt=media&token=cf2d6248-7bab-410e-8b81-a24eb9fbcea2" />
              <Title min>江戸風鈴、短冊</Title>
              <MinText left color={'dimgray'}>
                江戸風鈴は音が違うので、どんな音になるかはお楽しみに。
                <br />
                また江戸風鈴の仕様上、ガラスに気泡などが入っていまのでご了承ください。短冊はまるよし風鈴のロゴが入った天地ぼかしのものが一つ入っております。
              </MinText>
            </div>
            <div>
              <CircleImage src="https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2Fbrush_paint.jpg?alt=media&token=8bc8d2b5-7bb6-48e0-8fc9-353b85600109" />
              <Title min>平筆、細筆、水彩絵具７色</Title>
              <MinText left color={'dimgray'}>
                細筆は花火など細かい線を引く絵に、太い筆はベタ塗りやお花のグラデーションを表現することに使えます。
                <br />
                絵の具は当店で体験用として使用しているポスターカラーになります。最初は固まっているので水で溶かして使ってください。
              </MinText>
            </div>
          </SimpleGrid>

          <div className="module-spacer--medium" />

          <Title min>価格</Title>
          <Text red>¥1,650(税込)</Text>
          <PrimaryButton
            onClick={() => openOutsideLink('https://maruyosi.theshop.jp/')}
            label="ご購入はこちらから"
          />
          <div className="module-spacer--large" />
        </BackgroundWhite>
      </SectionWrapping>
    </div>
  );
};

export default Help;
