import React from 'react';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { useDispatch } from 'react-redux';
import { dialogOpenAction } from 'reducks/dialog/dialogSlice';
import { HelpIconWrapper, StyledIconButton } from "./style";


interface PROPS {
  type: string;
  name: string;
  cropper?: boolean;
  onClick?: any;
  noneRightSpace?: boolean;
}

const HelpButton: React.FC<PROPS> = ({ type, name, noneRightSpace }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <HelpIconWrapper>
        <StyledIconButton
          onClick={() => dispatch(dialogOpenAction({ type: type, title: name }))}
          noneRightSpace={noneRightSpace}
        >
          <ContactSupportIcon style={{ fontSize: '25px' }} />
        </StyledIconButton>
      </HelpIconWrapper>
    </div>
  );
};

export default HelpButton;
