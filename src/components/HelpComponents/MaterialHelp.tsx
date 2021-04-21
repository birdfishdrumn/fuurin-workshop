import React from 'react'
import { Title, Text, MinText } from "assets/GlobalLayoutStyle";
import {QuestionIcon} from "./style"
import styled from "styled-components";

const StyledUl = styled.ul`
text-align:left;
margin-left:20px;

>li{
  font-size:1.2rem;
  margin:10px 0;
  a{
    text-decoration:none;
  }
}
`

const MaterialHelp = () => {
  return (
    <div>
      <Title>素材について</Title>


      <Title min left black><QuestionIcon />提供している素材はオリジナルですか？</Title>

          <Text left>短冊のデータ、一部画像などは以下のサイトのものを使用させていただいております。※記入漏れがあったら申し訳ありません。随時確認して追加予定。</Text>
       <Title min left> 当サイトのアイコン、一部画像やイラスト</Title>
      <StyledUl>
        <li><a href="https://www.ac-illust.com/">ICOOON MONO</a></li>
         <li><a href="https://icon-rainbow.com/">icon-rainbow</a></li>
            <li><a href="https://www.ac-illust.com/">イラストAC</a></li>
            <li><a href="https://www.ac-illust.com/">写真AC</a></li>
              <MinText left>くらうど職人さん,nkm03さん,フリー素材ぱくたそさん、baさん、22de5さん,もちおもちさん、ROKUDANDAさん,まぁや.+✴︎さん、ちょこピーさん、kenstockさん、自然さん、ルークさん、しばいぬだいすきさん、普通人さん、ゴートゥーさん</MinText>

          </StyledUl>
           <Title min left> 短冊のデータ</Title>
             <StyledUl>
                <li><a href="https://icooon-mono.com/">ULOCO</a></li>
                <li><a href="https://free-paper-texture.com/green-fabric-texture-2/">Paper-co</a></li>
                <li><a href="https://jp.freepik.com/free-vector/organic-flat-pressed-flowers-pattern_13430443.htm#page=1&query=floral%20pattern&position=6">freepik</a></li>
             <MinText left><a href="https://jp.freepik.com/free-vector/hand-drawn-floral-pattern_12978256.htm#page=1&query=floral%20pattern&position=1">pikisuperstarさん</a></MinText>
      </StyledUl>

    </div>
  )
}

export default MaterialHelp
