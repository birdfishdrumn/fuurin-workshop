"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var index_1 = require("../firebase/index");
var app_1 = require("firebase/app");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var Avatar_1 = require("@material-ui/core/Avatar");
var styled_components_1 = require("styled-components");
var styles_1 = require("@material-ui/core/styles");
var Button_1 = require("@material-ui/core/Button");
var operations_1 = require("../reducks/posts/operations");
var postSlice_1 = require("../reducks/posts/postSlice");
var PostProduct_1 = require("components/PostProduct");
var userSlice_1 = require("../reducks/users/userSlice");
var react_redux_1 = require("react-redux");
var Language_1 = require("@material-ui/icons/Language");
var UI_1 = require("components/UI");
var Check_1 = require("@material-ui/icons/Check");
var Favorite_1 = require("@material-ui/icons/Favorite");
var ProfileColumn = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay:flex;\n box-shadow: 2px 2px 4px gray;\nmax-width:90%;\nbackground:white;\npadding:40px 20px;\nmargin:50px auto;\n>div:first-child{\n  flex-basis:40%;\n  @media(max-width:700px){\n  margin:0 auto;\n    flex-basis:100%;\n\n}\n}\n>div:last-child{\n  /* margin-left:50px; */\n  text-align:left;\n flex-basis:60%;\n}\n@media(max-width:700px){\n  flex-direction:column;\n\n}\n"], ["\ndisplay:flex;\n box-shadow: 2px 2px 4px gray;\nmax-width:90%;\nbackground:white;\npadding:40px 20px;\nmargin:50px auto;\n>div:first-child{\n  flex-basis:40%;\n  @media(max-width:700px){\n  margin:0 auto;\n    flex-basis:100%;\n\n}\n}\n>div:last-child{\n  /* margin-left:50px; */\n  text-align:left;\n flex-basis:60%;\n}\n@media(max-width:700px){\n  flex-direction:column;\n\n}\n"
    // const BackgroundWhite = styled.div`
    //  background:white;
    //  max-width:100% !important;
    //  width:100% !important;
    // `
])));
// const BackgroundWhite = styled.div`
//  background:white;
//  max-width:100% !important;
//  width:100% !important;
// `
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1)
            }
        },
        large: {
            width: theme.spacing(18),
            height: theme.spacing(18),
            marignRight: "0 !important"
        },
        button: {
            marginTop: "20px",
            fontWeight: "bold"
        },
        whiteButton: {
            marginTop: "20px",
            fontWeight: "bold",
            color: "white"
        },
        listIcon: {
            margin: "auto",
            display: "flex",
            flexFlow: "row",
            justifyContent: "center",
            listStyle: "none",
            color: "grey",
            '& > li': {
                margin: 10
            }
        }
    });
});
var UserPage = function () {
    var dispatch = react_redux_1.useDispatch();
    var posts = react_redux_1.useSelector(postSlice_1.getUserPosts);
    // 自分のuserId
    var isSignedIn = react_redux_1.useSelector(userSlice_1.getIsSignedIn);
    var myUserId = react_redux_1.useSelector(userSlice_1.getUserId);
    var url = react_redux_1.useSelector(userSlice_1.getUserUrl);
    console.log(myUserId);
    var classes = useStyles();
    var _a = react_1.useState(""), username = _a[0], setUsername = _a[1];
    var _b = react_1.useState(""), avatar = _b[0], setAvatar = _b[1];
    var _c = react_1.useState(""), profile = _c[0], setProfile = _c[1];
    var _d = react_1.useState([]), favoriteUserArray = _d[0], setFavoriteUserArray = _d[1];
    var _e = react_1.useState(false), change = _e[0], setChange = _e[1];
    var uid = window.location.pathname.split("/users/")[1];
    react_1.useEffect(function () {
        index_1.db.collection("users").doc(uid).get().then(function (snapshot) {
            if (snapshot.data()) {
                var data = snapshot.data();
                console.log(data);
                var username_1 = data.username;
                var avatar_1 = data.avatar;
                var profile_1 = data.profile;
                setUsername(username_1);
                setAvatar(avatar_1);
                setProfile(profile_1);
            }
        });
    }, []);
    react_1.useEffect(function () {
        dispatch(operations_1.addUserPost(uid));
    }, []);
    console.log(posts);
    react_1.useEffect(function () {
        if (isSignedIn) {
            var unSub_1 = index_1.db.collection("users").doc(myUserId).onSnapshot(function (snapshot) {
                var data = snapshot.data();
                var Userfavorite = data.favoriteUser;
                setFavoriteUserArray(Userfavorite);
                console.log(Userfavorite);
            });
            return function () {
                unSub_1();
            };
        }
    }, []);
    console.log(favoriteUserArray);
    var addFavoriteUser = function () { return __awaiter(void 0, void 0, void 0, function () {
        var userRef, id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, index_1.db.collection("users")];
                case 1:
                    userRef = _a.sent();
                    id = uid;
                    if (!(favoriteUserArray && favoriteUserArray.includes(uid))) return [3 /*break*/, 3];
                    index_1.db.collection("users").doc(myUserId).collection("likeUser").doc(id)["delete"]().then(function () {
                        index_1.db.collection("users").doc(myUserId).update({
                            favoriteUser: app_1["default"].firestore.FieldValue.arrayRemove(uid)
                        });
                    });
                    // お気に入りされたuserにiカウントする
                    return [4 /*yield*/, userRef.doc(uid).update({
                            userFavoriteCount: app_1["default"].firestore.FieldValue.increment(-1)
                        })];
                case 2:
                    // お気に入りされたuserにiカウントする
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    index_1.db.collection("users").doc(myUserId).collection("likeUser").doc(id).set({
                        username: username,
                        uid: uid,
                        avatar: avatar,
                        profile: profile || ""
                    }, {
                        merge: true
                    }).then(function () {
                        index_1.db.collection("users").doc(myUserId).update({
                            favoriteUser: app_1["default"].firestore.FieldValue.arrayUnion(uid)
                            // count: firebase.firestore.FieldValue.increment(-1)
                        });
                    });
                    // お気に入りされたuserにiカウントする
                    return [4 /*yield*/, userRef.doc(uid).set({
                            userFavoriteCount: app_1["default"].firestore.FieldValue.increment(1)
                        }, { merge: true })];
                case 4:
                    // お気に入りされたuserにiカウントする
                    _a.sent();
                    console.log("huuta");
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapper, null,
        react_1["default"].createElement(ProfileColumn, null,
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(Avatar_1["default"], { style: { margin: "0 auto" }, className: classes.large, src: avatar }),
                isSignedIn && myUserId !== uid &&
                    react_1["default"].createElement(Button_1["default"], { startIcon: favoriteUserArray && favoriteUserArray.includes(uid) ? react_1["default"].createElement(Check_1["default"], null) : react_1["default"].createElement(Favorite_1["default"], null), variant: favoriteUserArray && favoriteUserArray.includes(uid) ? "contained" : "outlined", onClick: addFavoriteUser, className: favoriteUserArray && favoriteUserArray.includes(uid) ? classes.whiteButton : classes.button, color: "primary" }, favoriteUserArray && favoriteUserArray.includes(uid) ? "お気に入り済" : "ユーザーをお気に入り"),
                react_1["default"].createElement("div", { className: "module-spacer--extra-small" }),
                url && react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, null,
                        username,
                        "\u3055\u3093\u306E\u6D3B\u52D5"),
                    react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, null,
                        react_1["default"].createElement("a", { href: url, target: "_blank", rel: "noopener noreferrer" },
                            react_1["default"].createElement(Language_1["default"], { style: { fontSize: "40px" } }))))),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(GlobalLayoutStyle_1.Title, { left: true, black: true }, username ? username : "noname"),
                profile ? react_1["default"].createElement(GlobalLayoutStyle_1.Text, { left: true }, profile) : "プロフィールが記述されていません。")),
        react_1["default"].createElement("div", { className: "module-spacer--large" }),
        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null,
            username,
            "\u3055\u3093\u306E\u4F5C\u54C1"),
        react_1["default"].createElement(UI_1.ImageStyleChangeIcon, { setChange: setChange }),
        react_1["default"].createElement(GlobalLayoutStyle_1.GridList, { change: change }, posts.length > 0 ?
            posts.map(function (post) { return (react_1["default"].createElement(GlobalLayoutStyle_1.ScrollItem, { key: post.id },
                react_1["default"].createElement(PostProduct_1.PostCard, { change: change, post: post, key: post.id, name: post.name, images: post.images, allImages: post.allImages, id: post.id, description: post.description, username: post.username, avatar: post.avatar, uid: post.uid }))); })
            :
                // ローディング中の表示
                react_1["default"].createElement("div", { style: {
                        height: "100vh",
                        backgroundColor: "#F5F5F5"
                    } }))));
};
exports["default"] = UserPage;
var templateObject_1;
