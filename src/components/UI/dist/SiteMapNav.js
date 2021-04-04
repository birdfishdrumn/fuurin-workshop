"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var GlobalLayoutStyle_1 = require("assets/GlobalLayoutStyle");
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
var NavImageContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n width:45px;\n height:45px;\n      display: inline-block;\n"], ["\n width:45px;\n height:45px;\n      display: inline-block;\n"])));
var NavImage = styled_components_1["default"].img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n width:45px !important;\n height:45px !important;\n"], ["\n width:45px !important;\n height:45px !important;\n"])));
var SiteMapNav = function () {
    var history = react_router_dom_1.useHistory();
    var toChange = function (link) {
        // 2. ./homeに遷移
        history.push(link);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(GlobalLayoutStyle_1.SectionWrapping, null,
            react_1["default"].createElement(GlobalLayoutStyle_1.BackgroundWhite, null,
                react_1["default"].createElement(GlobalLayoutStyle_1.IconFlex, { padding: true, nav: true },
                    react_1["default"].createElement(NavImageContainer, { onClick: function () { return toChange("/help"); } },
                        react_1["default"].createElement(NavImage, { src: "https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2F%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%81%E3%83%A7%E3%83%B3%E3%83%9E%E3%83%BC%E3%82%AF.png?alt=media&token=2675cdfd-6870-439d-b9b3-15525bfddfc9" }),
                        react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, { min: true }, "\u30D8\u30EB\u30D7")),
                    react_1["default"].createElement(NavImageContainer, { onClick: function () { return toChange("/terms"); } },
                        react_1["default"].createElement(NavImage, { src: "https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2F%E6%96%87%E7%AB%A0%E4%BB%98%E3%81%8D%E3%81%AE%E3%83%8E%E3%83%BC%E3%83%88%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E7%B4%A0%E6%9D%903.png?alt=media&token=2521f659-1da3-4bca-a2c0-89db8733506e" }),
                        react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, { min: true }, "\u5229\u7528\u898F\u7D04")),
                    react_1["default"].createElement(NavImageContainer, { onClick: function () { return toChange("/policy"); } },
                        react_1["default"].createElement(NavImage, { src: "https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2F%E9%8D%B5%E3%81%AE%E3%82%AA%E3%83%BC%E3%83%95%E3%82%9A%E3%83%B3%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E7%B4%A0%E6%9D%90.png?alt=media&token=150b483c-d565-41bb-8862-a26e345d0ecd" }),
                        react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, { min: true }, "\u30DD\u30EA\u30B7\u30FC")),
                    react_1["default"].createElement(NavImageContainer, { onClick: function () { return toChange("/workshopkit"); } },
                        react_1["default"].createElement(NavImage, { src: "https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2F%E9%A2%A8%E9%88%B4%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png?alt=media&token=9a97ae2a-b3d9-4a07-b280-867dabae033b" }),
                        react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, { min: true }, "\u4F53\u9A13\u30AD\u30C3\u30C8")),
                    react_1["default"].createElement(NavImageContainer, { onClick: function () { return toChange("/help"); } },
                        react_1["default"].createElement(NavImage, { src: "https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2F%E9%8D%B5%E3%81%AE%E3%82%AA%E3%83%BC%E3%83%95%E3%82%9A%E3%83%B3%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E7%B4%A0%E6%9D%90.png?alt=media&token=150b483c-d565-41bb-8862-a26e345d0ecd" }),
                        react_1["default"].createElement(GlobalLayoutStyle_1.BoldText, { min: true }, "\u7D20\u6750\u306B\u3064\u3044\u3066")))))));
};
exports["default"] = SiteMapNav;
var templateObject_1, templateObject_2;
