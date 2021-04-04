"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
// import ProductEdit from "./ProductEdit";
var PostProduct_1 = require("../components/PostProduct");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var List_1 = require("@material-ui/core/List");
var operations_1 = require("../reducks/posts/operations");
var postSlice_1 = require("../reducks/posts/postSlice");
var SentimentDissatisfiedOutlined_1 = require("@material-ui/icons/SentimentDissatisfiedOutlined");
var styles_1 = require("@material-ui/core/styles");
var userSlice_1 = require("../reducks/users/userSlice");
// import Carousel from 'react-material-ui-carousel'
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        margin: '0 auto',
        maxWidth: 512,
        width: '100%'
    }
}); });
var UserPost = function () {
    var classes = useStyles();
    var dispatch = react_redux_1.useDispatch();
    var posts = react_redux_1.useSelector(postSlice_1.getUserPosts);
    var uid = react_redux_1.useSelector(userSlice_1.getUserId);
    react_1.useEffect(function () {
        dispatch(operations_1.addUserPost(uid));
    }, []);
    console.log(posts);
    return (react_1["default"].createElement("section", { className: "c-section-wrapin" },
        react_1["default"].createElement("div", { className: "u-text__headline" },
            react_1["default"].createElement(List_1["default"], { className: classes.root }, posts.length > 0 ?
                posts.map(function (post) { return (react_1["default"].createElement(PostProduct_1.UserPostItem, { post: post })); })
                : react_1["default"].createElement("div", { className: "center none_post" },
                    react_1["default"].createElement(SentimentDissatisfiedOutlined_1["default"], null),
                    react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, null, "\u6295\u7A3F\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093"))))));
};
exports["default"] = UserPost;
