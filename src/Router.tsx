import React from "react";
import { Route, Switch } from "react-router";

import {
  Confirm, FavoriteList, PostList, Search, Reset, PostDetail, PrivacyPolicy, PushList, PostEdit, Terms, UserMyPage, UserEdit, UserPost, PopulatePost, TopPage, Help, HelpDetail,
  UserAccount,
  UserPage, WorkshopDojo, WorkshopLesson, WorkshopKit
} from "./templates/index";

import Auth from "./Auth";


const Router = () => {
  return (

    <Switch>

      <Route exact path={"/signin"} component={TopPage} />
      <Route exact path={"/signin/reset"} component={Reset} />
            <Route exact path={"/signin/confirm"} component={Confirm} />
      <Route exact path={"/terms"} component={Terms} />
      <Route exact path={"/policy"} component={PrivacyPolicy} />
      <Route exact path={"/help"} component={Help} />
       <Route exact path={"/helpdetail"} component={HelpDetail} />
      <Route exact path={"/workshopkit"} component={WorkshopKit} />

      <Auth>
        <Route exact path={"/push"} component={PushList} />
            <Route exact path={"/"} component={PostList} />
        <Route exact path={"/post/:id"} component={PostDetail}
        />
        <Route path={"/search"} component={Search} />
        <Route path={"/posts/edit(/:id)?"} component={PostEdit} />
        <Route path={"/dojo"} component={WorkshopDojo} />
              <Route path={"/lesson"} component={WorkshopLesson} />

        <Route exact path={"/user/account"} component={UserAccount} />
        <Route exact path={"/user/mypage"} component={UserMyPage} />
        <Route exact path={"/user/edit"} component={UserEdit} />
        <Route exact path={"/user/post"} component={UserPost} />
             <Route exact path={"/users/:id"} component={UserPage}
        />
        <Route exact path={"/likes"} component={FavoriteList} />
        <Route exact path={"/population"} component={PopulatePost} />
        <div style={{height:"100px"}}/>
      </Auth>

      </Switch>

  )
}

export default Router
