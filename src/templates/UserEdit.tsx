import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { TextInput, SelectBox, PrimaryButton } from "../components/UI/index";
import styles from "./module.css/SignUp.module.css";
import { db,storage ,FirebaseTimestamp,auth} from "../firebase/index"
import firebase from "firebase/app"
import { getUsername, getUserAvatar, getUserId, getEmail,updateUserAction,getUserProfile } from "../reducks/users/userSlice";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import IconButton from "@material-ui/core/IconButton";
import { hideLoadingAction, showLoadingAction } from "../reducks/loadingSlice";
import { snackbarOpenAction } from "reducks/snackbar/snackbarSlice"
import { push } from "connected-react-router"
import loadImage from 'blueimp-load-image';
import { SectionContainer,Title } from 'assets/GlobalLayoutStyle';


const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: "auto"
  },
}));


const UserEdit: React.FC = () => {
    const dispatch = useDispatch();

const classes = useStyles();
  const currentUsername: string = useSelector(getUsername);
  const currentEmail: string = useSelector(getEmail);
  const currentAvatar: string = useSelector(getUserAvatar);
  const currentProfile:string = useSelector(getUserProfile)
const uid =useSelector(getUserId)
  const [username, setUsername] = useState(currentUsername || ""),
    [email, setEmail] = useState(currentEmail || ""),
    [profile, setProfile] = useState(currentProfile || ""),
    [avatar, setAvatar] = useState(currentAvatar || ""),
    [url, setUrl] = useState("");
    console.log(uid)
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

    const inputProfile = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setProfile(event.target.value);
    },
    [setProfile]
  );


    const inputUrl = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUrl(event.target.value);
    },
    [setUrl]
  );



    const onChangeImageHandler = async(e:  React.ChangeEvent<HTMLInputElement>) => {
    // ![0]はTypeScriptの使用でnull,undefinedではないことを示す。登録された0番目の配列を返す。
        dispatch(showLoadingAction("uploading..."))
 const file: any = e.target.files![0];
        let blob = new Blob([file], { type: "image/jpeg" });

       const canvas = await loadImage(blob, {
                maxWidth: 1000,
                canvas: true,
            });
        // Generate random 16 digits strings
        const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const N=16;
        const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n)=>S[n%S.length]).join('')

      canvas.image.toBlob((blob) => {
        const uploadRef = storage.ref('avatars').child(fileName);
        const uploadTask = uploadRef.put(blob);

        uploadTask.then(() => {
          // Handle successful uploads on complete
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            const newImage = downloadURL;
            setAvatar(newImage)

            dispatch(hideLoadingAction())
          });
        }).catch(() => {
          dispatch(hideLoadingAction())
        });
      },"image/jpeg")
    }

  const updateUser = async(avatar: string, username: string, email: string,profile:string,url:string) => {
    dispatch(showLoadingAction("ユーザー情報を更新"))
    const timestamp = FirebaseTimestamp.now()
    const userInitialData = {
      email: email,
      updated_at: timestamp,
      username: username,
      avatar: avatar,
      uid: uid,
      profile: profile,
      url:url

    }
    const user =auth.currentUser;
   console.log(user)
user.updateProfile({
  displayName: username,
  photoURL: avatar,

}).then(function() {
  console.log("success")
}).catch(function(error) {
  // An error happened.
});

//     user.updateEmail(email).then(function() {
//   console.log("success")
// }).catch(function(error) {
//   // An error happened.
// });


    await dispatch(updateUserAction(userInitialData));

    // user情報を書き換えた後に、過去の情報が全て書き換えられる処理
    await db.collection("users").doc(uid).set(userInitialData, { merge: true }).then(() => {
      dispatch(push("/user/mypage"))
    }).then(() => {
             dispatch(hideLoadingAction())
      dispatch(snackbarOpenAction({text: "ユーザー情報の更新をしました！",type:true}))

      }).catch(() => {
        dispatch(hideLoadingAction())
          dispatch(snackbarOpenAction({text: "更新に失敗しました。再度時間が経ってからお試しください。",type:false}))
        });
  };

//     const commentUser = db.collection("posts").doc(allId).collection("comments")
//               commentUser.get().then((querySnapshot) => {
//                 querySnapshot.forEach((doc) => {
//                   const comId = doc.data().id;
//                   console.log(comId)
//     })
//  })




  return (
    <div>
            <SectionContainer>
        <Title>ユーザー情報の登録・編集</Title>
        <div className="c-section-container">
  <Box textAlign="center">

                <IconButton>
              <label>

                <Avatar className={classes.large} src={avatar}/>
                    <input
                      className={styles.login_hiddenIcon}
                      type="file"
              onChange={onChangeImageHandler}
                />

                  </label>
            </IconButton>
             <p>アバターをタップして変更</p>
</Box>

                  <div className="module-spacer--medium" />
 <TextInput
          fullWidth={true}
          label={"お名前"}
          multiline={false}
          required={true}
          onChange={inputUsername}
          rows={1}
          value={username}
          type={"text"}
        />

        <TextInput
          fullWidth={true}
          label={"メールアドレス"}
          multiline={false}
          required={true}
          onChange={inputEmail}
          rows={1}
          value={email}
          type={"email"}
        />

              <TextInput
          fullWidth={true}
          label={"紹介文"}
          multiline={true}
          required={true}
          onChange={inputProfile}
          rows={5}
          value={profile}
          type={"text"}
          />
                        <TextInput
          fullWidth={true}
          label={"活動しているsns,webサイトのurl"}
          multiline={false}
          required={true}
          onChange={inputUrl}
          rows={1}
          value={url}
          type={"text"}
        />
          <div className="module-spacer--medium" />
          <div className="center">
          <PrimaryButton
            label={"ユーザー情報を更新"}
            onClick={() =>
              updateUser(
                    avatar,username,email,profile,url
            )
             }
            />

            </div>
        </div>
           </SectionContainer>
    </div>
  )
}

export default UserEdit
