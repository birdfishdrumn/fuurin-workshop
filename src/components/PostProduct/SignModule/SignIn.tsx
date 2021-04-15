import React, { useCallback, useState } from "react";
import { TextInput, PrimaryButton } from "components/UI";
import { signIn ,googleSignIn,twitterSignIn} from "reducks/users/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import { Divider } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { dialogCloseAction, dialogOpenAction } from "reducks/dialog/dialogSlice";
import { faGoogle, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const SignInWrapper = styled.div`
width:100%;
 @media(min-width:600px){
   width:500px
 }
`
const SNS = styled.ul`
list-style:none;
display:flex;
justify-content:space-around;

>li{
 cursor: pointer;
}
`

const SignIn: React.FC= (props: any) => {
  const dispatch = useDispatch();
  const  [email, setEmail] = useState<string>(""),
         [password, setPassword] = useState<string>("");


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

  const signInAction = () => {
    dispatch(signIn(email, password))
  };

  const passwordPush = () => {
    dispatch(push("/signin/reset"))
    dispatch(dialogCloseAction())

  }

  return (
    <SignInWrapper>
      <TextInput
        fullWidth={true}
        label={"Email"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        variant="outlined"
        onChange={inputEmail}
      />
      <div className="module-spacer--very-small"/>
      <TextInput
        fullWidth={true}
        label={"パスワード"}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={"password"}
        variant="outlined"
        onChange={inputPassword}
      />

      <div className="center">

        <PrimaryButton
          label={"ログイン"}
                disabled={
           email === "" || password === "" }
          onClick={() =>
            signInAction()
          }
        />

        <div className="module-spacer--medium" />
        <Divider />
        <div className="module-spacer--medium" />
        <SNS>
          <li onClick={()=>dispatch(googleSignIn())}><FontAwesomeIcon style={{fontSize:"2rem"}}icon={faGoogle} /></li>
          <li onClick={()=>dispatch(twitterSignIn())}><FontAwesomeIcon style={{fontSize:"2rem",color:"#1DA1F2"}}icon={faTwitter} /></li>
          <li><FontAwesomeIcon style={{ fontSize: "2rem",color:"#3B5998" }} icon={faFacebook} /></li>
          </SNS>
       <div className="module-spacer--medium" />

        <p className="pointer" onClick={() =>  dispatch(dialogOpenAction({type:"signup",title:"アカウントを登録"}))}>
          新規登録はこちら
        </p>
         <p className="pointer" onClick={() =>passwordPush()}>
          パスワードを忘れた方はこちら
        </p>
      </div>
    </SignInWrapper>
  );
};

export default SignIn;
