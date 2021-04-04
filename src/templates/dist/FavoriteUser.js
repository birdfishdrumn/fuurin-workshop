"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PostProduct_1 = require("../components/PostProduct");
var userSlice_1 = require("reducks/users/userSlice");
var index_1 = require("firebase/index");
var react_redux_1 = require("react-redux");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var index_2 = require("components/UI/index");
var loadingSlice_1 = require("reducks/loadingSlice");
var FavoriteUser = function () {
    var uid = react_redux_1.useSelector(userSlice_1.getUserId);
    var dispatch = react_redux_1.useDispatch();
    var _a = react_1.useState([]), favoriteUser = _a[0], setFavoriteUser = _a[1];
    react_1.useEffect(function () {
        dispatch(loadingSlice_1.showLoadingAction("loading"));
        index_1.db.collection("users").doc(uid).collection("likeUser").get().then(function (snapshot) {
            var list = [];
            snapshot.forEach(function (doc) {
                var data = doc.data();
                console.log(data);
                list.push(data);
            });
            setFavoriteUser(list);
            dispatch(loadingSlice_1.hideLoadingAction());
        });
    }, []);
    return (react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapper, null,
        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u304A\u6C17\u306B\u5165\u308A\u30EA\u30B9\u30C8"),
        react_1["default"].createElement(index_2.FavoriteNav, null),
        favoriteUser.length ? favoriteUser.map((function (user) { return (react_1["default"].createElement(PostProduct_1.FavoriteUserList, { avatar: user.avatar, username: user.username, profile: user.profile, uid: user.uid })); }))
            :
                react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("div", { className: "module-spacer--medium" }),
                    react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, null, "\u304A\u6C17\u306B\u5165\u308A\u306B\u767B\u9332\u3055\u308C\u305F\u30E6\u30FC\u30B6\u30FC\u304C\u3044\u307E\u305B\u3093\u3002"))));
};
exports["default"] = FavoriteUser;
