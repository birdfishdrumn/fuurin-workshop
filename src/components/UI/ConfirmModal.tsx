import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useSelector, useDispatch } from "react-redux";
import {getModalState,modalOpenAction,modalCloseAction} from "reducks/modal/modalSlice"
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: "500px",
    width:"90%",
    margin:"0 auto"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  const open = useSelector(getModalState)
const dispatch = useDispatch()
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      {/* <button type="button" onClick={()=>dispatch(modalOpenAction())}>
        react-transition-group
      </button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={()=>dispatch(modalCloseAction())}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">本人確認メールの送信</h2>
            <Divider/>
            <p id="transition-modal-description">本人確認用のメールを送信しました。メールを確認してリンクで本人確認の登録を行ってください。またメールが届かない場合はメールアドレスが間違っているか、迷惑メールフォルダに振り当てられている可能性がありますのでご確認ください。</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}