import React from 'react';
import { SectionWrapping, Title, Text, BackgroundWhite } from 'assets/GlobalLayoutStyle';
import { HelpNav } from './style';
import styled from 'styled-components';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { SiteMapNav } from 'components/UI/index';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import NotPushAuth from 'NotPushAuth';
import BuildIcon from '@material-ui/icons/Build';

const Help = () => {
  const dispatch = useDispatch();
  const locationChange = (stateValue) => {
    dispatch(
      push({
        pathname: '/helpdetail',
        state: stateValue,
      })
    );
  };

  return (
    <div>
      <NotPushAuth />
      <SiteMapNav />
      <SectionWrapping large>
        <BackgroundWhite>
          <Title>ヘルプ</Title>
          <HelpNav>
            <li onClick={() => locationChange(0)}>
              <Title pointer left>
                <LiveHelpIcon style={{ fontSize: '30px', margin: '0 10px -5px 0' }} />
                当サービスについて
              </Title>
              <Text left>このサービスのそもそもの疑問についてお答えします。</Text>
            </li>
            <li onClick={() => locationChange(1)}>
              <Title pointer left>
                <AddBoxIcon style={{ fontSize: '30px', margin: '0 10px -5px 0' }} />
                作品の登録の仕方
              </Title>
              <Text left>作品の登録の仕方などについて紹介致します。</Text>
            </li>
            <li onClick={() => locationChange(2)}>
              <Title pointer left>
                <AddAPhotoIcon style={{ fontSize: '30px', margin: '0 10px -5px 0' }} />
                風鈴メイカーの使い方
              </Title>
              <Text left>風鈴メイカーの使い方について一通り説明いたします。</Text>
            </li>
            <li onClick={() => locationChange(3)}>
              <Title pointer left>
                <AccountBoxIcon style={{ fontSize: '30px', margin: '0 10px -5px 0' }} />
                アカウント
              </Title>
              <Text left>プロフィールの編集方法、アカウントの設定などについて紹介致します。</Text>
            </li>
            <li onClick={() => locationChange(4)}>
              <Title pointer left>
                <FavoriteIcon style={{ fontSize: '30px', margin: '0 10px -5px 0' }} />
                お気に入りシステム
              </Title>
              <Text left>
                お気に入りの登録のシステム、人気ランキングのシステムについてご紹介いたします。
              </Text>
            </li>
            <li onClick={() => locationChange(5)}>
              <Title pointer left>
                <SearchIcon style={{ fontSize: '30px', margin: '0 10px -5px 0' }} />
                作品の検索について
              </Title>
              <Text left>作品の検索システム、それを使うことで何ができるのか説明いたします。</Text>
            </li>
            <li onClick={() => locationChange(6)}>
              <Title pointer left>
                <AddBoxIcon style={{ fontSize: '30px', margin: '0 10px -5px 0' }} />
                江戸風鈴に関して
              </Title>
              <Text left>
                そもそも江戸風鈴って？伝統工芸品である江戸風鈴についてご紹介いたします。
              </Text>
            </li>
            <li onClick={() => locationChange(7)}>
              <Title pointer left>
                <BuildIcon style={{ fontSize: '30px', margin: '0 10px -5px 0' }} />
                素材
              </Title>
              <Text left>
                短冊の素材など、当サイトで使用させていただいている素材についてご紹介いたいします。
              </Text>
            </li>
          </HelpNav>
        </BackgroundWhite>
      </SectionWrapping>
    </div>
  );
};

export default Help;
