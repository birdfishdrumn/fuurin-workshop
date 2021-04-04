"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var UI_1 = require("../components/UI");
var userSlice_1 = require("../reducks/users/userSlice");
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("@material-ui/core/styles");
var operations_1 = require("reducks/users/operations");
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
    var _a = react_1.useState(""), name = _a[0], setName = _a[1];
    var _b = react_1.useState(""), currentPassword = _b[0], setCurrentPassword = _b[1];
    var _c = react_1.useState(""), newPassword = _c[0], setNewPassword = _c[1];
    var username = react_redux_1.useSelector(userSlice_1.getUsername);
    var profile = react_redux_1.useSelector(userSlice_1.getUserProfile);
    var changePassword = function (newPassword, currentPassword) {
        dispatch(operations_1.changePasswordAction(newPassword, currentPassword));
        // alert("ok")
    };
    var transition = react_1.useCallback(function (path) {
        history.push(path);
    }, []);
    var inputName = react_1.useCallback(function (event) {
        setName(event.target.value);
    }, [setName]);
    var inputCurrentPassword = react_1.useCallback(function (event) {
        setCurrentPassword(event.target.value);
    }, [setCurrentPassword]);
    var inputNewPassword = react_1.useCallback(function (event) {
        setNewPassword(event.target.value);
    }, [setNewPassword]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapping, null,
            react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u5909\u66F4"),
            react_1["default"].createElement(GlobalLayoutStyle_1.Text, { Flex: true, left: true }, "\u3053\u3061\u3089\u3067\u306F\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5909\u66F4\u3059\u308B\u4E8B\u304C\u53EF\u80FD\u3067\u3059\u3002\u73FE\u5728\u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u60C5\u5831\u304C\u5FC5\u9808\u306B\u306A\u308A\u307E\u3059\u306E\u3067\u3001\u5165\u529B\u5F8C\u65B0\u3057\u30446\u6841\u4EE5\u4E0A\u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"),
            react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, { left: true, color: "red" }, "\u203Bgoogle\u3084sns\u30A2\u30AB\u30A6\u30F3\u30C8\u60C5\u5831\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u306F\u5909\u66F4\u306E\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u306E\u3067\u3054\u4E86\u627F\u4E0B\u3055\u3044\u3002"),
            react_1["default"].createElement("div", { className: "module-spacer--medium" }),
            react_1["default"].createElement(UI_1.TextInput, { fullWidth: false, label: "現在のパスワード", multiline: false, required: true, rows: 1, value: currentPassword, type: "password", variant: "outlined", onChange: inputCurrentPassword }),
            react_1["default"].createElement("div", { className: "module-spacer--extra-small" }),
            react_1["default"].createElement(UI_1.TextInput, { fullWidth: false, label: "新しいパスワード", multiline: false, required: true, rows: 1, value: newPassword, type: "password", variant: "outlined", onChange: inputNewPassword }),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(UI_1.PrimaryButton, { label: "変更する", 
                // disabled={currentPassword != newPassword}
                onClick: function () { return changePassword(currentPassword, newPassword); } }))));
};
exports["default"] = UserAccount;
