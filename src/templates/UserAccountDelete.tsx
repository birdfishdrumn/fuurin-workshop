import React, { useCallback,useState }from 'react'
import {useDispatch, useSelector} from "react-redux";
import {PrimaryButton, TextInput} from "../components/UI";
import { getUserAvatar, getUsername, getUserProfile,getUserId } from "../reducks/users/userSlice";
import {auth} from "firebase/index"
import {useHistory} from "react-router-dom"
import { makeStyles} from "@material-ui/core/styles"
import {userDelete} from "reducks/users/operations"
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
  const uid = useSelector(getUserId)
  const history = useHistory();
  const [name, setName] = useState("")
   const [password,setPassword] = useState("")
    const username = useSelector(getUsername);

  const profile = useSelector(getUserProfile)
  const deleteUser = (uid) => {
    dispatch(userDelete(uid))
    // alert("ok")
  }


   const inputName = useCallback(
    (event:React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    [setName]
   );


  return (
    <div>
      <SectionWrapping>
        <Title>退会のお手続き</Title>
        <Text Flex left>お客様のお名前を入力後、こちらのボタンをクリックしていただければ退会のお手続きが完了します。退会してしまうと、今まで登録した作品のデータなども全て削除されてしまいますので、ご注意くださいませ。</Text>
        <BoldText left color={"red"}>※ログインの状態が長く続いてる状態だと処理に失敗する可能性がありますので、再度ログインし直してください。</BoldText>

        <div className="module-spacer--medium" />
         <TextInput
          fullWidth={false}
          label={"お名前"}
          multiline={false}
          required={true}
          onChange={inputName}
          rows={1}
          value={name}
              type={"text"}
              variant="outlined"
        />

        <br/>
        <PrimaryButton label={"退会する"}
          disabled={name != username}
          onClick={() => deleteUser(uid)}
        />


        </SectionWrapping>
    </div>
  )
}

export default UserAccount
