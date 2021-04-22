import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useSelector, useDispatch } from 'react-redux';
import {
  getModalState,
  modalCloseAction,
  getModalText,
  getModalType,
} from 'reducks/modal/modalSlice';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '500px',
    width: '90%',
    margin: '0 auto',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const open = useSelector(getModalState);
  const dispatch = useDispatch();
  const type = useSelector(getModalType);
  const text = useSelector(getModalText);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => dispatch(modalCloseAction())}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{text}</h2>
            <Divider />

            {type === 'userConfirm' && (
              <p id="transition-modal-description">
                本人確認用のメールを送信しました。メールを確認してリンクで本人確認の登録を行ってください。
                <br />
                またメールが届かない場合はメールアドレスが間違っているか、迷惑メールフォルダに振り当てられている可能性がありますのでご確認ください。
              </p>
            )}
            {type === 'report' && (
              <p id="transition-modal-description">
                ご報告ありがとうございます。該当のものを確認次第ご対応させていただきますのでよろしくお願いいたします。
              </p>
            )}
            {type === 'reset' && (
              <p id="transition-modal-description">
                ご報告ありがとうございます。該当のものを確認次第ご対応させていただきますのでよろしくお願いいたします。
              </p>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
