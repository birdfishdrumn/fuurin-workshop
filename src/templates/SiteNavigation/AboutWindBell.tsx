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
import { TwoColumn } from './style';
import { SiteMapNav, PrimaryButton } from 'components/UI/index';
import NotPushAuth from 'NotPushAuth';
import { openOutsideLink } from 'functions/function';

const Help = () => {
  return (
    <div>
      <NotPushAuth />
      <SiteMapNav />
      <SectionWrapping>
        <BackgroundWhite>
          <Title>江戸風鈴とは</Title>

          <div className="module-spacer--large" />

          <TwoColumn>
            <div>
              <Text left>
                江戸風鈴は江戸時代から伝わる技術を受け継いで制作しているガラス製の風鈴です。
                <br />
                <br />
                型を使わずに宙吹きで作られ、絵は全て職人の手によって一つ一つ彩色されています。柄も明るい夏にぴったりの金魚や花火、可愛いじんべえ鮫や招き猫など多くの種類のものがあり,一つ一つ縁起の良い意味があります。
                <br />
                <br />
                また「江戸風鈴」は商標登録されており日本中で二件しか作られていません。このサービスをきっかけに皆様が職人の作ったものを触れていただくこと願っております。
              </Text>
            </div>

            <StyledImage
              width={'350'}
              src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fkingyo_re.jpg?alt=media&token=1ea25566-7e95-4ca7-a159-6b77c59b0471"
            />
          </TwoColumn>
          <div className="module-spacer--large" />
          <Title>江戸風鈴の特徴</Title>
          <div className="module-spacer--large" />
          <SimpleGrid>
            <div>
              <CircleImage src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fhontai.jpg?alt=media&token=d8830ca8-6aff-423a-9545-8c1a3ad8b774" />
              <Title min>宙吹き</Title>
              <MinText left color={'dimgray'}>
                一つ一つ型を使わず、宙で形を整えて作ります。そのため音も違います。
              </MinText>
            </div>
            <div>
              <CircleImage src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fkirikuchi_square.webp?alt=media&token=0d30ddfd-ae68-4df3-9232-ffe20df35274" />
              <Title min>ギザギザ</Title>
              <MinText left color={'dimgray'}>
                風鈴の鳴り口にガラス管がスレただけで心地よい音が鳴ります。
              </MinText>
            </div>
            <div>
              <CircleImage src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fkikyou.webp?alt=media&token=e6aa587e-5f01-42ee-9ccc-4b708a6e7dae" />
              <Title min>内側から彩色</Title>
              <MinText left color={'dimgray'}>
                絵を内側から描くことで、ガラスの艶を生かした透明感のあるものに仕上がります。
              </MinText>
            </div>
          </SimpleGrid>

          <div className="module-spacer--medium" />

          <PrimaryButton
            onClick={() => openOutsideLink('https://edo-fuurin.com/')}
            label="詳しくはこちら"
          />
          <div className="module-spacer--large" />
        </BackgroundWhite>
      </SectionWrapping>
    </div>
  );
};

export default Help;
