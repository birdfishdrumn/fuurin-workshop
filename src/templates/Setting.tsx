import React from 'react';
import { FullScreenWrapper } from "./style";
import { SectionWrapper, MainTitle } from "assets/GlobalLayoutStyle";
import { UserEdit } from "templates/index";

const Setting = () => {

window.history.pushState(null, null, null);
window.addEventListener("popstate", function() {
  window.history.pushState(null, null, null);
  // window.location.reload()
  return;
});


  return (
    <FullScreenWrapper>
      <SectionWrapper margin>
        <div className="module-spacer--small" />
        <MainTitle sub>ようこそ！<br/>初めにプロフィールを設定しよう！</MainTitle>
       <UserEdit setting/>
      </SectionWrapper>
    </FullScreenWrapper>
  )
}

export default Setting
