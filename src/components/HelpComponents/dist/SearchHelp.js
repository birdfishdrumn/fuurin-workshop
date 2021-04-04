"use strict";
exports.__esModule = true;
var react_1 = require("react");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var style_1 = require("./style");
var SearchHelp = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u691C\u7D22\u30B7\u30B9\u30C6\u30E0\u306B\u3064\u3044\u3066"),
        react_1["default"].createElement(GlobalLayoutStyle_1.HelpNav, null,
            react_1["default"].createElement("li", null,
                react_1["default"].createElement(GlobalLayoutStyle_1.Title, { min: true, left: true, black: true },
                    react_1["default"].createElement(style_1.QuestionIcon, null),
                    "\u691C\u7D22\u306F\u3069\u306E\u3088\u3046\u306B\u3057\u3066\u3067\u304D\u307E\u3059\u304B\uFF1F"),
                react_1["default"].createElement(GlobalLayoutStyle_1.Text, { left: true },
                    "\uD83D\uDD0D\u306E\u30DA\u30FC\u30B8\u3088\u308A\u3001\u30AD\u30FC\u30EF\u30FC\u30C9\u306E\u5165\u529B\u306B\u3088\u308B\u691C\u7D22\u3001\u30AB\u30C6\u30B4\u30EA\u30FC\u3001\u30BF\u30B0\u306B\u3088\u308B\u691C\u7D22\u306E\u4E09\u7A2E\u985E\u304B\u3089\u57FA\u672C\u7684\u306B\u306F\u691C\u7D22\u3067\u304D\u307E\u3059\u3002",
                    react_1["default"].createElement("br", null),
                    "\u307E\u305F\u691C\u7D22\u30B7\u30B9\u30C6\u30E0\u3092\u4F7F\u3046\u3053\u3068\u3067\u540C\u3058\u30BF\u30B0\u3092\u6301\u3063\u305F\u4F5C\u54C1\u3092\u4E00\u5EA6\u306B\u8868\u793A\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30BF\u30B0\u306A\u3069\u306F\u7A4D\u6975\u7684\u306B\u6D3B\u7528\u3057\u3066\u3044\u304D\u307E\u3057\u3087\u3046\u3002")))));
};
exports["default"] = SearchHelp;
