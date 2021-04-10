import React, { useCallback, useState } from "react";
import { TextInput, PrimaryButton } from "components/UI";
import { signUp } from "reducks/users/operations";
import { useDispatch } from "react-redux";
import { MinText, StyledLink } from "assets/GlobalLayoutStyle"
import Divider from "@material-ui/core/Divider"
import {dialogStateChangeAction} from "reducks/dialog/dialogSlice"
import { faLastfmSquare } from "@fortawesome/free-brands-svg-icons";


const SignUp: React.FC = (props: any) => {
  // const history = useHistory()
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>(""),
    [email, setEmail] = useState<string>(""),
    [password, setPassword] = useState<string>(""),
    [confirmPassword, setConfirmPassword] = useState<string>("");

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


  return (
    <div>


      <TextInput
        fullWidth={true}
        label={"ユーザー名"}
        multiline={false}
        required={true}
        rows={1}
        value={username}
        type={"text"}
        onChange={inputUsername}
        variant="outlined"
      />
      <TextInput
        fullWidth={true}
        label={"Email"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
        variant="outlined"
      />
      <TextInput
        fullWidth={true}
        label={"パスワード"}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={"password"}
        onChange={inputPassword}
        variant="outlined"
      />
      <TextInput
        fullWidth={true}
        label={"パスワード(確認)"}
        multiline={false}
        required={true}
        rows={1}
        value={confirmPassword}
        type={"password"}
        onChange={inputConfirmPassword}
        variant="outlined"
      />
      <div className="center">

        <MinText left>アカウントを登録した時点で<StyledLink to="terms">利用規約</StyledLink>と<StyledLink to="policy">プライバシーポリシー</StyledLink>に同意したものとします。</MinText>
        <PrimaryButton
          label={"同意して登録"}
          disabled={
             username === "" || email === "" || password === "" || confirmPassword === ""}
          onClick={() =>
                dispatch(signUp(username, email, password, confirmPassword))
          }
        />
         <div className="module-spacer--small" />
       <Divider/>
        <MinText left>入力後本人確認メールをお送りいたします。メールのリンクより本人確認後、アカウント登録が正式に完了しログインが可能になります。<br />
          <span style={{color:"red"}}>※既に同じメールアドレスのSNSアカウントで登録している場合は、新規登録することができませんのでメールアドレスを変えて登録してください。</span>
        </MinText>
         <div className="module-spacer--medium" />
        <p className="pointer" onClick={()=>dispatch(dialogStateChangeAction(false))}>
          アカウントをお持ちの方はこちら
        </p>
      </div>
    </div>
  );
};

export default SignUp;
