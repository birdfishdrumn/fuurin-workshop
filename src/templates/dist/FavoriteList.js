"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var userSlice_1 = require("../reducks/users/userSlice");
var PostProduct_1 = require("../components/PostProduct");
var styles_1 = require("@material-ui/core/styles");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var index_1 = require("components/UI/index");
// import { DragDropContext, Droppable } from "react-beautiful-dnd";
var reorder = function (list, startIndex, endIndex) {
    var result = Array.from(list);
    var removed = result.splice(startIndex, 1)[0];
    result.splice(endIndex, 0, removed);
    return result;
};
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        margin: '0 auto',
        maxWidth: 512,
        width: '100%'
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
}); });
var FavoriteList = function () {
    var classes = useStyles();
    var uid = react_redux_1.useSelector(userSlice_1.getUserId);
    var _a = react_1.useState(false), change = _a[0], setChange = _a[1];
    // getPostsInFavoriteの処理により、お気に入りに登録された作品リストをレンダリングされた時点で取得できる。
    var postInFavorite = react_redux_1.useSelector(userSlice_1.getPostsInFavorite);
    var _b = react_1.useState({ items: postInFavorite }), sortPost = _b[0], setSortPost = _b[1];
    console.log(postInFavorite);
    var _c = react_1.useState(false), isActive = _c[0], setIsActive = _c[1];
    var onDragEnd = function (result) {
        if (!result.destination) {
            return;
        }
        if (result.destination.index === result.source.index) {
            return;
        }
        var items = reorder(sortPost.items, result.source.index, result.destination.index);
        // おそらくstateにドラッグできるようにidを採番したものをsetStateした。
        setSortPost({ items: items });
    };
    return (react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapper, null,
        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u304A\u6C17\u306B\u5165\u308A\u30EA\u30B9\u30C8"),
        react_1["default"].createElement(index_1.FavoriteNav, null),
        react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(index_1.ImageStyleChangeIcon, { setChange: setChange }),
            react_1["default"].createElement("div", { className: "module-spacer--small" }),
            react_1["default"].createElement(GlobalLayoutStyle_1.GridList, { change: change }, postInFavorite.length > 0 && (postInFavorite.map(function (post) {
                return react_1["default"].createElement(GlobalLayoutStyle_1.ScrollItem, null,
                    react_1["default"].createElement(PostProduct_1.PostCard, { change: change, favorite: true, post: post, key: post.id, name: post.postId, images: post.images, allImages: post.allImages, id: post.postId, description: post.description, username: post.username, avatar: post.avatar, uid: post.uid }));
            })))),
        react_1["default"].createElement("div", { style: { height: "25vh" } })));
};
exports["default"] = FavoriteList;
