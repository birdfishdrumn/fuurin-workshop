import React from 'react';
import { Title, HelpNav, Text } from 'assets/GlobalLayoutStyle';
import { QuestionIcon } from './style';
import { PrimaryButton } from 'components/UI';
import { openOutsideLink } from 'functions/function';

const EdofuurinHelp = () => {
  return (
    <div>
      <Title>江戸風鈴について</Title>
      <HelpNav>
        <Title min left black>
          <QuestionIcon />
          どうやって体験する風鈴は購入しますか？
        </Title>
        <Text left>
          ①まずドロワーの体験キットの購入の蘭から下部のボタンをクリックしていただきECサイトに移動していただきます。
          <br />
          ②ECサイトにある「体験キット」をカートに入れていただき決済してただきます。決済にはクレジットカード、銀行振り込み、コンビニ決済などが利用できます。
        </Text>
        <Title min left black>
          <QuestionIcon />
          風鈴に気泡があります。
        </Title>
        <Text left>
          江戸風鈴は昔ながらの宙吹きという方法で一つ一つ風鈴を製作しております。その為少しだけ泡などが入ってしまうことがあります。こればっかりは手作りの「味」としてお楽しみしていただけらなと思います。
        </Text>
        <Title min left black>
          <QuestionIcon />
          江戸風鈴はどんな特徴がありますか?
        </Title>
        <Text left>
          江戸風鈴は口がギザギザ、宙吹き、内側から絵を描くという特徴があります。詳しくはこちらのホームページをご覧ください。
        </Text>
        <PrimaryButton
          onClick={() => openOutsideLink('https://edo-fuurin.com/about')}
          label="江戸風鈴について"
        />
      </HelpNav>
    </div>
  );
};

export default EdofuurinHelp;
