import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import PostDetail from 'components/PostProduct/PostDetailModule';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: 0,
    background: '#FFFAFA',
  },
}));

export default function ScrollDialog({ dialogId, dialogOpen, handleClose }) {
  const classes = useStyles();
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
      <Dialog
        fullScreen={fullScreen}
        maxWidth="xl"
        open={dialogOpen}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <div id="title" />
        <DialogContent dividers className={classes.content}>
          <PostDetail productId={dialogId} onClose={handleClose} />
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
