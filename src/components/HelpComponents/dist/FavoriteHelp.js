"use strict";
exports.__esModule = true;
var react_1 = require("react");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var style_1 = require("./style");
var FavoriteHelp = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u304A\u6C17\u306B\u5165\u308A\u30B7\u30B9\u30C6\u30E0\u306B\u3064\u3044\u3066"),
        react_1["default"].createElement(GlobalLayoutStyle_1.HelpNav, null,
            react_1["default"].createElement("li", null,
                react_1["default"].createElement(GlobalLayoutStyle_1.Title, { min: true, left: true, black: true },
                    react_1["default"].createElement(style_1.QuestionIcon, null),
                    "\u304A\u6C17\u306B\u5165\u308A\u3067\u4F55\u304C\u3067\u304D\u307E\u3059\u304B\uFF1F"),
                react_1["default"].createElement(GlobalLayoutStyle_1.Text, { left: true }, "\u4F5C\u54C1\u306E\u53F3\u4E0A\u306E\u2764\uFE0F\u3092\u30BF\u30C3\u30C1\u3057\u3066\u3044\u305F\u3060\u304F\u3068\u304A\u6C17\u306B\u5165\u308A\u30DA\u30FC\u30B8\u306B\u6C17\u306B\u5165\u3063\u305F\u306E\u4F5C\u54C1\u3092\u767B\u9332\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u307E\u305F\u30E6\u30FC\u30B6\u30FC\u3092\u304A\u6C17\u306B\u5165\u308A\u3082\u540C\u69D8\u306B\u6C17\u306B\u5165\u3063\u305F\u30E6\u30FC\u30B6\u30FC\u3092\u767B\u9332\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"),
                react_1["default"].createElement(GlobalLayoutStyle_1.Title, { min: true, left: true, black: true },
                    react_1["default"].createElement(style_1.QuestionIcon, null),
                    "\u4EBA\u6C17\u30EA\u30B9\u30C8\u306A\u3069\u306E\u96C6\u8A08\u65B9\u6CD5\u306F\u3069\u3046\u306A\u3063\u3066\u3044\u307E\u3059\u304B\uFF1F"),
                react_1["default"].createElement(GlobalLayoutStyle_1.Text, { left: true }, "\u304A\u6C17\u306B\u5165\u308A\u306B\u767B\u9332\u3055\u308C\u305F\u6570\u306E\u5408\u8A08\u3067\u9806\u4F4D\u304C\u6C7A\u307E\u308A\u307E\u3059\u3002\u9806\u4F4D\u304C\u5168\u3066\u3067\u306F\u306A\u3044\u3067\u3059\u304C\u3001\u81EA\u8EAB\u306E\u3042\u308B\u4EBA\u306F\u4E0A\u4F4D\u3092\u76EE\u6307\u3057\u3066\u307F\u307E\u3057\u3087\u3046\u3002")))));
};
exports["default"] = FavoriteHelp;
