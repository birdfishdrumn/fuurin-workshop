import React, {useCallback} from 'react';
import { useSelector} from "react-redux";
import {PrimaryButton, TextDetail,HelpButton} from "../../components/UI";
import {getUserAvatar, getUsername,getEmail,getUserProfile,getUserUrl,getUserTwitter,getUserInstagram,getUserId} from "../../reducks/users/userSlice";
import {useHistory} from "react-router-dom"
import { makeStyles} from "@material-ui/core/styles"
import { Avatar } from "@material-ui/core";
import { Title,SectionContainer,MinText} from "assets/GlobalLayoutStyle";
import { returnCodeToBr } from "functions/function"
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
  const history = useHistory();
  const uid = useSelector(getUserId)
  const username = useSelector(getUsername);
  const email = useSelector(getEmail);
  const avatar = useSelector(getUserAvatar);
  const profile = useSelector(getUserProfile);
  const url = useSelector(getUserUrl);
  const twitter = useSelector(getUserTwitter)?.split("https://twitter.com/")[1];
  const instagram = useSelector(getUserInstagram)?.split("https://instagram.com/")[1];
  const transition = useCallback((path) => {
       history.push(path)
    }, []);

    return (
      <SectionContainer>
        {/* <HelpButtonWrapper> */}
           <HelpButton type="profile" name="プロフィールの編集について"/>
        <Title>マイプロフィール</Title>
        {/* </HelpButtonWrapper> */}
            <Avatar className={classes.large} src={avatar} />
        <div className="module-spacer--medium" />
            <TextDetail label="ユーザー名" value={username} />
           <div className={classes.profile}>
             <MailIcon style={{margin:"0 10px -5px 0"}}/>email
           <MinText left style={{ marginTop: "10px", fontWeight: 600 }}>{email}</MinText>
           </div>
          <div className="center">
          <div className={classes.profile}>
            <AccountCircleIcon style={{margin:"0 10px -5px 0"}}/> プロフィール
            <MinText style={{ marginTop: "10px", fontWeight: 600 }}>{profile && returnCodeToBr(profile)}</MinText>
          </div>
                  <div className={classes.profile}>
              <LanguageIcon style={{margin:"0 10px -5px 0"}}/>Url
            <MinText left style={{ marginTop: "10px", fontWeight: 600 }}>{url}</MinText>
          </div>
             <div className={classes.profile}>
            <TwitterIcon style={{margin:"0 10px -5px 0"}}/>twitter
            <MinText style={{ marginTop: "10px", fontWeight: 600 }}>{twitter}</MinText>
          </div>
            <div className={classes.profile}>
            <InstagramIcon style={{margin:"0 10px -5px 0"}}/>instagram
            <MinText style={{ marginTop: "10px", fontWeight: 600 }}>{instagram}</MinText>
          </div>
          <div className="center"></div>
            <PrimaryButton label={"投稿した作品"} onClick={() => transition(`/users/${uid}`)} />
            <PrimaryButton label={"作品を編集・削除"} onClick={() => transition('/user/post')} />
            <PrimaryButton label={"プロフィールを編集する"} onClick={() => transition('/user/edit')}/>
            <PrimaryButton label={"アカウントを設定"} onClick={() => transition('/user/account')}/>
          </div>
        </SectionContainer>
    );
};

export default UserMyPage;
