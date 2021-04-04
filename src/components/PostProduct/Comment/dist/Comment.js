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
var Avatar_1 = require("@material-ui/core/Avatar");
var index_1 = require("../../../firebase/index");
var app_1 = require("firebase/app");
var styles_1 = require("@material-ui/core/styles");
var react_redux_1 = require("react-redux");
var connected_react_router_1 = require("connected-react-router");
var style_1 = require("./style");
var Divider_1 = require("@material-ui/core/Divider");
var moment_1 = require("moment"); // #1
require("moment/locale/ja");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var CommentForm_1 = require("./CommentForm");
var Button_1 = require("@material-ui/core/Button");
var Reply_1 = require("./Reply");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        marginRight: theme.spacing(1),
        cursor: "pointer"
    }
}); });
var Comment = function (_a) {
    var id = _a.id, avatar = _a.avatar, username = _a.username, uid = _a.uid, postUid = _a.postUid;
    var classes = useStyles();
    var dispatch = react_redux_1.useDispatch();
    var _b = react_1.useState(""), comment = _b[0], setComment = _b[1];
    var _c = react_1.useState(""), reply = _c[0], setReply = _c[1];
    var _d = react_1.useState(false), open = _d[0], setOpen = _d[1];
    var _e = react_1.useState(false), replyOpen = _e[0], setReplyOpen = _e[1];
    var _f = react_1.useState([
        {
            id: "",
            avatar: "",
            text: "",
            username: "",
            timestamp: null,
            uid: ""
        },
    ]), comments = _f[0], setComments = _f[1];
    var _g = react_1.useState([
        {
            id: "",
            avatar: "",
            text: "",
            username: "",
            timestamp: null,
            uid: "",
            comId: ""
        },
    ]), replies = _g[0], setReplies = _g[1];
    console.log("reo", reply);
    var comRef = index_1.db.collection("posts").doc(id).collection("comments");
    react_1.useEffect(function () {
        if (id) {
            var unSub_1 = comRef
                .orderBy("timestamp", "desc")
                .onSnapshot(function (snapshot) {
                setComments(snapshot.docs.map(function (doc) { return ({
                    id: doc.id,
                    uid: doc.data().id,
                    avatar: doc.data().avatar,
                    text: doc.data().text,
                    reply: doc.data().reply,
                    timestamp: doc.data().timestamp,
                    username: doc.data().username,
                    comId: doc.data().comId
                }); }));
            });
            return function () {
                unSub_1();
            };
        }
    }, [id]);
    var fetchReplyComment = function (comId) {
        return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setReplyOpen(!replyOpen);
                        // dispatch(showLoadingAction("Loading"))
                        return [4 /*yield*/, comRef.doc(comId).collection("reply").orderBy("timestamp", "asc")
                                .onSnapshot(function (snapshot) {
                                setReplies(snapshot.docs.map(function (doc) { return ({
                                    id: doc.id,
                                    uid: doc.data().id,
                                    avatar: doc.data().avatar,
                                    text: doc.data().text,
                                    timestamp: doc.data().timestamp,
                                    username: doc.data().username,
                                    comId: doc.data().comId
                                }); }));
                            })
                            // dispatch(hideLoadingAction());
                        ];
                    case 1:
                        // dispatch(showLoadingAction("Loading"))
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
    };
    var newComment = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var comId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    comId = comRef.doc().id;
                    comRef.doc(comId).set({
                        avatar: avatar,
                        text: comment,
                        timestamp: app_1["default"].firestore.FieldValue.serverTimestamp(),
                        username: username,
                        id: uid,
                        postId: id,
                        comId: comId
                    }).then(function () {
                        setOpen(true);
                    })["catch"](function () {
                        alert("コメントの送信に失敗しました");
                    });
                    return [4 /*yield*/, index_1.db.collection("users").doc(uid).set({
                            commentId: app_1["default"].firestore.FieldValue.arrayUnion(id)
                        }, {
                            merge: true
                        })];
                case 1:
                    _a.sent();
                    setComment("");
                    return [2 /*return*/];
            }
        });
    }); };
    var replyComment = function (comId) { return function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var replyRef;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    return [4 /*yield*/, index_1.db.collection("posts").doc(id).collection("comments").doc(comId).collection("reply")];
                case 1:
                    replyRef = _a.sent();
                    comRef.doc(comId).set({
                        reply: true
                    }, {
                        merge: true
                    });
                    replyRef.add({
                        avatar: avatar,
                        text: reply,
                        timestamp: app_1["default"].firestore.FieldValue.serverTimestamp(),
                        username: username,
                        id: uid,
                        postId: id,
                        comId: comId
                    }).then(function () {
                        setOpen(true);
                    })["catch"](function () {
                        alert("コメントの送信に失敗しました");
                    });
                    return [4 /*yield*/, index_1.db.collection("users").doc(uid).set({
                            commentId: app_1["default"].firestore.FieldValue.arrayUnion(id)
                        }, {
                            merge: true
                        })];
                case 2:
                    _a.sent();
                    setReply("");
                    return [2 /*return*/];
            }
        });
    }); }; };
    console.log(comments);
    // ----------------コメントを削除------------------
    var deleteComment = function (comId) {
        comRef.doc(comId)["delete"]();
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("form", { onSubmit: newComment },
            react_1["default"].createElement(CommentForm_1["default"], { setComment: setComment, comment: comment })),
        react_1["default"].createElement(style_1.PostCommentLength, null,
            react_1["default"].createElement(style_1.PostCommentIcon, { onClick: function () { return setOpen(!open); } }),
            react_1["default"].createElement(GlobalLayoutStyle_1.StyledBoldText, null, comments.length ? react_1["default"].createElement(react_1["default"].Fragment, null,
                comments.length,
                "\u4EF6\u306E\u30B3\u30E1\u30F3\u30C8\u304C\u3042\u308A\u307E\u3059") : "コメントがまだありません")),
        open && (react_1["default"].createElement(style_1.PostCommentWrapper, null, comments.map(function (com) {
            var _a;
            return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(style_1.PostComment, { key: com.id },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(Avatar_1["default"], { src: com.avatar, className: classes.small, onClick: function () { return dispatch(connected_react_router_1.push("/users/" + com.uid)); } }),
                        react_1["default"].createElement(style_1.PostCommentUser, null,
                            "@",
                            com.username,
                            "\u3055\u3093"),
                        react_1["default"].createElement(style_1.CommentTime, null, moment_1["default"](new Date((_a = com.timestamp) === null || _a === void 0 ? void 0 : _a.toDate()).toLocaleString()).fromNow())),
                    com.uid === uid && react_1["default"].createElement(style_1.DeleteComment, { onClick: function () { return deleteComment(com.id); } }, "\u30B3\u30E1\u30F3\u30C8\u3092\u524A\u9664"),
                    react_1["default"].createElement(style_1.PostCommentText, null,
                        com.text,
                        " "),
                    com.reply === true &&
                        react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(Button_1["default"], { onClick: fetchReplyComment(com.id) }, "\u8FD4\u4FE1\u306E\u8868\u793A"),
                            replyOpen ?
                                react_1["default"].createElement(Reply_1["default"], { id: com.id, replies: replies })
                                :
                                    react_1["default"].createElement(react_1["default"].Fragment, null)),
                    postUid === uid && react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement("form", { onSubmit: replyComment(com.id) },
                            react_1["default"].createElement(CommentForm_1["default"], { setComment: setReply, comment: reply })))),
                react_1["default"].createElement(Divider_1["default"], null)));
        })))));
};
exports["default"] = Comment;
