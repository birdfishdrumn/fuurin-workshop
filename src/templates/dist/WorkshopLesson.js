"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var styled_components_1 = require("styled-components");
var LessonWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n width:100%;\n height:80%;\n background:white;\n padding:50px 25px;\n\n"], ["\n width:100%;\n height:80%;\n background:white;\n padding:50px 25px;\n\n"])));
var LessonColumn = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display:flex;\n >div:first-child{\n  flex-basis:40%\n }\n >div:last-child{\n   flex-basis:50%\n   text-align:left;\n }\n"], ["\n  display:flex;\n >div:first-child{\n  flex-basis:40%\n }\n >div:last-child{\n   flex-basis:50%\n   text-align:left;\n }\n"])));
var WorkShopDojo = function () {
    return (react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapping, null,
        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u7D75\u4ED8\u3051\u4F53\u9A13\u9053\u5834"),
        react_1["default"].createElement("div", { className: "module-spacer--medium" })));
};
exports["default"] = WorkShopDojo;
var templateObject_1, templateObject_2;
