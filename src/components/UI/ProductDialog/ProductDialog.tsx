

import React from "react";
import Button from "@material-ui/core/Button";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import PostDetail from "templates/PostDetailModule"
import { useTheme } from '@material-ui/core/styles';
import { makeStyles,withStyles,WithStyles,createStyles, Theme   } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
 import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({

  content: {
    padding: 0,
    background:"#F5F5f5"
  }
}))

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


export default function ScrollDialog({ dialogId,dialogOpen,handleClickOpen, handleClose}) {


  const classes = useStyles()
  const theme = useTheme();
 const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (dialogOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [dialogOpen]);

  return (
    <div>

      {/* <Button onClick={handleClickOpen}>scroll=body</Button> */}
      <Dialog
         fullScreen={fullScreen}
           maxWidth="xl"
        open={dialogOpen}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >

        <div id ="title"/>
        <DialogContent dividers className={classes.content}>
            <PostDetail productId={dialogId} onClose={handleClose}/>

          {/* <button onClick={scrollTop}>top</button> */}
          {/* <a href="#scroll-dialog-title">top</a> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            閉じる
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}
