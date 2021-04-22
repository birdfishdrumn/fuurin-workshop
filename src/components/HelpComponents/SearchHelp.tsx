import React from 'react';
import { Title, HelpNav, Text } from 'assets/GlobalLayoutStyle';
import { QuestionIcon } from './style';
const SearchHelp = () => {
  return (
    <div>
      <Title>検索システムについて</Title>
      <HelpNav>
        <li>
          <Title min left black>
            <QuestionIcon />
            検索はどのようにしてできますか？
          </Title>
          <Text left>
            🔍のページより、キーワードの入力による検索、カテゴリー、タグによる検索の三種類から基本的には検索できます。
            <br />
            また検索システムを使うことで同じタグを持った作品を一度に表示させることができます。タグなどは積極的に活用していきましょう。
          </Text>
          {/* <Title min left black><QuestionIcon/></Title> */}
        </li>
      </HelpNav>
    </div>
  );
};

export default SearchHelp;
