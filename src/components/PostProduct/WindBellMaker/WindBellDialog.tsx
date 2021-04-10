import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {PrimaryButton} from "components/UI/index"
import DoneIcon from '@material-ui/icons/Done';
import { WindBellMakerType } from "types/posts"
import WindBellMaker from "./WindBellMaker"
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import styled from "styled-components"

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
const WindBellDialog:React.FC<WindBellMakerType> = ({textLength,strip,setStrip,dialogOpen,handleClose,windBellImage,setWindBellImage,pathItem,setPathItem,wishText,inputWishText}) => {

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
            {/* <WindBellMaker
              strip={strip}
              setStrip={setStrip}
              pathItem={pathItem} setPathItem={setPathItem} windBellImage={windBellImage} setWindBellImage={setWindBellImage} /> */}
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


          {/* <DialogContentText>


          </DialogContentText> */}
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
