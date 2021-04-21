import { AppThunk } from '../../store';
import firebase from "firebase/app";
import { USER } from "types/user";
import { db, auth, FirebaseTimestamp,provider,twitterProvider } from "../../firebase/index";
import { hideLoadingAction, showLoadingAction } from "../loadingSlice";
import { login, logout, fetchPostsInFavoriteAction, getUserId } from "./userSlice";
import { push } from "react-router-redux";
import { snackbarOpenAction } from "../snackbar/snackbarSlice";
import { modalOpenAction } from "reducks/modal/modalSlice";
import { dialogCloseAction,dialogOpenAction } from "reducks/dialog/dialogSlice";




export const signUp = (username: string, email: string, password: string, confirmPassword: string): AppThunk => {
  return async (dispatch) => {
    dispatch(showLoadingAction("アカウントを登録しています..."));
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      alert("必須項目が未入力です。")
      return false
    }
    if (password !== confirmPassword) {
      dispatch(snackbarOpenAction({ text: "パスワードが一致しません。もう一度確認してお試しください。", type: false }))
      dispatch(hideLoadingAction());
      return false
    }
    return auth.createUserWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user
        if (user) {
          const currentUser = auth.currentUser;
          currentUser.sendEmailVerification().then(() => {

            // auth.signOut()
            const uid = user.uid
            const timestamp = FirebaseTimestamp.now()
            const userInitialData: Omit<USER,"list"| "likes"|"isSignedIn"> = {
              created_at: timestamp,
              email: email,
              role: "customer",
              uid: uid,
              username: username,
              firstLogin: true,
              avatar: "https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fnoimage.jpg?alt=media&token=b84c418e-e302-425b-a6a0-985422aa86a8",
              profile: "",
              url: "",
              twitter: "",
              instagram:""
            }
            // auth.signOut()
            // 確認のE-Mail送信に成功
            // この時点ではE-Mailアドレスの所有権が
            // 確認されていないため、強制的にサインアウトします。

            db.collection("users").doc(uid).set(userInitialData).then(() => {
                  auth.signOut().then(() => {
            dispatch(logout())
            dispatch(push("/"));
            dispatch(hideLoadingAction());
            dispatch(modalOpenAction({type:"userConfirm",text:"本人確認メールの送信"}))
          })

            })
          }).catch((error) => {
            // 確認のE-Mail送信でエラー（エラー処理）
            dispatch(hideLoadingAction());
          })
        }
      }).catch(() => {
        dispatch(snackbarOpenAction({ text: "こちらのメールアドレスは使用する事ができません", type: false }))
        dispatch(hideLoadingAction());
      })
  }
};


export const signOut = (): AppThunk => {
  return async (dispatch) => {
    dispatch(showLoadingAction("Sign out..."))
    auth.signOut()
      .then(() => {
        // パーミションエラーが発生
        dispatch(logout())
        dispatch(hideLoadingAction());
        dispatch(push("/"));
        dispatch(snackbarOpenAction({ text: "ログアウトしました！", type: true }))
      }).catch(() => {
        dispatch(snackbarOpenAction({ text: "ログアウトに失敗しました。再度時間が経ってからお試しください。", type: false }))
        dispatch(hideLoadingAction());
      })
  }
};

export const listenAuthState = (props:boolean): AppThunk => {
  return async (dispatch) => {
    return auth.onAuthStateChanged(async(user)=>{
      if (user) {
        const uid = await user.uid
        const snapshot = await db.collection("users").doc(uid).get()
            const data: any = await snapshot.data()
            // if文がないとエラーが出る
            if (data) {
              dispatch(login({
                isSignedIn: true,
                role: data.role,
                uid: uid,
                email: data.email,
                username: data.username,
                avatar: data.avatar,
                profile: data.profile,
                url: data.url,
                twitter: data.twitter,
                instagram: data.instagram
              } as USER))
            }
        if (props) {
        dispatch(push("/timeline"))
      }
      } else {
        dispatch(push("/"))
      }
    })
  }
};

// -----ログインしていてもしなくても閲覧できるページを振り分ける関数
export const listenAuthNotState = (): AppThunk => {
  return async (dispatch) => {
    return auth.onAuthStateChanged(user => {
      if (user) {
        const uid = user.uid
        db.collection("users").doc(uid).get()
          .then(snapshot => {
            const data: any = snapshot.data()
            // if文がないとエラーが出る
            if (data) {
              dispatch(login({
                isSignedIn: true,
                role: data.role,
                uid: uid,
                email: data.email,
                username: data.username,
                avatar: data.avatar,
                profile: data.profile,
                url: data.url,
                twitter: data.twitter,
                instagram: data.instagram
              } as USER))
            }
          })
      }
    })
  }
};



export const addPostToFavorite = (addedPost: any, uid: string): AppThunk => {
  return async (getState: any) => {
    const favoriteRef = db.collection("users").doc(uid).collection("likes").doc();
    addedPost["likesId"] = favoriteRef.id;
    addedPost["uid"] = uid;
    await favoriteRef.set(addedPost)
  }
};

export const signIn = (email: string, password: string): AppThunk => {
  return async (dispatch) => {
    dispatch(showLoadingAction("ログインしています..."));
    if (email === "" || password === "") {
      dispatch(hideLoadingAction());
      alert("必須項目が未入力です。")
      return false
    }
    return auth.signInWithEmailAndPassword(email, password)
      .then(async (result) => {
        const userState = result.user
        if (!userState) {
          dispatch(hideLoadingAction());
          alert("パスワードかemailが違います")
          throw new Error('ユーザーIDを取得できません');
        }
        const currentUser = auth.currentUser;
        // E-Mailの確認が取れていない場合は強制サインアウト
        const uid = userState.uid
        const snapshot = await db.collection("users").doc(uid).get()
        const data = snapshot.data();
        const first = data.firstLogin
        if (currentUser.emailVerified && first) {
          dispatch(login({
            role: data.role,
            email: data.email,
            uid: uid,
            username: data.username,
            profile: data.profile,
            avatar: data.avatar,
            url: data.url,
            twitter: data.twitter,
            instagram: data.instagram
          } as USER))
          dispatch(dialogCloseAction());
          dispatch(hideLoadingAction());
          dispatch(push("/setting"))
        } else if (!currentUser.emailVerified) {
          auth.signOut().then(() => {
            dispatch(logout())
            dispatch(push("/"));
            dispatch(hideLoadingAction());
            dispatch(snackbarOpenAction({ text: "本人確認が済んでいません。", type: false }))
          })

        }
        else {
          if (!data) {
            dispatch(hideLoadingAction());
            throw new Error('ユーザーデータが存在しません');
          }
          dispatch(login({
            role: data.role,
            email: data.email,
            uid: uid,
            username: data.username,
            profile: data.profile,
            avatar: data.avatar,
            url: data.url,
            twitter: data.twitter,
            instagram: data.instagram
          } as USER))
          dispatch(dialogCloseAction());
          //

          dispatch(push("/timeline"))

          dispatch(hideLoadingAction());
          dispatch(snackbarOpenAction({ text: "ログインしました！", type: true }))
        }

        //  signInWithEmailAndPasswordまでの処理
      }).catch(() => {
        dispatch(snackbarOpenAction({ text: "パスワードかemailアドレスが違います。", type: false }))
        dispatch(hideLoadingAction());
      });
  }
};


export const googleSignIn = (): AppThunk => {
  return async (dispatch) => {
    auth.signInWithPopup(provider).then(async result => {
      const user = result.user
      if (user) {
        const uid = user.uid
        const timestamp = FirebaseTimestamp.now()
        const role = await db.collection("users").doc(uid).get()
        const userInitialData = {
          created_at: timestamp,
          avatar: user.photoURL,
          role: "customer",
          uid: uid,
          updated_at: timestamp,
          username: user.displayName,
          email: user.email,
        }
        dispatch(dialogCloseAction());
        // userがすでにデータベースに存在しているかどうか確認
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
            url: data.url,
            twitter: data.twitter,
            instagram: data.instagram

          } as USER))

          db.collection("users").doc(uid).set(userInitialData, { merge: true })
            .then(() => {
              dispatch(hideLoadingAction());

              dispatch(snackbarOpenAction({ text: "googleアカウントでの認証に成功しました！", type: true }))
              dispatch(push("/timeline"))

            })
        }
        // 初めてのログイン
        else {
          db.collection("users").doc(uid).set(userInitialData, { merge: true })

            .then(() => {
              dispatch(hideLoadingAction());
              dispatch(push("/setting"))

            }).catch(() => {
              alert("ログインに失敗しました。ネットワークエラーなどの可能性があります。お時間がたってから再度お試しください。")
            })
        }
      }
    }).catch(() => {
      dispatch(snackbarOpenAction({ text: "ログインに失敗しました。ネットワークエラー、または他のアカウントで同じメールアドレスを使用している可能性があります。", type: false }))
    })
  }
};



export const twitterSignIn = (): AppThunk => {
  return async (dispatch) => {
    auth.signInWithPopup(twitterProvider).then(async result => {
      const user = result.user
      if (user) {
        const uid = user.uid
        const timestamp = FirebaseTimestamp.now()
        const role = await db.collection("users").doc(uid).get()
        const userInitialData = {
          created_at: timestamp,
          avatar: user.photoURL,
          role: "customer",
          uid: uid,
          updated_at: timestamp,
          username: user.displayName,
          email: user.email

        }

        if (role.exists) {
          const data = await db.collection("users").doc(uid).get().then(snapshot => {
            return snapshot.data();
          })
          dispatch(login({
            isSignedIn: true,
            role: data.role,
            uid: uid,
            profile: data.profile,
            email: user.email,
            avatar: user.photoURL,
            username: user.displayName,
            url: data.url,
            twitter: data.twitter,
             instagram:data.instagram
          } as USER))

          db.collection("users").doc(uid).set(userInitialData, { merge: true })

            .then(() => {

              dispatch(hideLoadingAction());
              dispatch(dialogCloseAction());
              dispatch(push("/timeline"))
              dispatch(snackbarOpenAction({ text: "twitterアカウントでの認証に成功しました！", type: true }))
            }).catch(() => {
              alert("ログインに失敗しました。ネットワークエラーなどの可能性があります。お時間がたってから再度お試しください。")
            })
        } else {

          db.collection("users").doc(uid).set(userInitialData, { merge: true })
            .then(() => {

              dispatch(hideLoadingAction());
              dispatch(dialogCloseAction());
              dispatch(push("/setting"))
            }).catch(() => {
              alert("ログインに失敗しました。ネットワークエラーなどの可能性があります。お時間がたってから再度お試しください。")
            })
        }
      }
    }).catch(() => {
      dispatch(snackbarOpenAction({ text: "ログインに失敗しました。ネットワークエラー、または他のアカウントで同じメールアドレスを使用している可能性があります。", type: false }))
    })
  }
};

// -------お気に入りに登録する関数---
export const fetchPostsInFavorite = (posts: string[]): AppThunk => {
  return async (dispatch) => {
    dispatch(fetchPostsInFavoriteAction(posts))
  }
};

// -------退会処理をする関数--------
export const userDelete = (uid): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(showLoadingAction("退会処理をしています..."))
      const user = auth.currentUser;
      console.log(user)
      // 順番の注意　先にいuser.deleteした後だと処理が完了しない。
      await db.collection("users").doc(uid).delete()
      user.delete().then(() => {
        dispatch(logout())
        dispatch(hideLoadingAction());
        dispatch(snackbarOpenAction({ text: "退会しました！またのお越しをお待ちしております。", type: true }))
        dispatch(push("/"))

      }).catch(() => {
        dispatch(hideLoadingAction());
        dispatch(snackbarOpenAction({ text: "処理に失敗しました。再ログインして再度お試しください。", type: false }))
      })
    } catch {
      dispatch(hideLoadingAction());
      dispatch(snackbarOpenAction({ text: "処理に失敗しました。再ログインして再度お試しください。", type: false }))
    }
  }
};

// --------passwordを変更する関数--------
export const changePasswordAction = (currentPassword, newPassword): AppThunk => {
  return async (dispatch) => {
    dispatch(showLoadingAction("パスワードを変更しています..."))
    const user = auth.currentUser;
    var credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    // ユーザーをemailとpasswordで再認証する-----
    user.reauthenticateWithCredential(credential).then(function () {
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
};

export const resetPassword = (email: string) => {
  return async (dispatch) => {
    dispatch(showLoadingAction("メールを送信しています..."))
    if (email === "") {
      dispatch(snackbarOpenAction({ type: false, text: "メールアドレスの形式が不正です" }))
      dispatch(hideLoadingAction());
      return false
    } else {
      auth.sendPasswordResetEmail(email)
        .then(() => {
          dispatch(modalOpenAction({ type: "reset", text: "パスワードリセットメールの送信" }))
          dispatch(hideLoadingAction());
        }).catch(() => {
          dispatch(snackbarOpenAction({ type: false, text: "メールの送信に失敗しました。再度時間が経ってからお試しください。" }))
          dispatch(hideLoadingAction());
        })
    }
  }
};
