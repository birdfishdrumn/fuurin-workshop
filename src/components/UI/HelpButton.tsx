import React,{useCallback,useState} from 'react'
import styled from "styled-components"
import IconButton from "@material-ui/core/IconButton";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import HelpDialog from "components/UI/Dialog/HelpDialog"
const HelpIconWrapper = styled.div`
 position:relative;
`

const StyledIconButton= styled(IconButton)`

  margin-bottom:-20px;
  position:absolute;
  right:5px;
  top:15px;
  @media(max-width:768px){
    right:-10px;
  }
`

interface PROPS {
  type: string;
  name: string;
}


const HelpButton:React.FC<PROPS> = ({type,name}) => {
  const [helpDialogOpen, setHelpDialogOpen] = useState<boolean>(false);
     const helpDialogClose = useCallback(() => {
     setHelpDialogOpen(false)

  },[setHelpDialogOpen])
  return (
    <div>
        <HelpIconWrapper>
                 <StyledIconButton onClick={()=>setHelpDialogOpen(!helpDialogOpen)}>
              <ContactSupportIcon style={{ fontSize: "35px" }}/>
            </StyledIconButton>
      </HelpIconWrapper>
      <HelpDialog title={name}
        type={type}

        helpDialogClose={helpDialogClose} helpDialogOpen={helpDialogOpen} />
    </div>
  )
}

export default HelpButton
