import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { WINDBELLMAKERTYPE } from "types/windBellMaker";
import WindBellMaker from "./WindBellMaker";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import styled from "styled-components";

const TwoColumn = styled.div`
  /* width:100%; */
  display:flex;
  text-align:center;
  margin:0 auto;
`
const CustomDialogContent = styled(DialogContent)`
@media(max-width:768px){
 padding:0;
}

`
const WindBellDialog:React.FC<WINDBELLMAKERTYPE> = ({textLength,strip,setStrip,dialogOpen,handleClose,windBellImage,setWindBellImage,pathItem,setPathItem,wishText,inputWishText}) => {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <div>

      <Dialog
        fullScreen={fullScreen}
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <CustomDialogContent>
          <TwoColumn>
            <WindBellMaker
              textLength={textLength}
      pathItem={pathItem}
        setPathItem={setPathItem}
        setWindBellImage={setWindBellImage}
        windBellImage={windBellImage}
        strip={strip}
              setStrip={setStrip}
              wishText={wishText}
              inputWishText={inputWishText}
            />
          </TwoColumn>
          <div className="module-spacer--medium" />
          <div style={{textAlign:"right"}}>

            <IconButton  onClick={handleClose}>
              <CloseIcon style={{fontSize:"40px"}}/>
            </IconButton>
         </div>
        </CustomDialogContent>
      </Dialog>
    </div>
  );
}

export default WindBellDialog
