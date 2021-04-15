import React from 'react'
import {  SectionContainer, BoldText, IconFlex,WhiteIcon } from "assets/GlobalLayoutStyle";
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

const NavIcon = styled(WhiteIcon)`
  width:100px;
  height:100px;
  flex-direction:column;
  box-shadow: 0 0px 10px rgba(0,0,0,0.2);
`

const SearchPopulationNav:React.FC= () => {
  const dispatch = useDispatch();
  return (
    <div>
         <SectionContainer>
              <IconFlex>
               <NavIcon onClick={() => dispatch(push("/search"))}>
                <SearchIcon style={{fontSize:"45px"}}/><br/>
                <BoldText>検索</BoldText>
               </NavIcon>
               <NavIcon onClick={()=>dispatch(push("/population"))}>
                <img src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2F%E3%81%8A%E5%9F%8E%E3%81%AE%E7%84%A1%E6%96%99%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E7%B4%A0%E6%9D%90%202.svg?alt=media&token=10f3aa81-9df3-4832-a7ca-215eb7a1dd66" style={{ width: "50px" }} />
                  <BoldText>人気</BoldText>
               </NavIcon>
            </IconFlex>
        </SectionContainer>
    </div>
  )
}

export default SearchPopulationNav
