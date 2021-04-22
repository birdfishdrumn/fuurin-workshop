import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components"

export const HelpIconWrapper = styled.div`
  position: relative;
`;

export const StyledIconButton = styled(IconButton)`
  margin-bottom: -20px;
  position: absolute;
  right: ${(props) => (props.noneRightSpace ? '0' : '60px')};
  top: 15px;
  @media (max-width: 768px) {
    right: -15px;
    top: 15px;
    margin-bottom: -20px;
  }
`;
