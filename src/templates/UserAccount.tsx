import React, { useCallback }from 'react'
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

const UserAccount = () => {
      const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
    const username = useSelector(getUsername);

  const avatar = useSelector(getUserAvatar)
  const profile = useSelector(getUserProfile)
    const transition = useCallback((path) => {
       history.push(path)
    }, []);
  return (
    <div>
      <section className="c-section-container center">
            <Title>マイページ</Title>
            <Avatar className={classes.large} src={avatar} />
        <div className="module-spacer--medium" />



              <PrimaryButton label={"パスワードを変更する"} onClick={() => transition('/user/post')} />
 <PrimaryButton label={"アカウントを削除する"} onClick={() => transition('/user/edit')}/>


        </section>
    </div>
  )
}

export default UserAccount
