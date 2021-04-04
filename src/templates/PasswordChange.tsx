import React, { useCallback,useState }from 'react'
import {useDispatch, useSelector} from "react-redux";
import {PrimaryButton, TextInput} from "../components/UI";
import { getUserAvatar, getUsername, getUserProfile } from "../reducks/users/userSlice";
import {auth} from "firebase/index"
import {useHistory} from "react-router-dom"
import { makeStyles} from "@material-ui/core/styles"
import {changePasswordAction} from "reducks/users/operations"
import { Title,Text,SectionWrapping,BoldText } from "assets/GlobalLayoutStyle";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: "auto"
  },
  profile: {
       flexFlow: 'row wrap',
    marginBottom: 16,
    background: "white",
    padding: 16,
        borderRadius:"5%"
  }
}));

const UserAccount = () => {
      const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword,setNewPassword] = useState("")
    const username = useSelector(getUsername);

  const profile = useSelector(getUserProfile)
  const changePassword = (newPassword,currentPassword) => {
    dispatch(changePasswordAction(newPassword,currentPassword))
    // alert("ok")
  }
    const transition = useCallback((path) => {
       history.push(path)
    }, []);
   const inputName = useCallback(
    (event:React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    [setName]
   );
    const inputCurrentPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentPassword(event.target.value);
    },
    [setCurrentPassword]
    );
         const inputNewPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewPassword(event.target.value);
    },
    [setNewPassword]
  );

  return (
    <div>
      <SectionWrapping>
        <Title>パスワードの変更</Title>
        <Text Flex left>こちらではパスワードを変更する事が可能です。現在のパスワード情報が必須になりますので、入力後新しい6桁以上のパスワードを入力してください。</Text>
        <BoldText left color={"red"}>※googleやsnsアカウント情報使用している場合は変更の必要はありませんのでご了承下さい。</BoldText>

        <div className="module-spacer--medium" />
        <TextInput
          fullWidth={false}
          label={"現在のパスワード"}
          multiline={false}
          required={true}
          rows={1}
          value={currentPassword}
          type={"password"}
          variant="outlined"
          onChange={inputCurrentPassword}
        />
          <div className="module-spacer--extra-small" />
                <TextInput
        fullWidth={false}
        label={"新しいパスワード"}
        multiline={false}
        required={true}
        rows={1}
        value={newPassword}
        type={"password"}
        variant="outlined"
        onChange={inputNewPassword}
      />

        <br/>
        <PrimaryButton label={"変更する"}
          // disabled={currentPassword != newPassword}
          onClick={() => changePassword(currentPassword,newPassword)}
        />


        </SectionWrapping>
    </div>
  )
}

export default UserAccount
