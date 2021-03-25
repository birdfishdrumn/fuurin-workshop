"use strict";
exports.__esModule = true;
var react_1 = require("react");
var style_1 = require("./style");
var userSlice_1 = require("reducks/users/userSlice");
var logo2_png_1 = require("assets/img/icons/logo2.png");
var react_redux_1 = require("react-redux");
var Instagram_1 = require("@material-ui/icons/Instagram");
var Twitter_1 = require("@material-ui/icons/Twitter");
var connected_react_router_1 = require("connected-react-router");
var Footer = function () {
    var date = new Date();
    var year = date.getFullYear();
    var isSignedIn = react_redux_1.useSelector(userSlice_1.getIsSignedIn);
    var dispatch = react_redux_1.useDispatch();
    return (react_1["default"].createElement(style_1.FooterWrapper, null,
        react_1["default"].createElement(style_1.FooterNav, null,
            react_1["default"].createElement("li", { onClick: function () { return dispatch(connected_react_router_1.push("/help")); } }, "\u30D8\u30EB\u30D7"),
            react_1["default"].createElement("li", { onClick: function () { return dispatch(connected_react_router_1.push("/terms")); } }, "\u5229\u7528\u898F\u7D04"),
            react_1["default"].createElement("li", { onClick: function () { return dispatch(connected_react_router_1.push("/policy")); } }, "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC"),
            react_1["default"].createElement("li", { onClick: function () { return dispatch(connected_react_router_1.push("/workshopkit")); } }, "\u4F53\u9A13\u30AD\u30C3\u30C8\u306E\u3054\u8CFC\u5165")),
        react_1["default"].createElement(style_1.FooterNav, null,
            react_1["default"].createElement("li", null,
                react_1["default"].createElement(Twitter_1["default"], { style: { fontSize: "30px" } })),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement(Instagram_1["default"], { style: { fontSize: "30px" } }))),
        react_1["default"].createElement("div", { className: "center" },
            react_1["default"].createElement("img", { src: logo2_png_1["default"], alt: "ec", width: "128px", onClick: function () { return dispatch(connected_react_router_1.push("/")); } })),
        react_1["default"].createElement(style_1.Privacy, null,
            react_1["default"].createElement("p", null,
                year,
                " \u00A9 \u7BE0\u539F\u307E\u308B\u3088\u3057\u98A8\u9234 All Rights Reserved."))));
};
exports["default"] = Footer;
