"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
// import ProductEdit from "./ProductEdit";
var PostList_module_css_1 = require("./module.css/PostList.module.css");
var styles_1 = require("@material-ui/core/styles");
var PostProduct_1 = require("components/PostProduct");
// import { fetchPosts } from "../reducks/posts/operations";
var firebase_1 = require("../firebase");
var userSlice_1 = require("../reducks/users/userSlice");
var UI_1 = require("../components/UI");
var index_1 = require("components/Footer/index");
var connected_react_router_1 = require("connected-react-router");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    sort: {
        margin: "20px 50px 10px 0",
        justifyContent: "center",
        color: "grey",
        display: "flex",
        listStyle: "none",
        flexFlow: "row",
        '& > li': {
            margin: 10
        }
    }
}); });
var TopPage = function (props) {
    var dispatch = react_redux_1.useDispatch();
    var classes = useStyles();
    var selector = react_redux_1.useSelector(userSlice_1.getRoute);
    var _a = react_1.useState([]), postsList = _a[0], setPostsList = _a[1];
    var _b = react_1.useState("desc"), order = _b[0], setOrder = _b[1];
    var _c = react_1.useState(), lastDoc = _c[0], setLastDoc = _c[1];
    var _d = react_1.useState(false), isEmpty = _d[0], setIsEmpty = _d[1];
    var _e = react_1.useState(false), change = _e[0], setChange = _e[1];
    var _f = react_1.useState(false), open = _f[0], setOpen = _f[1];
    var _g = react_1.useState(false), sign = _g[0], setSign = _g[1];
    var isSignedIn = react_redux_1.useSelector(userSlice_1.getIsSignedIn);
    console.log(isSignedIn);
    var postsRef = firebase_1.db.collection("posts");
    var query = decodeURI(selector.location.search);
    //  props.history.push("/");
    var category = /^\?category=/.test(query) ? query.split("?category=")[1] : "";
    var tags = /^\?tags=/.test(query) ? query.split("?tags=")[1] : "";
    react_1.useEffect(function () {
        var unSub = postsRef.orderBy("updated_at", order).limit(12).onSnapshot(function (snapshots) {
            var postList = [];
            snapshots.forEach(function (snapshot) {
                var post = snapshot.data();
                postList.push(post);
            });
            setPostsList(postList);
        });
        return function () {
            unSub();
        };
    }, []);
    var handleClose = react_1.useCallback(function () {
        setOpen(false);
    }, [setOpen]);
    react_1.useEffect(function () {
        if (isSignedIn === true) {
            dispatch(connected_react_router_1.push("/"));
        }
    }, [isSignedIn]);
    var signInOpen = function () {
        setOpen(true);
        setSign(true);
    };
    var signUpOpen = function () {
        setOpen(true);
        setSign(false);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapper, null,
            react_1["default"].createElement(GlobalLayoutStyle_1.TwoColumn, null,
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(GlobalLayoutStyle_1.MainTitle, null, "\u4E16\u754C\u306B\u4E00\u3064\u3060\u3051\u306E\u98A8\u9234\u3092\u6295\u7A3F\u3057\u3088\u3046\uFF01"),
                    react_1["default"].createElement(UI_1.PrimaryButton, { onClick: signInOpen, label: "\u30ED\u30B0\u30A4\u30F3" }),
                    " ",
                    react_1["default"].createElement(UI_1.PrimaryButton, { onClick: signUpOpen, label: "\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u767B\u9332" }))),
            react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u65B0\u7740\u4F5C\u54C1"),
            react_1["default"].createElement(GlobalLayoutStyle_1.GridList, null, postsList.length > 0 ?
                postsList.map(function (post) { return (react_1["default"].createElement("li", { className: PostList_module_css_1["default"].p_grid__scroll_item },
                    react_1["default"].createElement(PostProduct_1.PostCard, { change: change, post: post, key: post.id, name: post.name, images: post.images, allImages: post.allImages, id: post.id, description: post.description, username: post.username, avatar: post.avatar, uid: post.uid }))); })
                :
                    // ローディング中の表示
                    react_1["default"].createElement("div", { style: {
                            height: "100vh",
                            backgroundColor: "#F5F5F5"
                        } })),
            react_1["default"].createElement(UI_1.SignDialog, { open: open, handleClose: handleClose, signIn: sign, setSign: setSign }),
            react_1["default"].createElement(UI_1.ConfirmModal, null)),
        react_1["default"].createElement(index_1.Footer, null)));
};
exports["default"] = TopPage;
