import React, { useCallback, useState } from "react";
import { TextInput, PrimaryButton } from "components/UI";
import { signUp } from "reducks/users/operations";
import { useDispatch } from "react-redux";

// import { useHistory } from "react-router-dom";
interface PROPS {
    setSign: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<PROPS> = (props: any) => {
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


        <PrimaryButton
          label={"アカウント登録"}
          disabled={
             username === "" || email === "" || password === "" || confirmPassword === ""}
          onClick={() =>
                dispatch(signUp(username, email, password, confirmPassword))
          }
        />
        <div className="module-spacer--medium" />
        <p className="pointer" onClick={()=>props.setSign(true)}>
          アカウントをお持ちの方はこちら
        </p>
      </div>
    </div>
  );
};

export default SignUp;
