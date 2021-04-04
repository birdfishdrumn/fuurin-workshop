import { AppThunk, RootState } from '../../store';
import { useDispatch } from "react-redux";
// import { history } from "../store";
import firebase from "firebase/app"

import { db, auth, FirebaseTimestamp,provider,twitterProvider } from "../../firebase/index";
import { hideLoadingAction, showLoadingAction } from "../loadingSlice";
import {login,logout,fetchPostsInFavoriteAction,getUserId} from "./userSlice"
import { push } from "react-router-redux";
import { snackbarOpenAction } from "../snackbar/snackbarSlice"
import { modalOpenAction } from "reducks/modal/modalSlice";

export const signIn = (email: string, password: string): AppThunk => {

  return async (dispatch) => {

          dispatch(showLoadingAction("サインインしています..."));
    if (email === "" || password === "") {
        dispatch(hideLoadingAction());
      alert("必須項目が未入力です。")
      return false
    }
   return auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        const userState = result.user
        if (!userState) {
          dispatch(hideLoadingAction());
          alert("パスワードかemailが違います")
              console.log("error")

        throw new Error('ユーザーIDを取得できません');
        }
               const currentUser = auth.currentUser;
        // E-Mailの確認が取れていない場合は強制サインアウト
        if (!currentUser.emailVerified) {
          console.log("dame")
          auth.signOut()
          dispatch(push("/signin"))
        }

        const uid = userState.uid

   return db.collection("users").doc(uid).get().then(snapshot => {
        const data = snapshot.data();
        if (!data) {
            dispatch(hideLoadingAction());
          throw new Error('ユーザーデータが存在しません');
        }


              dispatch(login({
                isSignedIn: true,
                role: data.role,
                uid: uid,
                username: data.username,
                profile: data.profile,
                 avatar: data.avatar,
                 url:data.url
              }))

  //
   }).then(() => {
     dispatch(push("/"))

     dispatch(hideLoadingAction());
     dispatch(snackbarOpenAction({ text:"ログインしました！",type:true}))
            })

      }).catch(() => {
        dispatch(snackbarOpenAction({ text:"パスワードかemailアドレスが違います。",type:false}))
                dispatch(hideLoadingAction());
            });
  }
}


export const signUp = (username: string, email: string, password: string, confirmPassword: string): AppThunk  => {
  return async (dispatch) => {
        dispatch(showLoadingAction("アカウントを登録しています..."));
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      alert("必須項目が未入力です。")
      return false
    }
    if (password !== confirmPassword) {
        dispatch(snackbarOpenAction({ text:"パスワードが一致しません。もう一度確認してお試しください。",type:false}))
       dispatch(hideLoadingAction());
      return false
    }
    return auth.createUserWithEmailAndPassword(email, password)
      .then(result => {

        const user = result.user
        if (user) {

          const currentUser = auth.currentUser;
          console.log(user)
          console.log(currentUser)
          currentUser.sendEmailVerification().then(() => {

            // auth.signOut()
            const uid = user.uid
            const timestamp = FirebaseTimestamp.now()
            const userInitialData = {

              created_at: timestamp,
              email: email,
              role: "customer",
              uid: uid,
              updated_at: timestamp,
              username: username,
              first: false,
              avatar:"",
              url:""
            }
              // auth.signOut()
            // 確認のE-Mail送信に成功
            // この時点ではE-Mailアドレスの所有権が
            // 確認されていないため、強制的にサインアウトします。
            // （サービスの利用はできない）

            db.collection("users").doc(uid).set(userInitialData).then(() => {

             auth.signOut()
              dispatch(hideLoadingAction());
              dispatch(modalOpenAction())
              // dispatch(push("/signin"))

            })

          }).catch((error) => {
            // 確認のE-Mail送信でエラー（エラー処理）
            dispatch(hideLoadingAction());
          })
        }
      }).catch(() => {
        console.log("失敗");
        dispatch(snackbarOpenAction({ text: "こちらのメールアドレスは使用する事ができません", type: false }))
           dispatch(hideLoadingAction());
    })
  }
}


export const signOut = ():AppThunk => {
  return async (dispatch) => {
     dispatch(showLoadingAction("Sign out..."))
    auth.signOut()
      .then(() => {
        dispatch(logout())
        dispatch(hideLoadingAction());
        dispatch(push("/signin"));
           dispatch(snackbarOpenAction({text:"ログアウトしました！",type:true}))

    })
  }
}

export const listenAuthState = ():AppThunk => {
  return async (dispatch) => {
    return auth.onAuthStateChanged(user => {
      if (user) {
 const uid = user.uid
          db.collection("users").doc(uid).get()
            .then(snapshot => {

              const data: any = snapshot.data()
              // if文がないとエラーが出る
              if (data) {
                console.log("huuta")
                console.log(data)
                dispatch(login({
                  isSignedIn: true,
                  role: data.role,
                  uid: uid,
                  email: data.email,
                  username: data.username,
                  avatar: data.avatar,
                 profile: data.profile,
                 url:data.url
                }))
              }

            })


      } else {
        dispatch(push("/signin"))
      }
    })

  }
}

export const  listenAuthNotState= ():AppThunk => {
  return async (dispatch) => {
    return auth.onAuthStateChanged(user => {
      if (user) {
 const uid = user.uid
          db.collection("users").doc(uid).get()
            .then(snapshot => {

              const data: any = snapshot.data()
              // if文がないとエラーが出る

                console.log(data)
                dispatch(login({
                  isSignedIn: true,
                  role: data.role,
                  uid: uid,
                  email: data.email,
                  username: data.username,
                  avatar: data.avatar,
                 profile: data.profile,
                 url:data.url
                }))
            })
      }
    })

  }
}



export const addPostToFavorite = (addedPost: any,uid:string):AppThunk => {
  return async (getState:any) => {

    // const uid = getState().users.uid;
    console.log(uid)
  //  const uid = useSelector(getUserId)
    const favoriteRef = db.collection("users").doc(uid).collection("likes").doc();
    // // likesIdにはドキュメントと同じidが入る。
    addedPost["likesId"] = favoriteRef.id;
    addedPost["uid"] = uid;
    // await favoriteRef.set(addedPost)
     await favoriteRef.set(addedPost)
    // dispatch(push('/likes'))
  }
};

// export const fetchPush = () => {
//   return async (dispatch,getState) => {
// const uid = getState().users.uid
//        const userRef = db.collection("users").doc(uid)
//     userRef.collection("message").orderBy("createdAt","desc").get().then((snapshots) => {
//       const newDate = new Date()
//       const newHour = newDate.getDate()
//       const list = []
//       snapshots.forEach((snapshot) => {
//         const data = snapshot.data()
//         const date = data.createdAt.toDate().getDate()

//         const numDate = Number(date)
//         const checkDate = newHour - numDate
//         console.log(checkDate)
//         list.push(data)
//         userRef.collection("message").where("timeLimit", "<=",checkDate).get().then((querySnapshot) => {
//           querySnapshot.forEach((doc) => {
//             const id = doc.data().id
//             return userRef.collection("message").doc(id).delete()
//           })
//           // setPush(data)
//           // setMsgDate(date)
//           //   console.log(date)
//           // console.log(uid)
//         })

//       }

//       )
//        dispatch(pushMessageAction(list))
//     })
//   }
//  }

export const googleSignIn = ():AppThunk => {
  return async (dispatch) => {
    auth.signInWithPopup(provider).then(async result => {
        const user = result.user


        if (user) {
          const uid = user.uid
          const timestamp = FirebaseTimestamp.now()
          const role = await db.collection("users").doc(uid).get()

          if (role.exists) {
            const data = await db.collection("users").doc(uid).get().then(snapshot => {
              return snapshot.data();
            })
              dispatch(login({
                isSignedIn: true,
                // role: user.role,
                uid: uid,
                avatar: user.photoURL,
                username: user.displayName,
                email: user.email,
                 profile: data.profile,
                 url:data.url
                // likes:data.likes
              }))
              //   dispatch(hideLoadingAction());
              // dispatch(push("/"))


          }

          const userInitialData = {
            created_at: timestamp,
            avatar: user.photoURL,
            role: "customer",
            uid: uid,
            updated_at: timestamp,
            username: user.displayName,
            email: user.email,

            // first:false
            // profile:user.profile
          }

          db.collection("users").doc(uid).set(userInitialData,{merge:true})
            .then(() => {
              dispatch(hideLoadingAction());
                dispatch(snackbarOpenAction({ text:"googleアカウントでの認証に成功しました！",type:true}))
              dispatch(push("/"))

            })
         }
    })
  }
}



export const twitterSignIn = (): AppThunk => {
  return async (dispatch) => {
    auth.signInWithPopup(twitterProvider).then(async result => {
      const user = result.user


      if (user) {

        const uid = user.uid
        const timestamp = FirebaseTimestamp.now()
        const role = await db.collection("users").doc(uid).get()
        if (role.exists) {
          const data = await db.collection("users").doc(uid).get().then(snapshot => {
            return snapshot.data();
          })
          dispatch(login({
            isSignedIn: true,
            role: data.role,
            uid: uid,
            // username: user.username,
            profile: data.profile,
            email: user.email,
            avatar: user.photoURL,
            username: user.displayName,
            url:data.url

            //  profile: user.profile
            // likes:data.likes
          }))




          const userInitialData = {
            created_at: timestamp,
            avatar: user.photoURL,
            role: "customer",
            uid: uid,
            updated_at: timestamp,
            username: user.displayName,
            email: user.email

          }

          db.collection("users").doc(uid).set(userInitialData, { merge: true })

            .then(() => {
              dispatch(hideLoadingAction());
              dispatch(push("/"))
              dispatch(snackbarOpenAction({ text: "twitterアカウントでの認証に成功しました！", type: true }))
            }).catch(() => {
              alert("ログインに失敗しました。ネットワークエラーなどの可能性があります。お時間がたってから再度お試しください。")
            })
        }
      }
    })
  }
}



export const fetchPostsInFavorite = (posts: string[]):AppThunk => {
  return async (dispatch) => {
    dispatch(fetchPostsInFavoriteAction(posts))
  }
}


export const userDelete = (uid):AppThunk => {
  return async (dispatch) => {
          dispatch(showLoadingAction("退会処理をしています..."))
    const user = auth.currentUser;
    console.log(user)
    // 順番の注意　先にいuser.deleteした後だと処理が完了しない。
     await db.collection("users").doc(uid).delete()
     user.delete().then(() => {

        dispatch(logout())
      dispatch(hideLoadingAction());
        dispatch(snackbarOpenAction({ text: "退会しました！またのお越しをお待ちしております。", type: true }))
      dispatch(push("/signin"))

     }).catch((error) => {
       dispatch(hideLoadingAction());
         dispatch(snackbarOpenAction({ text: "処理に失敗しました。再ログインして再度お試しください。", type: false }))
})

  }
}

export const changePasswordAction = (currentPassword,newPassword): AppThunk => {
  return async (dispatch) => {
             dispatch(showLoadingAction("パスワードを変更しています..."))
        const user = auth.currentUser;
      var credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
);
   user.reauthenticateWithCredential(credential).then(function() {
     user.updatePassword(newPassword).then(function () {
     dispatch(hideLoadingAction());
    dispatch(snackbarOpenAction({ text: "パスワードを変更しました！", type: true }))

     }).catch(function (error) {
   dispatch(hideLoadingAction());
    dispatch(snackbarOpenAction({ text: "処理に失敗しました。再ログインして再度お試しください。", type: false }))
});
   }).catch(function (error) {
      dispatch(hideLoadingAction());
    dispatch(snackbarOpenAction({ text: "処理に失敗しました。再ログインして再度お試しください。", type: false }))


});
  }
}
