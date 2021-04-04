"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var UI_1 = require("../components/UI");
var userSlice_1 = require("../reducks/users/userSlice");
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("@material-ui/core/styles");
var core_1 = require("@material-ui/core");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: "auto"
    },
    profile: {
        flexFlow: 'row wrap',
        marginBottom: 16,
        background: "white",
        padding: 16,
        borderRadius: "10px",
        boxShadow: "0 0px 10px rgba(0,0,0,0.2)"
    }
}); });
var UserMyPage = function (props) {
    var classes = useStyles();
    var dispatch = react_redux_1.useDispatch();
    var history = react_router_dom_1.useHistory();
    var username = react_redux_1.useSelector(userSlice_1.getUsername);
    var email = react_redux_1.useSelector(userSlice_1.getEmail);
    var avatar = react_redux_1.useSelector(userSlice_1.getUserAvatar);
    var profile = react_redux_1.useSelector(userSlice_1.getUserProfile);
    var url = react_redux_1.useSelector(userSlice_1.getUserUrl);
    console.log(url);
    var transition = react_1.useCallback(function (path) {
        history.push(path);
    }, []);
    console.log(avatar);
    return (react_1["default"].createElement("section", { className: "c-section-container center" },
        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u30DE\u30A4\u30DA\u30FC\u30B8"),
        react_1["default"].createElement(core_1.Avatar, { className: classes.large, src: avatar }),
        react_1["default"].createElement("div", { className: "module-spacer--medium" }),
        react_1["default"].createElement(UI_1.TextDetail, { label: "\u30E6\u30FC\u30B6\u30FC\u540D", value: username }),
        react_1["default"].createElement("div", { className: classes.profile },
            "Url",
            react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, { left: true, style: { marginTop: "10px", fontWeight: 600 } }, url)),
        react_1["default"].createElement("div", { className: "center" },
            react_1["default"].createElement("div", { className: classes.profile },
                "\u7D39\u4ECB\u6587",
                react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, { style: { marginTop: "10px", fontWeight: 600 } }, profile)),
            react_1["default"].createElement("div", { className: "center" }),
            react_1["default"].createElement(UI_1.PrimaryButton, { label: "投稿した作品", onClick: function () { return transition('/user/post'); } }),
            react_1["default"].createElement(UI_1.PrimaryButton, { label: "プロフィールを編集する", onClick: function () { return transition('/user/edit'); } }),
            react_1["default"].createElement(UI_1.PrimaryButton, { label: "アカウントを設定", onClick: function () { return transition('/user/account'); } }))));
};
exports["default"] = UserMyPage;
