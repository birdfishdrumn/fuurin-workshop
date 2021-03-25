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
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var index_1 = require("../components/UI/index");
var SignUp_module_css_1 = require("./module.css/SignUp.module.css");
var index_2 = require("../firebase/index");
var userSlice_1 = require("../reducks/users/userSlice");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var Box_1 = require("@material-ui/core/Box");
var IconButton_1 = require("@material-ui/core/IconButton");
var loadingSlice_1 = require("../reducks/loadingSlice");
var snackbarSlice_1 = require("reducks/snackbar/snackbarSlice");
var connected_react_router_1 = require("connected-react-router");
var blueimp_load_image_1 = require("blueimp-load-image");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: "auto"
    }
}); });
var UserEdit = function () {
    var dispatch = react_redux_1.useDispatch();
    var classes = useStyles();
    var currentUsername = react_redux_1.useSelector(userSlice_1.getUsername);
    var currentEmail = react_redux_1.useSelector(userSlice_1.getEmail);
    var currentAvatar = react_redux_1.useSelector(userSlice_1.getUserAvatar);
    var currentProfile = react_redux_1.useSelector(userSlice_1.getUserProfile);
    var uid = react_redux_1.useSelector(userSlice_1.getUserId);
    var _a = react_1.useState(currentUsername || ""), username = _a[0], setUsername = _a[1], _b = react_1.useState(currentEmail || ""), email = _b[0], setEmail = _b[1], _c = react_1.useState(currentProfile || ""), profile = _c[0], setProfile = _c[1], _d = react_1.useState(currentAvatar || ""), avatar = _d[0], setAvatar = _d[1], _e = react_1.useState(""), url = _e[0], setUrl = _e[1];
    console.log(uid);
    var inputUsername = react_1.useCallback(function (event) {
        setUsername(event.target.value);
    }, [setUsername]);
    var inputEmail = react_1.useCallback(function (event) {
        setEmail(event.target.value);
    }, [setEmail]);
    var inputProfile = react_1.useCallback(function (event) {
        setProfile(event.target.value);
    }, [setProfile]);
    var inputUrl = react_1.useCallback(function (event) {
        setUrl(event.target.value);
    }, [setUrl]);
    var onChangeImageHandler = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var file, blob, canvas, S, N, fileName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // ![0]はTypeScriptの使用でnull,undefinedではないことを示す。登録された0番目の配列を返す。
                    dispatch(loadingSlice_1.showLoadingAction("uploading..."));
                    file = e.target.files[0];
                    blob = new Blob([file], { type: "image/jpeg" });
                    return [4 /*yield*/, blueimp_load_image_1["default"](blob, {
                            maxWidth: 1000,
                            canvas: true
                        })];
                case 1:
                    canvas = _a.sent();
                    S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                    N = 16;
                    fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map(function (n) { return S[n % S.length]; }).join('');
                    canvas.image.toBlob(function (blob) {
                        var uploadRef = index_2.storage.ref('avatars').child(fileName);
                        var uploadTask = uploadRef.put(blob);
                        uploadTask.then(function () {
                            // Handle successful uploads on complete
                            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                                var newImage = downloadURL;
                                setAvatar(newImage);
                                dispatch(loadingSlice_1.hideLoadingAction());
                            });
                        })["catch"](function () {
                            dispatch(loadingSlice_1.hideLoadingAction());
                        });
                    }, "image/jpeg");
                    return [2 /*return*/];
            }
        });
    }); };
    var updateUser = function (avatar, username, email, profile, url) { return __awaiter(void 0, void 0, void 0, function () {
        var timestamp, userInitialData, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dispatch(loadingSlice_1.showLoadingAction("ユーザー情報を更新"));
                    timestamp = index_2.FirebaseTimestamp.now();
                    userInitialData = {
                        email: email,
                        updated_at: timestamp,
                        username: username,
                        avatar: avatar,
                        uid: uid,
                        profile: profile,
                        url: url
                    };
                    user = index_2.auth.currentUser;
                    console.log(user);
                    user.updateProfile({
                        displayName: username,
                        photoURL: avatar
                    }).then(function () {
                        console.log("success");
                    })["catch"](function (error) {
                        // An error happened.
                    });
                    //     user.updateEmail(email).then(function() {
                    //   console.log("success")
                    // }).catch(function(error) {
                    //   // An error happened.
                    // });
                    return [4 /*yield*/, dispatch(userSlice_1.updateUserAction(userInitialData))];
                case 1:
                    //     user.updateEmail(email).then(function() {
                    //   console.log("success")
                    // }).catch(function(error) {
                    //   // An error happened.
                    // });
                    _a.sent();
                    // user情報を書き換えた後に、過去の情報が全て書き換えられる処理
                    return [4 /*yield*/, index_2.db.collection("users").doc(uid).set(userInitialData, { merge: true }).then(function () {
                            dispatch(connected_react_router_1.push("/user/mypage"));
                        }).then(function () {
                            dispatch(loadingSlice_1.hideLoadingAction());
                            dispatch(snackbarSlice_1.snackbarOpenAction({ text: "ユーザー情報の更新をしました！", type: true }));
                        })["catch"](function () {
                            dispatch(loadingSlice_1.hideLoadingAction());
                            dispatch(snackbarSlice_1.snackbarOpenAction({ text: "更新に失敗しました。再度時間が経ってからお試しください。", type: false }));
                        })];
                case 2:
                    // user情報を書き換えた後に、過去の情報が全て書き換えられる処理
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    //     const commentUser = db.collection("posts").doc(allId).collection("comments")
    //               commentUser.get().then((querySnapshot) => {
    //                 querySnapshot.forEach((doc) => {
    //                   const comId = doc.data().id;
    //                   console.log(comId)
    //     })
    //  })
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(GlobalLayoutStyle_1.SectionContainer, null,
            react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u30E6\u30FC\u30B6\u30FC\u60C5\u5831\u306E\u767B\u9332\u30FB\u7DE8\u96C6"),
            react_1["default"].createElement("div", { className: "c-section-container" },
                react_1["default"].createElement(Box_1["default"], { textAlign: "center" },
                    react_1["default"].createElement(IconButton_1["default"], null,
                        react_1["default"].createElement("label", null,
                            react_1["default"].createElement(core_1.Avatar, { className: classes.large, src: avatar }),
                            react_1["default"].createElement("input", { className: SignUp_module_css_1["default"].login_hiddenIcon, type: "file", onChange: onChangeImageHandler }))),
                    react_1["default"].createElement("p", null, "\u30A2\u30D0\u30BF\u30FC\u3092\u30BF\u30C3\u30D7\u3057\u3066\u5909\u66F4")),
                react_1["default"].createElement("div", { className: "module-spacer--medium" }),
                react_1["default"].createElement(index_1.TextInput, { fullWidth: true, label: "お名前", multiline: false, required: true, onChange: inputUsername, rows: 1, value: username, type: "text" }),
                react_1["default"].createElement(index_1.TextInput, { fullWidth: true, label: "メールアドレス", multiline: false, required: true, onChange: inputEmail, rows: 1, value: email, type: "email" }),
                react_1["default"].createElement(index_1.TextInput, { fullWidth: true, label: "紹介文", multiline: true, required: true, onChange: inputProfile, rows: 5, value: profile, type: "text" }),
                react_1["default"].createElement(index_1.TextInput, { fullWidth: true, label: "活動しているsns,webサイトのurl", multiline: false, required: true, onChange: inputUrl, rows: 1, value: url, type: "text" }),
                react_1["default"].createElement("div", { className: "module-spacer--medium" }),
                react_1["default"].createElement("div", { className: "center" },
                    react_1["default"].createElement(index_1.PrimaryButton, { label: "ユーザー情報を更新", onClick: function () {
                            return updateUser(avatar, username, email, profile, url);
                        } }))))));
};
exports["default"] = UserEdit;
