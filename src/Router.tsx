import React from 'react';
import { Route, Switch } from 'react-router';
import {
  AboutWindBell,
  FavoriteList,
  FavoriteUserList,
  Help,
  HelpDetail,
  PostDetail,
  PrivacyPolicy,
  PushPage,
  PostEdit,
  PopulatePost,
  PostList,
  PasswordChange,
  Reset,
  UserAccount,
  UserAccountDelete,
  MixColor,
  Setting,
  Search,
  StripJoin,
  ServiceGuide,
  Terms,
  TopPage,
  UserPage,
  UserMyPage,
  UserEdit,
  UserPost,
  WorkshopDojo,
  WorkshopLesson,
  WorkshopCaution,
  WorkshopKit,
} from './templates/index';
import Page404 from './Page404';
import Auth from './Auth';

const Router = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={TopPage} />
      <Route exact path={'/signin/reset'} component={Reset} />
      <Route exact path={'/terms'} component={Terms} />
      <Route exact path={'/policy'} component={PrivacyPolicy} />
      <Route exact path={'/help'} component={Help} />
      <Route exact path={'/helpdetail'} component={HelpDetail} />
      <Route exact path={'/workshopkit'} component={WorkshopKit} />
      <Route exact path={'/about'} component={AboutWindBell} />
      <Route exact path={'/post/:id'} component={PostDetail} />
      <Route path={'/search'} component={Search} />
      <Route exact path={'/timeline'} component={PostList} />
      <Route exact path={'/population'} component={PopulatePost} />
      <Route exact path={'/ServiceGuide'} component={ServiceGuide} />

      <Auth>
        {/* ユーザー情報 */}
            <Route exact path={'/user/account'} component={UserAccount} />
        <Route exact path={'/user/account/delete'} component={UserAccountDelete} />
        <Route exact path={'/user/account/password'} component={PasswordChange} />
        <Route exact path={'/users/:id'} component={UserPage} />
        <Route exact path={'/user/mypage'} component={UserMyPage} />
        <Route exact path={'/user/post'} component={UserPost} />
        <Route exact path={'/user/edit'} component={UserEdit} />
        {/* 作品の編集 */}
        <Route path={'/posts/edit(/:id)?'} component={PostEdit} />
        {/* 体験道場 */}
          <Route exact path={'/dojo'} component={WorkshopDojo} />
        <Route exact path={'/mixcolor'} component={MixColor} />
        <Route path={'/lesson/:id'} component={WorkshopLesson} />
        <Route exact path={'/workshopcaution'} component={WorkshopCaution} />
        {/* お気に入り */}
        <Route exact path={'/likes'} component={FavoriteList} />
        <Route exact path={'/likesUser'} component={FavoriteUserList} />
        <Route exact path={'/strip'} component={StripJoin} />
        <Route exact path={'/push/:id'} component={PushPage} />
        <Route exact path={'/setting'} component={Setting} />
        <div style={{ height: '100px' }} />
        {/* <Route path={"/*"} component={Page404}/> */}
      </Auth>
    </Switch>
  );
};

export default Router;
