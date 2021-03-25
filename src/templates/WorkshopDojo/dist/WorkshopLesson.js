"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var styled_components_1 = require("styled-components");
var react_id_swiper_1 = require("react-id-swiper");
var marukingyo_svg_jpg_1 = require("assets/img/src/marukingyo_svg.jpg");
var LessonWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n width:100%;\n height:80%;\n background:white;\n padding:50px 25px;\n\n"], ["\n width:100%;\n height:80%;\n background:white;\n padding:50px 25px;\n\n"])));
var LessonColumn = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display:flex;\n >div:first-child{\n  flex-basis:40%\n }\n >div:last-child{\n   flex-basis:50%\n   text-align:left;\n }\n"], ["\n  display:flex;\n >div:first-child{\n  flex-basis:40%\n }\n >div:last-child{\n   flex-basis:50%\n   text-align:left;\n }\n"])));
var LessonBox = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\nwidth:90%;\nheight:500px;\nbackground-color:white;\npadding:30px;\n"], ["\nwidth:90%;\nheight:500px;\nbackground-color:white;\npadding:30px;\n"])));
var LessonImage = styled_components_1["default"].img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\nwidth:350px;\nheight:350px;\nborder-radius:50%;\n"], ["\nwidth:350px;\nheight:350px;\nborder-radius:50%;\n"])));
var WorkShopDojo = function () {
    var params = {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    };
    return (react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapping, null,
        react_1["default"].createElement(GlobalLayoutStyle_1.Title, null, "\u7D75\u4ED8\u3051\u4F53\u9A13\u9053\u5834"),
        react_1["default"].createElement("div", { className: "module-spacer--medium" }),
        react_1["default"].createElement(react_id_swiper_1["default"], __assign({}, params),
            react_1["default"].createElement(LessonBox, null,
                react_1["default"].createElement(LessonImage, { src: marukingyo_svg_jpg_1["default"] })),
            react_1["default"].createElement(LessonBox, null),
            react_1["default"].createElement(LessonBox, null),
            react_1["default"].createElement(LessonBox, null))));
};
exports["default"] = WorkShopDojo;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
