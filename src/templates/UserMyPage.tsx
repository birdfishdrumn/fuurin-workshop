import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {PrimaryButton, TextDetail,HelpButton} from "../components/UI";
import {getUserAvatar, getUsername,getEmail,getUserProfile,getUserUrl} from "../reducks/users/userSlice";
import {useHistory} from "react-router-dom"
import { makeStyles} from "@material-ui/core/styles"
import { Avatar } from "@material-ui/core";
import { Title,BoldText,HelpButtonWrapper} from "assets/GlobalLayoutStyle";
import {returnCodeToBr} from "functions/function"

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
        borderRadius:"10px",
        boxShadow: "0 0px 10px rgba(0,0,0,0.2)"
  }
}));

interface PROPS{
 props: any
}

const UserMyPage: React.FC<PROPS> = (props) => {
    const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
    const username = useSelector(getUsername);
const email: string = useSelector(getEmail)
  const avatar = useSelector(getUserAvatar)
  const profile = useSelector(getUserProfile)
  const url = useSelector(getUserUrl)
  console.log(url)

    const transition = useCallback((path) => {
       history.push(path)
    }, []);
  console.log(avatar)
    return (
      <section className="c-section-container center">
        <HelpButtonWrapper>
           <HelpButton type="profile" name="プロフィールの編集について"/>
        <Title>マイプロフィール</Title>
        </HelpButtonWrapper>


            <Avatar className={classes.large} src={avatar} />
        <div className="module-spacer--medium" />


            <TextDetail label="ユーザー名" value={username} />

           <div className={classes.profile}>
          Url
            <BoldText left style={{ marginTop: "10px", fontWeight: 600 }}>{url}</BoldText>
            </div>
        <div className="center">
          <div className={classes.profile}>
          紹介文
            <BoldText style={{ marginTop: "10px", fontWeight: 600 }}>{returnCodeToBr(profile)}</BoldText>
            </div>
        <div className="center"></div>
              <PrimaryButton label={"投稿した作品"} onClick={() => transition('/user/post')} />
 <PrimaryButton label={"プロフィールを編集する"} onClick={() => transition('/user/edit')}/>
  <PrimaryButton label={"アカウントを設定"} onClick={() => transition('/user/account')}/>

            </div>
        </section>
    );
};

export default UserMyPage;
