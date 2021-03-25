"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var styled_components_1 = require("styled-components");
var HelpNav = styled_components_1["default"].ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n list-style:none;\n margin:10px 0;\n>li{\n  padding:10px 0;\n}\n"], ["\n list-style:none;\n margin:10px 0;\n>li{\n  padding:10px 0;\n}\n"])));
var Help = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapping, null,
            react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u4F53\u9A13\u30AD\u30C3\u30C8\u306B\u3064\u3044\u3066"))));
};
exports["default"] = Help;
var templateObject_1;
