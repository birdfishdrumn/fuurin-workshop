import React, { useState,useCallback }from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { PostEdit } from "templates/index";
import { DeleteDialog } from "../UI/index"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
      background:"white"
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    root: {
        //   height: "500px",
        // marginTop:"500px"

    }
  }),
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface PROPS {
  open: boolean;
  handleClose: () => void
}


const AddPostModal:React.FC<PROPS> = ({open,handleClose}) =>{
  const classes = useStyles();

  const [openModal, setOpenModal] = useState<boolean>(false)
  const handleModalClose = useCallback(() => {
    setOpenModal(false)
  },[setOpenModal])
  return (
    <div>

      <Dialog fullScreen open={open} style={{margin:"0 !important"}} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={()=>setOpenModal(true)} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              作品の登録・編集
            </Typography>

            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
        <PostEdit dialog handleClose={handleClose}/>

      </Dialog>
      <DeleteDialog product handleModalClose={handleModalClose} handleClose={handleClose} openModal={openModal}/>
    </div>
  );
}

export default AddPostModal
