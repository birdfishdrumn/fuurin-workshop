import React, { useState } from 'react';
import {BoldText} from "assets/GlobalLayoutStyle"
import { withStyles,WithStyles,createStyles, Theme  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {useSelector,useDispatch} from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { SignIn, SignUp } from "components/PostProduct/index";
import { dialogOpenAction,dialogCloseAction,getDialogState,getDialogType,getDialogTypeState,getDialogTitle } from "reducks/dialog/dialogSlice";

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



const CustomDialog: React.FC = ({ }) => {
    const [sign,setSign] = useState<boolean>(false)
   const open = useSelector(getDialogState);
  const type = useSelector(getDialogType);
  const typeState = useSelector(getDialogTypeState)
  const title = useSelector(getDialogTitle)
   const classes = useStyles()
   const dispatch=useDispatch()
   const handleClose = () => {
   dispatch(dialogCloseAction())
 }

  return (
    <div>

      <Dialog className={classes.root} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
             <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {title ? title : typeState ? "アカウントを登録" : "ログイン" }
        </DialogTitle>
        <DialogContent >
          {type === "sign" &&
          typeState ?  <SignUp/> :<SignIn/>

          }
          {type === "favorite" &&
            <BoldText>作品をお気に入りに登録しました。</BoldText>

          }

        </DialogContent>
        <DialogActions>

</DialogActions>
      </Dialog>
    </div>
  );
}

export default CustomDialog
