import React from 'react';
import { Text } from 'assets/GlobalLayoutStyle';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { SignIn, SignUp, Report } from 'components/PostProduct/index';
import {
  dialogCloseAction,
  getDialogState,
  getDialogType,
  getDialogTitle,
  getDialogContent,
  getDialogId,
} from 'reducks/dialog/dialogSlice';
import {
  WindBellMakerHelp,
  AddProductHelp,
  SearchHelp,
  ProfileHelp,
  FavoriteHelp,
} from 'components/HelpComponents/index';
import { deletePost } from 'reducks/posts/operations';
import { snackbarOpenAction } from 'reducks/snackbar/snackbarSlice';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(3),
      width: '100%',
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



const CustomDialog: React.FC = ({}) => {
  const open = useSelector(getDialogState);
  const type = useSelector(getDialogType);
  const title = useSelector(getDialogTitle);
  const id = useSelector(getDialogId);
  const content = useSelector(getDialogContent);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(dialogCloseAction());
  };

  const handleDelete = async (id: string): Promise<void> => {
    dispatch(deletePost(id));
    handleClose();
    await dispatch(snackbarOpenAction({ text: '??????????????????????????????', type: true }));
  };


  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {title}
        </DialogTitle>
        <DialogContent>
          {type === 'signin' && <SignIn />}
          {type === 'signup' && <SignUp />}
          {type === 'favoriteAction' && <Text>????????????????????????????????????????????????</Text>}
          {type === 'windBellMaker' && <WindBellMakerHelp />}
          {type === 'register' && <AddProductHelp />}
          {type === 'search' && <SearchHelp />}
          {type === 'profile' && <ProfileHelp />}
          {type === 'favorite' && <FavoriteHelp />}
          {type === 'report' && <Report id={id} content={content} />}
          {type === "delete" && " ???????????????????????????????????????????????????????????????????????????????????????"}
        </DialogContent>
        {type === "delete" &&
          <DialogActions>
            <Button onClick={() => handleDelete(id)} color="primary">
              ????????????
            </Button>
        </DialogActions>
        }
      </Dialog>
    </div>
  );
};

export default CustomDialog;
