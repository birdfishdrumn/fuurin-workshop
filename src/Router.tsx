import React from "react";
import { Route, Switch } from "react-router";

import {
  Confirm, FavoriteList,FavoriteUser, PostList, Search, Reset, PostDetail,
  PrivacyPolicy, PushPage, PostEdit, Terms, UserMyPage, UserEdit, UserPost, PopulatePost, PasswordChange, TopPage, Help, HelpDetail,
  UserAccount,UserAccountDelete,MixColor,
  UserPage, WorkshopDojo, WorkshopLesson, WorkshopCaution,WorkshopKit
} from "./templates/index";

import Auth from "./Auth";
import NotPushAuth from "./NotPushAuth";

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

         <Route exact path={"/post/:id"} component={PostDetail}
      />
        <Route path={"/search"} component={Search} />
       <Route exact path={"/users/:id"} component={UserPage}/>
      <Route exact path={"/"} component={PostList} />
        <Route exact path={"/population"} component={PopulatePost} />
      <Auth>
        <Route exact path={"/push/:id"} component={PushPage} />



        <Route path={"/posts/edit(/:id)?"} component={PostEdit} />
        <Route path={"/dojo"} component={WorkshopDojo} />
            <Route path={"/mixcolor"} component={MixColor} />
                <Route path={"/lesson/:id"} component={WorkshopLesson} />
           <Route path={"/workshopcaution"} component={WorkshopCaution} />
        <Route exact path={"/user/account"} component={UserAccount} />
        <Route exact path={"/user/account/delete"} component={UserAccountDelete} />
         <Route exact path={"/user/account/password"} component={PasswordChange} />
        <Route exact path={"/user/mypage"} component={UserMyPage} />
        <Route exact path={"/user/post"} component={UserPost} />
         <Route exact path={"/user/edit"} component={UserEdit} />


        <Route exact path={"/likes"} component={FavoriteList} />
                <Route exact path={"/likesUser"} component={FavoriteUser} />

        <div style={{height:"100px"}}/>
      </Auth>

      </Switch>

  )
}

export default Router
