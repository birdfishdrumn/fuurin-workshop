import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { WINDBELLMAKERTYPE } from "types/windBellMaker";
import WindBellMaker from "./WindBellMaker";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import styled from "styled-components";


const CustomDialogContent = styled(DialogContent)`
 background:url(${props=>props.background});
  background-size:cover;
@media(max-width:768px){
 padding:0;

}
`
const WindBellDialog:React.FC<WINDBELLMAKERTYPE> = ({textLength,strip,setStrip,dialogOpen,handleClose,windBellImage,setWindBellImage,pathItem,setPathItem,wishText,inputWishText}) => {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [background, setBackground] = useState<string>("");
  return (

    <div>

      <Dialog
        fullScreen={fullScreen}
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <CustomDialogContent background={background}>

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
              setBackground={setBackground}
            />

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
