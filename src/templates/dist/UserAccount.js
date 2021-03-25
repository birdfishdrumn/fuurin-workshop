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
        borderRadius: "5%"
    }
}); });
var UserAccount = function () {
    var classes = useStyles();
    var dispatch = react_redux_1.useDispatch();
    var history = react_router_dom_1.useHistory();
    var username = react_redux_1.useSelector(userSlice_1.getUsername);
    var avatar = react_redux_1.useSelector(userSlice_1.getUserAvatar);
    var profile = react_redux_1.useSelector(userSlice_1.getUserProfile);
    var transition = react_1.useCallback(function (path) {
        history.push(path);
    }, []);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("section", { className: "c-section-container center" },
            react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u30DE\u30A4\u30DA\u30FC\u30B8"),
            react_1["default"].createElement(core_1.Avatar, { className: classes.large, src: avatar }),
            react_1["default"].createElement("div", { className: "module-spacer--medium" }),
            react_1["default"].createElement(UI_1.PrimaryButton, { label: "パスワードを変更する", onClick: function () { return transition('/user/post'); } }),
            react_1["default"].createElement(UI_1.PrimaryButton, { label: "アカウントを削除する", onClick: function () { return transition('/user/edit'); } }))));
};
exports["default"] = UserAccount;
