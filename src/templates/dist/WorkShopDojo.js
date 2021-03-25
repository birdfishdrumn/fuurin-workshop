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
        react_1["default"].createElement("div", { className: "module-spacer--medium" }),
        react_1["default"].createElement(LessonWrapper, null,
            react_1["default"].createElement(LessonColumn, null,
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("img", { src: "" })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(GlobalLayoutStyle_1.Title, { left: true }, "Lesson 1"),
                    react_1["default"].createElement(GlobalLayoutStyle_1.Title, { left: true }, " \u91D1\u9B5A\u306E\u63CF\u304D\u65B9"),
                    react_1["default"].createElement(GlobalLayoutStyle_1.Text, { left: true }, "\u98A8\u9234\u306E\u82B1\u5F62\u3067\u3042\u308B\u91D1\u9B5A\u306E\u63CF\u304D\u65B9\u306E\u8AAC\u660E\u3092\u81F4\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u30DE\u30B9\u30BF\u30FC\u3057\u3066\u30AB\u30C3\u30B3\u30A4\u30A4\u91D1\u9B5A\u3092\u63CF\u3053\u3046\uFF01")))),
        react_1["default"].createElement("div", { className: "module-spacer--medium" }),
        react_1["default"].createElement(LessonWrapper, null,
            react_1["default"].createElement(LessonColumn, null,
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("img", { src: "" })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(GlobalLayoutStyle_1.Title, { left: true }, "Lesson 2"),
                    react_1["default"].createElement(GlobalLayoutStyle_1.Title, { left: true }, " \u82B1\u706B\u306E\u63CF\u304D\u65B9"),
                    react_1["default"].createElement(GlobalLayoutStyle_1.Text, { left: true }, "\u98A8\u9234\u306E\u82B1\u5F62\u3067\u3042\u308B\u91D1\u9B5A\u306E\u63CF\u304D\u65B9\u306E\u8AAC\u660E\u3092\u81F4\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u30DE\u30B9\u30BF\u30FC\u3057\u3066\u30AB\u30C3\u30B3\u30A4\u30A4\u91D1\u9B5A\u3092\u63CF\u3053\u3046\uFF01")))),
        react_1["default"].createElement("div", { className: "module-spacer--medium" }),
        react_1["default"].createElement(LessonWrapper, null,
            react_1["default"].createElement(LessonColumn, null,
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("img", { src: "" })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(GlobalLayoutStyle_1.Title, { left: true }, "Lesson 3"),
                    react_1["default"].createElement(GlobalLayoutStyle_1.Title, { left: true }, " \u8D64\u7389\u306E\u63CF\u304D\u65B9"),
                    react_1["default"].createElement(GlobalLayoutStyle_1.Text, { left: true }, "\u98A8\u9234\u306E\u82B1\u5F62\u3067\u3042\u308B\u91D1\u9B5A\u306E\u63CF\u304D\u65B9\u306E\u8AAC\u660E\u3092\u81F4\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u30DE\u30B9\u30BF\u30FC\u3057\u3066\u30AB\u30C3\u30B3\u30A4\u30A4\u91D1\u9B5A\u3092\u63CF\u3053\u3046\uFF01"))))));
};
exports["default"] = WorkShopDojo;
var templateObject_1, templateObject_2;
