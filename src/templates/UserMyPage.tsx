import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {PrimaryButton, TextDetail} from "../components/UI";
import {getUserAvatar, getUsername,getEmail,getUserProfile} from "../reducks/users/userSlice";
import {useHistory} from "react-router-dom"
import { makeStyles} from "@material-ui/core/styles"
import { Avatar } from "@material-ui/core";
import { Title } from "assets/GlobalLayoutStyle";


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
    const transition = useCallback((path) => {
       history.push(path)
    }, []);
  console.log(avatar)
    return (
        <section className="c-section-container center">
            <Title>マイページ</Title>
            <Avatar className={classes.large} src={avatar} />
        <div className="module-spacer--medium" />


            <TextDetail label="ユーザー名" value={username} />

        <TextDetail label="email" value={email} />

        <div className="center">
          <div className={classes.profile}>
          紹介文
            <p style={{ marginTop: "10px", fontWeight: 600 }}>{profile}</p>
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
