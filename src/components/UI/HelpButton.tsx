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
  right:5px;
  top:15px;
`

interface PROPS {
  type: string;
  name: string;
  cropper?: boolean;
  onClick?: any;
}

const HelpButton: React.FC<PROPS> = ({ type, name}) => {
  const dispatch = useDispatch()
  return (
    <div>
        <HelpIconWrapper>
                 <StyledIconButton onClick={()=>dispatch(dialogOpenAction({type:type,title:name}))}>
              <ContactSupportIcon style={{ fontSize: "35px" }}/>
            </StyledIconButton>
      </HelpIconWrapper>

    </div>
  )
}

export default HelpButton
