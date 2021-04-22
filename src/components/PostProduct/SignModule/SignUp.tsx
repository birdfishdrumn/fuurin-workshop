import React, { useCallback, useState } from 'react';
import { TextInput, PrimaryButton } from 'components/UI';
import { signUp } from 'reducks/users/operations';
import { useDispatch } from 'react-redux';
import { MinText, StyledLink } from 'assets/GlobalLayoutStyle';
import Divider from '@material-ui/core/Divider';
import { dialogOpenAction } from 'reducks/dialog/dialogSlice';

const SignUp: React.FC = (props: any) => {
  // const history = useHistory()
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>(''),
    [email, setEmail] = useState<string>(''),
    [password, setPassword] = useState<string>(''),
    [confirmPassword, setConfirmPassword] = useState<string>('');

  const inputUsername = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );

  const inputEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );
  const inputPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );
  const inputConfirmPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(event.target.value);
    },
    [setConfirmPassword]
  );

  const canSubmit = () => {
    if (username === '') return true;
    if (email === '') return true;
    if (password === '') return true;
    if (confirmPassword === '') return true;
    if (!password.match(/^[A-Za-z0-9]*$/)) return true;
    if (!confirmPassword.match(/^[A-Za-z0-9]*$/)) return true;
    return false;
  };
  return (
    <div>
      <TextInput
        fullWidth={true}
        error={username.length < 12 ? false : true}
        label={'お名前(12文字まで)'}
        multiline={false}
        required={true}
        rows={1}
        value={username}
        type={'text'}
        onChange={inputUsername}
        variant="outlined"
        inputProps={{
          maxLength: 12,
        }}
      />
      <TextInput
        fullWidth={true}
        label={'Email'}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={'email'}
        onChange={inputEmail}
        variant="outlined"
      />
      <TextInput
        fullWidth={true}
        label={'パスワード(6文字以上、英数字のみ)'}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={'password'}
        onChange={inputPassword}
        variant="outlined"
        helperText={!password.match(/^[A-Za-z0-9]*$/) && '文字は英数字だけです'}
        error={password.match(/^[A-Za-z0-9]*$/) ? false : true}
      />
      <TextInput
        fullWidth={true}
        label={'パスワード(確認)'}
        multiline={false}
        required={true}
        rows={1}
        value={confirmPassword}
        type={'password'}
        onChange={inputConfirmPassword}
        variant="outlined"
        helperText={!confirmPassword.match(/^[A-Za-z0-9]*$/) && '文字は英数字だけです'}
        error={confirmPassword.match(/^[A-Za-z0-9]*$/) ? false : true}
      />
      <div className="center">
        <MinText left>
          アカウントを登録した時点で<StyledLink to="terms">利用規約</StyledLink>と
          <StyledLink to="policy">プライバシーポリシー</StyledLink>に同意したものとします。
        </MinText>
        <PrimaryButton
          label={'同意して登録'}
          disabled={canSubmit()}
          onClick={() => dispatch(signUp(username, email, password, confirmPassword))}
        />

        <div className="module-spacer--small" />

        <Divider />

        <MinText left>
          入力後本人確認メールをお送りいたします。メールのリンクより本人確認後、アカウント登録が正式に完了しログインが可能になります。
          <br />
          <span style={{ color: 'red' }}>
            ※既に同じメールアドレスのSNSアカウントで登録している場合は、新規登録することができませんのでメールアドレスを変えて登録してください。
          </span>
        </MinText>

        <div className="module-spacer--medium" />

        <p
          className="pointer"
          onClick={() => dispatch(dialogOpenAction({ type: 'signin', title: 'ログイン' }))}
        >
          アカウントをお持ちの方はこちら
        </p>
      </div>
    </div>
  );
};

export default SignUp;
