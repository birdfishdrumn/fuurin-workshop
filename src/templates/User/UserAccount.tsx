import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { PrimaryButton } from '../../components/UI';
import { getUserAvatar } from '../../reducks/users/userSlice';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { Title } from 'assets/GlobalLayoutStyle';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: 'auto',
  },
}));

const UserAccount = () => {
  const classes = useStyles();
  const history = useHistory();
  const avatar = useSelector(getUserAvatar);
  const transition = useCallback((path: string): void => {
    history.push(path);
  }, []);
  return (
    <div>
      <section className="c-section-container center">
        <Title>アカウントの設定</Title>
        <Avatar className={classes.large} src={avatar} />

        <div className="module-spacer--medium" />

        <PrimaryButton
          label={'パスワードを変更する'}
          onClick={() => transition('/user/account/password')}
        />
        <PrimaryButton label={'退会する'} onClick={() => transition('/user/account/delete')} />
      </section>
    </div>
  );
};

export default UserAccount;
