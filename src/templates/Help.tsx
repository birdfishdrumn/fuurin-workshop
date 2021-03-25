import React from 'react'
import { SectionWrapping,Title,Text} from "assets/GlobalLayoutStyle"
import styled from "styled-components";

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddBoxIcon from '@material-ui/icons/AddBox';
import {useDispatch} from "react-redux"
import {push} from "connected-react-router"

const HelpNav = styled.ul`
 list-style:none;
 margin:10px 0;
>li{
  padding:10px 0;
}
`



const Help = () => {
  const dispatch = useDispatch();

  const locationChange = (stateValue) => {
  dispatch(push({
        pathname: '/helpdetail',
        state: stateValue
    }))
}
  return (
    <div>

      <SectionWrapping>
            <Title>ヘルプ</Title>
     <HelpNav>
          <li onClick={()=>locationChange(0)}>
            <Title left><AddBoxIcon style={{ fontSize: "40px",margin:"0 10px -10px 0" }}/>作品の登録の仕方</Title>
            <Text left>作品の登録の仕方などについて紹介致します。</Text>
          </li>
              <li  onClick={()=>locationChange(1)}>
                <Title left><AddBoxIcon style={{ fontSize: "40px",margin:"0 10px -10px 0" }}/>風鈴メイカーの使い方</Title>
        </li>
             <li  onClick={()=>locationChange(2)}>
            <Title left><AccountBoxIcon style={{ fontSize: "40px",margin:"0 10px -10px 0" }}/>プロフィールについて</Title>
             <Text left>プロフィールの編集方法、アカウントの設定などについて紹介致します。</Text>
          </li>
              <li  onClick={()=>locationChange(3)}>
            <Title left><FavoriteIcon style={{ fontSize: "40px",margin:"0 10px -10px 0" }}/>お気に入りシステムについて</Title>
            <Text left>
              お気に入りの登録のメリット、人気ランキングのシステムについてご紹介いたします。
            </Text>
          </li>
             <li  onClick={()=>locationChange(4)}>
                <Title left><SearchIcon style={{ fontSize: "40px",margin:"0 10px -10px 0" }}/>作品の検索について</Title>
        </li>
     <li  onClick={()=>locationChange(5)}>
                <Title left><AddBoxIcon style={{ fontSize: "40px",margin:"0 10px -10px 0" }}/>江戸風鈴に関して</Title>
        </li>
    </HelpNav>




      </SectionWrapping>
      </div>
  )
}

export default Help
