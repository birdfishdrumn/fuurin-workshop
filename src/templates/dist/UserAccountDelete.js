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
    var uid = react_redux_1.useSelector(userSlice_1.getUserId);
    var history = react_router_dom_1.useHistory();
    var _a = react_1.useState(""), name = _a[0], setName = _a[1];
    var _b = react_1.useState(""), password = _b[0], setPassword = _b[1];
    var username = react_redux_1.useSelector(userSlice_1.getUsername);
    var profile = react_redux_1.useSelector(userSlice_1.getUserProfile);
    var deleteUser = function (uid) {
        dispatch(operations_1.userDelete(uid));
        // alert("ok")
    };
    var transition = react_1.useCallback(function (path) {
        history.push(path);
    }, []);
    var inputName = react_1.useCallback(function (event) {
        setName(event.target.value);
    }, [setName]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapping, null,
            react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u9000\u4F1A\u306E\u304A\u624B\u7D9A\u304D"),
            react_1["default"].createElement(GlobalLayoutStyle_1.Text, { Flex: true, left: true }, "\u304A\u5BA2\u69D8\u306E\u304A\u540D\u524D\u3092\u5165\u529B\u5F8C\u3001\u3053\u3061\u3089\u306E\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3044\u305F\u3060\u3051\u308C\u3070\u9000\u4F1A\u306E\u304A\u624B\u7D9A\u304D\u304C\u5B8C\u4E86\u3057\u307E\u3059\u3002\u9000\u4F1A\u3057\u3066\u3057\u307E\u3046\u3068\u3001\u4ECA\u307E\u3067\u767B\u9332\u3057\u305F\u4F5C\u54C1\u306E\u30C7\u30FC\u30BF\u306A\u3069\u3082\u5168\u3066\u524A\u9664\u3055\u308C\u3066\u3057\u307E\u3044\u307E\u3059\u306E\u3067\u3001\u3054\u6CE8\u610F\u304F\u3060\u3055\u3044\u307E\u305B\u3002"),
            react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, { left: true, color: "red" }, "\u203B\u30ED\u30B0\u30A4\u30F3\u306E\u72B6\u614B\u304C\u9577\u304F\u7D9A\u3044\u3066\u308B\u72B6\u614B\u3060\u3068\u51E6\u7406\u306B\u5931\u6557\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u306E\u3067\u3001\u518D\u5EA6\u30ED\u30B0\u30A4\u30F3\u3057\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002"),
            react_1["default"].createElement("div", { className: "module-spacer--medium" }),
            react_1["default"].createElement(UI_1.TextInput, { fullWidth: false, label: "お名前", multiline: false, required: true, onChange: inputName, rows: 1, value: name, type: "text", variant: "outlined" }),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(UI_1.PrimaryButton, { label: "退会する", disabled: name != username, onClick: function () { return deleteUser(uid); } }))));
};
exports["default"] = UserAccount;
