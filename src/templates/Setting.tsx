import React,{useEffect} from 'react'
import styled from "styled-components"
import {SectionWrapper,Title,MainTitle} from "assets/GlobalLayoutStyle"
import { makeStyles } from "@material-ui/core/styles"
import { useDispatch,useSelector } from "react-redux";
import {UserEdit} from "templates/index"



const FullScreenWrapper = styled.div`
 width:100vw;
 max-height:110vh !important;
 z-index:999999;
 position:relative;
 margin:-70px 0 -350px;
 padding:0 0 320px 0 ;

 background:white;
 `



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
