import React,{useState} from 'react';
import { withStyles,WithStyles,createStyles, Theme  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { deletePost } from "../../../reducks/posts/operations";
import {useSelector,useDispatch} from "react-redux";

import { SignIn, SignUp } from "../../PostProduct/index";
import { makeStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(3),
      width:"100%"
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const useStyles = makeStyles((theme) => ({
  root: {

    // display: "inlineBlock"



  },
}))

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

interface PROPS {
  signIn?: boolean;
  setSign: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  handleClose: ()=>void
}

 const  CustomDialog:React.FC<PROPS> = ({open,handleClose,signIn,setSign}) =>{

   const dispatch = useDispatch()
 const classes = useStyles()
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };



  return (
    <div>

      <Dialog className={classes.root}onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
             <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         {signIn ? "ログイン" : "アカウントを登録"}
        </DialogTitle>
        <DialogContent >
          {signIn ?
            <SignIn setSign={setSign} />
            :
            <SignUp setSign={setSign}/>
        }

        </DialogContent>
        <DialogActions>

</DialogActions>
      </Dialog>
    </div>
  );
}

export default CustomDialog
