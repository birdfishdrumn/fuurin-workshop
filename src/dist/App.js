"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Router_1 = require("./Router");
require("./assets/reset.css");
require("./assets/style.css");
var Footer_1 = require("./components/Footer");
var Header_1 = require("./components/Header");
var UI_1 = require("./components/UI");
var Auth_1 = require("./Auth");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var App = function () {
    return (react_1["default"].createElement(UI_1.Loading, null,
        react_1["default"].createElement(Header_1.Header, null),
        react_1["default"].createElement(UI_1.ScrollTop, null,
            react_1["default"].createElement(GlobalLayoutStyle_1.Main, null,
                react_1["default"].createElement(Router_1["default"], null),
                react_1["default"].createElement(UI_1.Snackbar, null))),
        react_1["default"].createElement(Auth_1["default"], { notUseEffect: true },
            react_1["default"].createElement(Footer_1.BottomNavigator, null),
            react_1["default"].createElement("div", { className: "mobile_only" },
                react_1["default"].createElement(Footer_1.Footer, null)))));
};
exports["default"] = App;
