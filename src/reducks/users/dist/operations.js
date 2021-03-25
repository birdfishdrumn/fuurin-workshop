"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.fetchPostsInFavorite = exports.twitterSignIn = exports.googleSignIn = exports.addPostToFavorite = exports.listenAuthState = exports.signOut = exports.signUp = exports.signIn = void 0;
// import { history } from "../store";
var index_1 = require("../../firebase/index");
var loadingSlice_1 = require("../loadingSlice");
var userSlice_1 = require("./userSlice");
var react_router_redux_1 = require("react-router-redux");
var snackbarSlice_1 = require("../snackbar/snackbarSlice");
var modalSlice_1 = require("reducks/modal/modalSlice");
exports.signIn = function (email, password) {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dispatch(userSlice_1.closeError());
            dispatch(loadingSlice_1.showLoadingAction("サインインしています..."));
            if (email === "" || password === "") {
                dispatch(loadingSlice_1.hideLoadingAction());
                alert("必須項目が未入力です。");
                return [2 /*return*/, false];
            }
            return [2 /*return*/, index_1.auth.signInWithEmailAndPassword(email, password)
                    .then(function (result) {
                    var userState = result.user;
                    if (!userState) {
                        dispatch(loadingSlice_1.hideLoadingAction());
                        alert("パスワードかemailが違います");
                        console.log("error");
                        throw new Error('ユーザーIDを取得できません');
                    }
                    var currentUser = index_1.auth.currentUser;
                    // E-Mailの確認が取れていない場合は強制サインアウト
                    if (!currentUser.emailVerified) {
                        console.log("dame");
                        index_1.auth.signOut();
                        dispatch(react_router_redux_1.push("/signin"));
                    }
                    var uid = userState.uid;
                    return index_1.db.collection("users").doc(uid).get().then(function (snapshot) {
                        var data = snapshot.data();
                        if (!data) {
                            dispatch(loadingSlice_1.hideLoadingAction());
                            throw new Error('ユーザーデータが存在しません');
                        }
                        dispatch(userSlice_1.login({
                            isSignedIn: true,
                            role: data.role,
                            uid: uid,
                            username: data.username,
                            profile: data.profile,
                            avatar: data.avatar
                        }));
                        //
                    }).then(function () {
                        dispatch(react_router_redux_1.push("/"));
                        dispatch(loadingSlice_1.hideLoadingAction());
                        dispatch(snackbarSlice_1.snackbarOpenAction({ text: "ログインしました！", type: true }));
                    });
                })["catch"](function () {
                    dispatch(snackbarSlice_1.snackbarOpenAction({ text: "パスワードかemailアドレスが違います。", type: false }));
                    dispatch(loadingSlice_1.hideLoadingAction());
                })];
        });
    }); };
};
// export const signUp = (username: string, email: string, password: string, confirmPassword: string): AppThunk  => {
//   return async (dispatch) => {
//         dispatch(showLoadingAction("アカウントを登録しています..."));
//     if (username === "" || email === "" || password === "" || confirmPassword === "") {
//       alert("必須項目が未入力です。")
//       return false
//     }
//     if (password !== confirmPassword) {
//       alert("パスワードが一致しません。もう一度お試しください。")
//       return false
//     }
//     return auth.createUserWithEmailAndPassword(email, password)
//       .then(result => {
//         const user = result.user
//         if (user) {
//           const uid = user.uid
//           const timestamp = FirebaseTimestamp.now()
//           const userInitialData= {
//             created_at: timestamp,
//             email: email,
//             role: "customer",
//             uid: uid,
//             updated_at: timestamp,
//             username: username
//           }
//           db.collection("users").doc(uid).set(userInitialData)
//             .then(() => {
//               dispatch(hideLoadingAction());
//                 dispatch(push("/"));
//           })
//          }
//     })
//   }
// }
exports.signUp = function (username, email, password, confirmPassword) {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dispatch(loadingSlice_1.showLoadingAction("アカウントを登録しています..."));
            if (username === "" || email === "" || password === "" || confirmPassword === "") {
                alert("必須項目が未入力です。");
                return [2 /*return*/, false];
            }
            if (password !== confirmPassword) {
                dispatch(snackbarSlice_1.snackbarOpenAction({ text: "パスワードが一致しません。もう一度確認してお試しください。", type: false }));
                dispatch(loadingSlice_1.hideLoadingAction());
                return [2 /*return*/, false];
            }
            return [2 /*return*/, index_1.auth.createUserWithEmailAndPassword(email, password)
                    .then(function (result) {
                    var user = result.user;
                    if (user) {
                        var currentUser = index_1.auth.currentUser;
                        console.log(user);
                        console.log(currentUser);
                        currentUser.sendEmailVerification().then(function () {
                            // auth.signOut()
                            var uid = user.uid;
                            var timestamp = index_1.FirebaseTimestamp.now();
                            var userInitialData = {
                                created_at: timestamp,
                                email: email,
                                role: "customer",
                                uid: uid,
                                updated_at: timestamp,
                                username: username,
                                first: false
                            };
                            // auth.signOut()
                            // 確認のE-Mail送信に成功
                            // この時点ではE-Mailアドレスの所有権が
                            // 確認されていないため、強制的にサインアウトします。
                            // （サービスの利用はできない）
                            index_1.db.collection("users").doc(uid).set(userInitialData).then(function () {
                                index_1.auth.signOut();
                                dispatch(loadingSlice_1.hideLoadingAction());
                                dispatch(modalSlice_1.modalOpenAction());
                                // dispatch(push("/signin"))
                            });
                        })["catch"](function (error) {
                            // 確認のE-Mail送信でエラー（エラー処理）
                            dispatch(loadingSlice_1.hideLoadingAction());
                        });
                    }
                })["catch"](function () {
                    console.log("失敗");
                    dispatch(snackbarSlice_1.snackbarOpenAction({ text: "こちらのメールアドレスは使用する事ができません", type: false }));
                    dispatch(loadingSlice_1.hideLoadingAction());
                })];
        });
    }); };
};
exports.signOut = function () {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dispatch(loadingSlice_1.showLoadingAction("Sign out..."));
            index_1.auth.signOut()
                .then(function () {
                dispatch(userSlice_1.logout());
                dispatch(loadingSlice_1.hideLoadingAction());
                dispatch(react_router_redux_1.push("/signin"));
                dispatch(snackbarSlice_1.snackbarOpenAction({ text: "ログアウトしました！", type: true }));
            });
            return [2 /*return*/];
        });
    }); };
};
exports.listenAuthState = function () {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, index_1.auth.onAuthStateChanged(function (user) {
                    if (user) {
                        var uid_1 = user.uid;
                        index_1.db.collection("users").doc(uid_1).get()
                            .then(function (snapshot) {
                            var data = snapshot.data();
                            if (data) {
                                console.log(data);
                                dispatch(userSlice_1.login({
                                    isSignedIn: true,
                                    role: data.role,
                                    uid: uid_1,
                                    email: data.email,
                                    username: data.username,
                                    avatar: data.avatar,
                                    profile: data.profile
                                }));
                            }
                        });
                    }
                    else {
                        dispatch(react_router_redux_1.push("/signin"));
                    }
                })];
        });
    }); };
};
exports.addPostToFavorite = function (addedPost, uid) {
    return function (getState) { return __awaiter(void 0, void 0, void 0, function () {
        var favoriteRef;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // const uid = getState().users.uid;
                    console.log(uid);
                    favoriteRef = index_1.db.collection("users").doc(uid).collection("likes").doc();
                    // // likesIdにはドキュメントと同じidが入る。
                    addedPost["likesId"] = favoriteRef.id;
                    addedPost["uid"] = uid;
                    // await favoriteRef.set(addedPost)
                    return [4 /*yield*/, favoriteRef.set(addedPost)
                        // dispatch(push('/likes'))
                    ];
                case 1:
                    // await favoriteRef.set(addedPost)
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
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
exports.googleSignIn = function () {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            index_1.auth.signInWithPopup(index_1.provider).then(function (result) { return __awaiter(void 0, void 0, void 0, function () {
                var user, uid, timestamp, role, data, userInitialData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            user = result.user;
                            if (!user) return [3 /*break*/, 4];
                            uid = user.uid;
                            timestamp = index_1.FirebaseTimestamp.now();
                            return [4 /*yield*/, index_1.db.collection("users").doc(uid).get()];
                        case 1:
                            role = _a.sent();
                            if (!role.exists) return [3 /*break*/, 3];
                            return [4 /*yield*/, index_1.db.collection("users").doc(uid).get().then(function (snapshot) {
                                    return snapshot.data();
                                })];
                        case 2:
                            data = _a.sent();
                            dispatch(userSlice_1.login({
                                isSignedIn: true,
                                // role: user.role,
                                uid: uid,
                                avatar: user.photoURL,
                                username: user.displayName,
                                email: user.email,
                                profile: data.profile
                                // likes:data.likes
                            }));
                            _a.label = 3;
                        case 3:
                            userInitialData = {
                                created_at: timestamp,
                                avatar: user.photoURL,
                                role: "customer",
                                uid: uid,
                                updated_at: timestamp,
                                username: user.displayName,
                                email: user.email
                            };
                            index_1.db.collection("users").doc(uid).set(userInitialData, { merge: true })
                                .then(function () {
                                dispatch(loadingSlice_1.hideLoadingAction());
                                dispatch(snackbarSlice_1.snackbarOpenAction({ text: "googleアカウントでの認証に成功しました！", type: true }));
                                dispatch(react_router_redux_1.push("/"));
                            });
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); };
};
// googleでログイン
// export const googleSignIn = ():AppThunk => {
//   return async (dispatch) => {
//     auth.signInWithPopup(provider).then(async result => {
//       const user = result.user
//       if (user) {
//         const uid = user.uid
//         const timestamp = FirebaseTimestamp.now()
//         const role = await db.collection("users").doc(uid).get()
//         if (role.exists) {
//           return db.collection("users").doc(uid).get().then(snapshot => {
//             const data = snapshot.data();
//             dispatch(login({
//               isSignedIn: true,
//                 avatar: user.photoURL,
//               role: data.role,
//               uid: uid,
//               username: user.displayName,
//               email: user.email,
//                profile: data.profile
//               // likes:data.likes
//             }))
//             const userInitialData = {
//               created_at: timestamp,
//               avatar: user.photoURL,
//               role: "customer",
//               uid: uid,
//               updated_at: timestamp,
//               username: user.displayName,
//               email: user.email,
//               // profile:user.profile
//             }
//             db.collection("users").doc(uid).set(userInitialData,{merge:true})
//           }).then(() => {
//             dispatch(hideLoadingAction());
//             dispatch(snackbarOpenAction({ text: "googleアカウントでの認証に成功しました！", type: true }))
//             dispatch(push("/"))
//           })
//         }
//       }
//     })
//   }
// }
exports.twitterSignIn = function () {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            index_1.auth.signInWithPopup(index_1.twitterProvider).then(function (result) { return __awaiter(void 0, void 0, void 0, function () {
                var user, uid, timestamp, role, data, userInitialData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            user = result.user;
                            if (!user) return [3 /*break*/, 3];
                            uid = user.uid;
                            timestamp = index_1.FirebaseTimestamp.now();
                            return [4 /*yield*/, index_1.db.collection("users").doc(uid).get()];
                        case 1:
                            role = _a.sent();
                            if (!role.exists) return [3 /*break*/, 3];
                            return [4 /*yield*/, index_1.db.collection("users").doc(uid).get().then(function (snapshot) {
                                    return snapshot.data();
                                })];
                        case 2:
                            data = _a.sent();
                            dispatch(userSlice_1.login({
                                isSignedIn: true,
                                role: data.role,
                                uid: uid,
                                // username: user.username,
                                profile: data.profile,
                                email: user.email,
                                avatar: user.photoURL,
                                username: user.displayName
                            }));
                            userInitialData = {
                                created_at: timestamp,
                                avatar: user.photoURL,
                                role: "customer",
                                uid: uid,
                                updated_at: timestamp,
                                username: user.displayName,
                                email: user.email
                            };
                            index_1.db.collection("users").doc(uid).set(userInitialData, { merge: true })
                                .then(function () {
                                dispatch(loadingSlice_1.hideLoadingAction());
                                dispatch(react_router_redux_1.push("/"));
                                dispatch(snackbarSlice_1.snackbarOpenAction({ text: "twitterアカウントでの認証に成功しました！", type: true }));
                            })["catch"](function () {
                                alert("ログインに失敗しました。ネットワークエラーなどの可能性があります。お時間がたってから再度お試しください。");
                            });
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); };
};
exports.fetchPostsInFavorite = function (posts) {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dispatch(userSlice_1.fetchPostsInFavoriteAction(posts));
            return [2 /*return*/];
        });
    }); };
};
