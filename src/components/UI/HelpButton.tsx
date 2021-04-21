import React from 'react';
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { useDispatch } from "react-redux";
import { dialogOpenAction } from "reducks/dialog/dialogSlice";

const HelpIconWrapper = styled.div`
 position:relative;
`
const StyledIconButton= styled(IconButton)`
  margin-bottom:-20px;
  position:absolute;
  right:${props=>(props.noneRightSpace ? "0":"60px")};
  top:15px;
  @media(max-width:768px){
  right:-15px;
  top:15px;
  margin-bottom:-20px;
  }

`

interface PROPS {
  type: string;
  name: string;
  cropper?: boolean;
  onClick?: any;
  noneRightSpace?: boolean;
}

const HelpButton: React.FC<PROPS> = ({ type, name,noneRightSpace}) => {
  const dispatch = useDispatch()
  return (
    <div>
        <HelpIconWrapper>
              <StyledIconButton onClick={()=>dispatch(dialogOpenAction({type:type,title:name})) } noneRightSpace={noneRightSpace}>
              <ContactSupportIcon style={{ fontSize: "25px" }}/>
            </StyledIconButton>
      </HelpIconWrapper>

    </div>
  )
}

export default HelpButton
