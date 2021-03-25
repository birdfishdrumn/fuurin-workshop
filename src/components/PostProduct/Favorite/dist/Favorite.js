"use strict";
exports.__esModule = true;
var react_1 = require("react");
var index_1 = require("../../../firebase/index");
var app_1 = require("firebase/app");
var react_redux_1 = require("react-redux");
var operations_1 = require("../../../reducks/users/operations");
var style_1 = require("./style");
var IconButton_1 = require("@material-ui/core/IconButton");
var UI_1 = require("../../UI");
var userSlice_1 = require("reducks/users/userSlice");
var Favorite = function (_a) {
    var id = _a.id, uid = _a.uid, likesId = _a.likesId, post = _a.post, props = _a.props, userPost = _a.userPost;
    var _b = react_1.useState(false), openModal = _b[0], setOpenModal = _b[1];
    var dispatch = react_redux_1.useDispatch();
    console.log(post.name);
    var isSignedIn = react_redux_1.useSelector(userSlice_1.getIsSignedIn);
    // const uid = useSelector(getUserId)
    var addToFavorite = react_1.useCallback(function (event) {
        if (!userPost) {
            event.stopPropagation();
            var timeStamp = index_1.FirebaseTimestamp.now();
            // いいね済みの作品を押した場合削除する
            if (likesId.includes(id)) {
                // returnによって処理を高速化できる
                return index_1.db.collection("users").doc(uid).collection("likes").where("postId", "==", id).get().then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        var dataId = doc.data().likesId;
                        return index_1.db.collection("users").doc(uid)
                            .collection('likes').doc(dataId)["delete"]();
                    });
                }).then(function () {
                    index_1.db.collection("posts").doc(id).update({
                        likes: app_1["default"].firestore.FieldValue.arrayRemove(uid),
                        count: app_1["default"].firestore.FieldValue.increment(-1)
                    });
                    setOpenModal(false);
                });
            }
            // いいねしてない商品をデータベースに追加
            dispatch(operations_1.addPostToFavorite({
                added_at: timeStamp,
                description: post.description,
                images: post.images,
                allImages: post.allImages,
                name: post.name,
                postId: post.id
            }, uid));
            index_1.db.collection("posts").doc(id).set({
                likes: app_1["default"].firestore.FieldValue.arrayUnion(uid),
                count: app_1["default"].firestore.FieldValue.increment(1)
            }, {
                merge: true
            });
            setOpenModal(true);
        }
    }, [likesId]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(style_1.FavoriteWrapper, null, isSignedIn && (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(IconButton_1["default"], { onClick: addToFavorite, style: { paddingRight: "0" } },
                react_1["default"].createElement(style_1.FavoriteStyle, { isActive: likesId.includes(id) && true }),
                !props && react_1["default"].createElement(style_1.FavoriteCount, null,
                    " ",
                    post.uid === uid && post.likes ? post.likes.length : react_1["default"].createElement(react_1["default"].Fragment, null)))))),
        !props && openModal && react_1["default"].createElement(UI_1.ModalOpen, { title: "\u304A\u6C17\u306B\u5165\u308A\u306B\u767B\u9332\u3057\u307E\u3057\u305F" })));
};
exports["default"] = Favorite;
