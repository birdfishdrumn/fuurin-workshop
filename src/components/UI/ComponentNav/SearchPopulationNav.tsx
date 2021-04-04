import React from 'react'
import { BackgroundWhite, SectionContainer, BoldText, IconFlex,WhiteIcon } from "assets/GlobalLayoutStyle";
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch } from "react-redux"
import { push } from "connected-react-router";
import styled from "styled-components"

const NavIcon = styled(WhiteIcon)`
  width:100px;
  height:100px;
  flex-direction:column;
    box-shadow: 0 0px 10px rgba(0,0,0,0.2);
`



const SearchPopulationNav:React.FC= () => {
     const dispatch = useDispatch()
  return (
    <div>
         <SectionContainer>

              <IconFlex>
          <NavIcon onClick={() => dispatch(push("/search"))}>
          <SearchIcon style={{fontSize:"45px"}}/><br/>
            <BoldText>検索</BoldText>
        </NavIcon>
          <NavIcon onClick={()=>dispatch(push("/population"))}>
          <FavoriteIcon style={{ fontSize: "45px" }} />
            <BoldText>人気</BoldText>
       </NavIcon>
      </IconFlex>

        </SectionContainer>
    </div>
  )
}

export default SearchPopulationNav
