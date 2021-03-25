"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var index_1 = require("../firebase/index");
var userSlice_1 = require("../reducks/users/userSlice");
var PostProduct_1 = require("../components/PostProduct");
var styles_1 = require("@material-ui/core/styles");
var ViewColumn_1 = require("@material-ui/icons/ViewColumn");
var FavoriteBorder_1 = require("@material-ui/icons/FavoriteBorder");
var GridOn_1 = require("@material-ui/icons/GridOn");
var Tooltip_1 = require("@material-ui/core/Tooltip");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var PeopleAlt_1 = require("@material-ui/icons/PeopleAlt");
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
    var _c = react_1.useState([]), favoriteUser = _c[0], setFavoriteUser = _c[1];
    var _d = react_1.useState(false), isActive = _d[0], setIsActive = _d[1];
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
    react_1.useEffect(function () {
        index_1.db.collection("users").doc(uid).collection("likeUser").get().then(function (snapshot) {
            var list = [];
            snapshot.forEach(function (doc) {
                var data = doc.data();
                console.log(data);
                list.push(data);
            });
            setFavoriteUser(list);
        });
    }, []);
    console.log(favoriteUser);
    return (react_1["default"].createElement("section", { className: "c-section-wrapin" },
        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u304A\u6C17\u306B\u5165\u308A\u30EA\u30B9\u30C8"),
        react_1["default"].createElement(GlobalLayoutStyle_1.IconFlex, null,
            react_1["default"].createElement("div", { onClick: function () { return setIsActive(false); } },
                react_1["default"].createElement(FavoriteBorder_1["default"], { style: { fontSize: "45px" } }),
                react_1["default"].createElement("p", null, "\u4F5C\u54C1")),
            react_1["default"].createElement("div", { onClick: function () { return setIsActive(true); } },
                react_1["default"].createElement(PeopleAlt_1["default"], { style: { fontSize: "45px" } }),
                react_1["default"].createElement("p", null, "\u30E6\u30FC\u30B6\u30FC"))),
        !isActive ?
            react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("ul", { className: classes.listIcon },
                    react_1["default"].createElement(Tooltip_1["default"], { title: "\u30B0\u30EA\u30C3\u30C9", interactive: true },
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(GridOn_1["default"], { fontSize: "large", onClick: function () { return setChange(false); } }))),
                    react_1["default"].createElement(Tooltip_1["default"], { title: "\u77ED\u518A\u307E\u3067", interactive: true },
                        react_1["default"].createElement("li", { onClick: function () { return setChange(true); } },
                            react_1["default"].createElement(ViewColumn_1["default"], { fontSize: "large" })))),
                react_1["default"].createElement(GlobalLayoutStyle_1.GridList, { change: change }, postInFavorite.length > 0 && (postInFavorite.map(function (post) {
                    return react_1["default"].createElement(GlobalLayoutStyle_1.ScrollItem, null,
                        react_1["default"].createElement(PostProduct_1.PostCard, { change: change, favorite: true, post: post, key: post.id, name: post.postId, images: post.images, allImages: post.allImages, id: post.postId, description: post.description, username: post.username, avatar: post.avatar, uid: post.uid }));
                }))))
            :
                react_1["default"].createElement("div", { className: "center" }, favoriteUser.map((function (user) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(PostProduct_1.FavoriteUserList, { avatar: user.avatar, username: user.username, profile: user.profile, uid: user.uid }))); }))),
        react_1["default"].createElement("div", { style: { height: "25vh" } })));
};
exports["default"] = FavoriteList;
