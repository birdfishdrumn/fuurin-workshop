"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var UI_1 = require("components/UI");
var operations_1 = require("reducks/users/operations");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var connected_react_router_1 = require("connected-react-router");
var styled_components_1 = require("styled-components");
var core_1 = require("@material-ui/core");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var SignInWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nwidth:100%;\n @media(min-width:600px){\n   width:500px\n }\n"], ["\nwidth:100%;\n @media(min-width:600px){\n   width:500px\n }\n"])));
var SNS = styled_components_1["default"].ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nlist-style:none;\ndisplay:flex;\njustify-content:space-around;\n\n>li{\n cursor: pointer;\n}\n"], ["\nlist-style:none;\ndisplay:flex;\njustify-content:space-around;\n\n>li{\n cursor: pointer;\n}\n"])));
var SignIn = function (props) {
    var history = react_router_dom_1.useHistory();
    var dispatch = react_redux_1.useDispatch();
    var _a = react_1.useState(""), email = _a[0], setEmail = _a[1], _b = react_1.useState(""), password = _b[0], setPassword = _b[1];
    var inputEmail = react_1.useCallback(function (event) {
        setEmail(event.target.value);
    }, [setEmail]);
    var inputPassword = react_1.useCallback(function (event) {
        setPassword(event.target.value);
    }, [setPassword]);
    var signInAction = function () {
        dispatch(operations_1.signIn(email, password));
        //  props.history.push("/");
    };
    return (react_1["default"].createElement(SignInWrapper, null,
        react_1["default"].createElement(UI_1.TextInput, { fullWidth: true, label: "Email", multiline: false, required: true, rows: 1, value: email, type: "email", variant: "outlined", onChange: inputEmail }),
        react_1["default"].createElement("div", { className: "module-spacer--very-small" }),
        react_1["default"].createElement(UI_1.TextInput, { fullWidth: true, label: "パスワード", multiline: false, required: true, rows: 1, value: password, type: "password", variant: "outlined", onChange: inputPassword }),
        react_1["default"].createElement("div", { className: "center" },
            react_1["default"].createElement(UI_1.PrimaryButton, { label: "ログイン", disabled: email === "" || password === "", onClick: function () {
                    return signInAction();
                } }),
            react_1["default"].createElement("div", { className: "module-spacer--medium" }),
            react_1["default"].createElement(core_1.Divider, null),
            react_1["default"].createElement("div", { className: "module-spacer--medium" }),
            react_1["default"].createElement(SNS, null,
                react_1["default"].createElement("li", { onClick: function () { return dispatch(operations_1.googleSignIn()); } },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { style: { fontSize: "2rem" }, icon: free_brands_svg_icons_1.faGoogle })),
                react_1["default"].createElement("li", { onClick: function () { return dispatch(operations_1.twitterSignIn()); } },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { style: { fontSize: "2rem", color: "#1DA1F2" }, icon: free_brands_svg_icons_1.faTwitter })),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { style: { fontSize: "2rem", color: "#3B5998" }, icon: free_brands_svg_icons_1.faFacebook }))),
            react_1["default"].createElement("div", { className: "module-spacer--medium" }),
            react_1["default"].createElement("p", { className: "pointer", onClick: function () { return props.setSign(false); } }, "\u65B0\u898F\u767B\u9332\u306F\u3053\u3061\u3089"),
            react_1["default"].createElement("p", { className: "pointer", onClick: function () { return dispatch(connected_react_router_1.push("/signin/reset")); } }, "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5FD8\u308C\u305F\u65B9\u306F\u3053\u3061\u3089"))));
};
exports["default"] = SignIn;
var templateObject_1, templateObject_2;
