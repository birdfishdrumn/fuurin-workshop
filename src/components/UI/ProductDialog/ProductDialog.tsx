import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import PostDetail from "templates/PostDetail"


export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const style = {
    width:"1500px"
  }
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const width = useMediaQuery(theme.breakpoints.up('sm'));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        //  style={{maxWidth:"1000px !important"}}
        maxWidth="lg"
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >

        <DialogContent>
          <DialogContentText>
            <PostDetail/>
          </DialogContentText>

        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
           閉じる
          </Button>
       </DialogActions>
      </Dialog>
    </div>
  );
}
